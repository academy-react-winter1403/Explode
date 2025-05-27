import { useSelector } from 'react-redux';
import { deprateTime } from '../../utils/DateFormatter';
import Pagination from '../Pagination';
import viewIcon from '../../assets/icons/icons8-eye-24.png';
import IconSet from '../shared/IconSet';
import { Link } from 'react-router';
import clsx from 'clsx';

const TableComponentBlogs = ({
  data = [],
  pagination,
  setPagination,
  query,
  short = false,
}) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  // تعریف ستون‌ها برای بلاگ‌ها
  const columnConfigs = [
    {
      title: 'عنوان بلاگ',
      accessors: ['courseName'],
      defaultValue: 'بدون عنوان',
    },
    {
      title: 'دانشجو',
      accessors: ['studentName'],
      defaultValue: 'بدون دانشجو',
    },
    {
      title: 'شناسه دوره',
      accessors: ['courseId'],
      defaultValue: 'نامشخص',
    },
    {
      title: 'تاریخ رزرو',
      accessors: ['reserverDate'],
      render: (value) =>
        value?.includes('T') ? deprateTime(value) : value || 'نامشخص',
    },
    {
      title: 'وضعیت',
      accessors: ['accept'],
      render: (value) => (
        <span
          className={clsx('rounded-full px-2 py-1 text-xs', {
            'bg-green-500/20 text-green-400': value,
            'bg-red-500/20 text-red-400': !value,
          })}
        >
          {value ? 'تأیید شده' : 'تأیید نشده'}
        </span>
      ),
    },
    {
      title: 'عملیات',
      accessors: ['reserveId'],
      render: (value, row) => (
        <div className="flex items-center justify-center gap-2">
          <Link to={`/blogs/single/${row.reserveId}`} className="h-6 w-6">
            <IconSet
              className={clsx(
                'cursor-pointer transition-transform hover:scale-110',
                {
                  'brightness-100 invert': darkMode,
                  'brightness-50 contrast-150': !darkMode,
                },
              )}
              imageAddress={viewIcon}
            />
          </Link>
        </div>
      ),
    },
  ];

  // انتخاب ستون‌ها بر اساس short
  const fullColumns = columnConfigs;
  const shortColumns = fullColumns.filter((col) =>
    ['عنوان بلاگ', 'دانشجو', 'وضعیت', 'عملیات'].includes(col.title),
  );
  const columns = short ? shortColumns : fullColumns;

  // تابع استخراج مقدار
  const getValue = (row, accessors, defaultValue = '') => {
    for (const accessor of accessors) {
      if (
        row[accessor] !== undefined &&
        row[accessor] !== null &&
        row[accessor] !== ''
      ) {
        return row[accessor];
      }
    }
    return defaultValue;
  };

  // تابع تغییر صفحه
  const handlePageClick = (event) => {
    if (setPagination) {
      setPagination({ ...pagination, currentPage: event.selected + 1 });
    }
  };

  // محدود کردن داده‌ها در نسخه کوتاه
  const displayData = short ? data.slice(0, 3) : data;

  return (
    <div
      className={clsx(
        'mx-4 overflow-hidden rounded-3xl shadow-sm transition-all duration-300 lg:mx-16',
        {
          'bg-[#292a2d]': darkMode,
          'bg-gradient-to-br from-white via-blue-50 to-indigo-50': !darkMode,
          'h-[280px]': short,
          'h-[600px]': !short,
        },
      )}
    >
      <div className="overflow-x-auto">
        <div
          className={clsx('min-w-full', {
            'bg-[#292a2d]': darkMode,
            'bg-[#F6F6F6]': !darkMode,
          })}
        >
          {/* هدر جدول */}
          <div
            className={clsx('m-4 flex rounded-2xl pr-6', {
              'bg-[#3a3a3a]': darkMode,
              'bg-[#F1F1F1]': !darkMode,
            })}
          >
            {columns.map((column, index) => (
              <div
                key={index}
                className={clsx(
                  'flex-1 truncate px-4 py-3 text-sm font-semibold',
                  {
                    'text-gray-300': darkMode,
                    'text-[#707070]': !darkMode,
                  },
                )}
                style={{ minWidth: '120px', maxWidth: '200px' }}
                title={column.title}
              >
                {column.title}
              </div>
            ))}
          </div>

          {/* بدنه جدول */}
          <div
            className={clsx('mx-4', {
              'h-[180px]': short,
              'h-[500px]': !short,
            })}
          >
            {displayData?.length > 0 ? (
              displayData.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={clsx(
                    'mb-2 flex rounded-lg transition-colors duration-200',
                    {
                      'bg-[#2f2f2f] hover:bg-[#3a3a3a]': darkMode,
                      'bg-white hover:bg-gray-50': !darkMode,
                    },
                  )}
                >
                  {columns.map((column, colIndex) => {
                    const value = getValue(
                      row,
                      column.accessors,
                      column.defaultValue,
                    );
                    return (
                      <div
                        key={colIndex}
                        className={clsx(
                          'flex flex-1 items-center justify-center truncate px-4 py-3 text-sm font-medium',
                          {
                            'text-white': darkMode,
                            'text-[#2F2F2F]': !darkMode,
                          },
                        )}
                        style={{
                          minWidth: '120px',
                          maxWidth: '200px',
                        }}
                        title={typeof value === 'string' ? value : ''} // tooltip برای متن‌های طولانی
                      >
                        {column.render ? column.render(value, row) : value}
                      </div>
                    );
                  })}
                </div>
              ))
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className={clsx('mx-auto h-12 w-12', {
                      'text-gray-400': darkMode,
                      'text-gray-500': !darkMode,
                    })}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3
                    className={clsx('mt-2 text-sm font-medium', {
                      'text-gray-200': darkMode,
                      'text-gray-900': !darkMode,
                    })}
                  >
                    بلاگی یافت نشد
                  </h3>
                  <p
                    className={clsx('mt-1 text-sm', {
                      'text-gray-400': darkMode,
                      'text-gray-500': !darkMode,
                    })}
                  >
                    {query
                      ? 'با معیارهای جستجوی شما هیچ بلاگی مطابقت ندارد'
                      : 'در حال حاضر هیچ بلاگی برای نمایش وجود ندارد'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* صفحه‌بندی (فقط در نسخه کامل) */}
      {!short && pagination && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pagination.pageCount}
          currentPage={pagination.currentPage}
        />
      )}
    </div>
  );
};

export default TableComponentBlogs;
