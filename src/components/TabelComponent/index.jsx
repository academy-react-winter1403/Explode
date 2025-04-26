import { deprateTime } from '../../utils/DateFormatter';
import Pagination from '../Pagination';
import viewIcon from '../../assets/icons/view.png';
import IconSet from '../shared/IconSet';
import { Link } from 'react-router';
const TableComponent = ({
  data,
  pagination,
  setPagination,
  query,
  short = false,
}) => {
  console.log(data);
  // عنوان‌های ستون‌ها
  const columns = [
    { title: '#', accessor: 'tumbImageAddress', accessor2: 'tumbImageAddress' },
    { title: 'نام', accessor: 'courseTitle', accessor2: 'studentName' },
    { title: 'مدرس', accessor: 'teacheName', accessor2: 'courseName' },
    {
      title: 'تاریخ برگزاری',
      accessor: 'lastUpdate',
      accessor2: 'reserverDate',
    },
    { title: 'تاریخ اتمام', accessor: 'lastUpdate', accessor2: 'reserverDate' },
    { title: 'سطح', accessor: 'levelName', accessor2: 'studentId' },
    { title: 'icon', accessor: 'status' },
  ];

  // حالت‌های صفحه‌بندی
  const getValue = (row, accessor, accessor2) => {
    // اگر accessor وجود داشت و مقدار داشت، آن را برگردان
    if (
      row[accessor] !== undefined &&
      row[accessor] !== null &&
      row[accessor] !== ''
    ) {
      return row[accessor];
    }
    // اگر accessor2 وجود داشت و مقدار داشت، آن را برگردان
    if (
      accessor2 &&
      row[accessor2] !== undefined &&
      row[accessor2] !== null &&
      row[accessor2] !== ''
    ) {
      return row[accessor2];
    }
    // در غیر این صورت رشته خالی برگردان
    return '';
  };
  console.log('data', data);
  // تابع تغییر صفحه
  const handlePageClick = (event) => {
    setPagination({ ...pagination, currentPage: event.selected + 1 });
    // در اینجا می‌توانید درخواست API برای دریافت داده‌های صفحه جدید را انجام دهید
  };
  console.log(pagination);
  return (
    <div
      style={{
        height: short ? '300px' : '600px',
      }}
      className="mx-[4px] h-[600px] overflow-hidden rounded-[24px] bg-[#F6F6F6] pb-[28px] shadow-sm"
    >
      <div className="overflow-x-hidden">
        <div className="min-w-full bg-[#F6F6F6]">
          {/* هدر جدول */}
          <div>
            <div className="m-[16px] flex rounded-[16px] bg-[#F1F1F1] pr-6">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex-1 px-4 py-3 text-[14px] font-[600] text-[#707070]"
                  style={{ minWidth: '110px' }}
                >
                  {column.title}
                </div>
              ))}
            </div>
          </div>

          {/* بدنه جدول */}
          <div className="mx-[16px] h-[500px]">
            {data?.length > 0 ? (
              data.map((row, rowIndex) => (
                <div key={rowIndex} className="mb-[8px] flex rounded-[8px]">
                  {columns.map((column, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex flex-1 items-center justify-center overflow-hidden px-4 py-4 text-center text-sm font-[700] whitespace-nowrap text-[#2F2F2F]"
                      style={{
                        lineHeight: '4',
                        minWidth: '100px',
                        maxWidth: '150px',
                        display: '-webkit-box',

                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 1,
                      }}
                    >
                      {(() => {
                        const value = getValue(
                          row,
                          column.accessor,
                          column.accessor2,
                        );

                        // اگر مقدار شامل لینک تصویر بود
                        if (typeof value === 'string' && column.title == '#') {
                          return (
                            <img
                              src={
                                value != ''
                                  ? value
                                  : '/src/assets/img/figma.jpg'
                              }
                              className="Center flex h-[100%] w-[100%] object-cover"
                              alt={value ? 'تصویر دوره' : 'تصویر پیش‌فرض'}
                            />
                          );
                        }
                        if (column.title == 'icon') {
                          return (
                            <Link
                              to={
                                row.courseId
                                  ? `/courses/single/${row.courseId}`
                                  : `/blogs/single/${row.reserveId}`
                              }
                              className="h-[24px] w-[24px]"
                            >
                              <IconSet
                                className="mt-4 cursor-pointer"
                                imageAddress={viewIcon}
                              />
                            </Link>
                          );
                        }

                        // اگر مقدار شامل T بود (تاریخ ISO)
                        if (typeof value === 'string' && value.includes('T')) {
                          return deprateTime(value); // فرض بر این است که dateFormatter وجود دارد
                        }

                        // در غیر این صورت مقدار اصلی را برگردان
                        return value;
                      })()}
                    </div>
                  ))}
                </div>
              ))
            ) : (
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    دوره‌ای یافت نشد
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {query
                      ? 'با معیارهای جستجوی شما هیچ دوره‌ای مطابقت ندارد'
                      : 'در حال حاضر هیچ دوره‌ای برای نمایش وجود ندارد'}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* صفحه‌بندی */}
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pagination.pageCount}
        currentPage={pagination.currentPage}
      />
    </div>
  );
};

export default TableComponent;
