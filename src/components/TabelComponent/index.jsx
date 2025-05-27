import { useSelector } from 'react-redux';
import { useState } from 'react';
import { deprateTime } from '../../utils/DateFormatter';
import Pagination from '../Pagination';
import viewIcon from '../../assets/icons/icons8-eye-24.png';
import payicon from '../../assets/icons/icons8-money-24.png';
import IconSet from '../shared/IconSet';
import { Link } from 'react-router';
import clsx from 'clsx';
import { Formik, Form } from 'formik';
import CustomInputField from '../shared/CustomInputField';
import Button from '../shared/Button';
import { paymentvalidationSchema } from '../../core/validation';
import toast from 'react-hot-toast';
import { addUserPayment } from '../../core/services/payment';
import { convertToWords } from '../../core/services/convertToToman';

// PaymentModal component with Persian localization, fancy styling, and glassmorphism
const PaymentModal = ({ isOpen, onClose, onSubmit, courseId, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      {/* Backdrop با افکت شیشه‌ای */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* محتوای مودال */}
      <div className="relative w-full max-w-2xl transform transition-all duration-500">
        {/* افکت نورپردازی پشت مودال */}
        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-xl" />

        {/* کارت مودال */}
        <div
          className={`relative overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-lg ${
            darkMode
              ? 'border-gray-700 bg-gray-800/90'
              : 'border-white/20 bg-white/90'
          }`}
        >
          {/* هدر مودال با افکت گرادیانت */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-5 text-center">
            <h2 className="text-xl font-bold text-white">پرداخت دوره</h2>
            <p className="mt-1 text-sm text-blue-100">
              لطفا اطلاعات پرداخت را وارد نمایید
            </p>
          </div>

          {/* بدنه فرم */}
          <Formik
            initialValues={{
              paid: '',
              courseId: courseId || '',
              paymentDate: new Date().toISOString().split('T')[0],
              paymentInvoiceNumber: '',
            }}
            validationSchema={paymentvalidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              onSubmit(values, setSubmitting);
            }}
          >
            {({ isSubmitting, values }) => (
              <Form className="space-y-3 p-5">
                {/* فیلد مبلغ پرداختی */}
                <div className="group">
                  <label
                    className={`mb-1 block text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    مبلغ پرداختی (تومان)
                  </label>
                  <div className="relative">
                    <CustomInputField
                      name="paid"
                      type="number"
                      placeholder="مثال: 250000"
                      disable={isSubmitting}
                      className={`w-full rounded-lg border py-2 pr-4 pl-10 text-sm font-medium ${
                        darkMode
                          ? 'border-gray-600 bg-gray-700'
                          : 'border-gray-300 bg-white text-gray-800'
                      }`}
                    />
                    <span
                      className={`absolute top-1/2 left-3 -translate-y-1/2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      ﷼
                    </span>
                  </div>
                </div>

                {/* فیلد شناسه دوره */}
                <div className="group">
                  <label
                    className={`mb-1 block text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    شناسه دوره
                  </label>
                  <CustomInputField
                    name="courseId"
                    type="text"
                    disable={true}
                    className={`w-full rounded-lg border px-4 py-2 text-sm ${
                      darkMode
                        ? 'border-gray-600 bg-gray-700'
                        : 'border-gray-300 bg-gray-100 text-gray-800'
                    }`}
                  />
                </div>

                {/* فیلد تاریخ پرداخت */}
                <div className="group">
                  <label
                    className={`mb-1 block text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    تاریخ پرداخت
                  </label>
                  <div className="relative">
                    <CustomInputField
                      name="paymentDate"
                      type="date"
                      disable={isSubmitting}
                      className={`w-full rounded-lg border px-4 py-2 text-sm ${
                        darkMode
                          ? 'border-gray-600 bg-gray-700'
                          : 'border-gray-300 bg-white text-gray-800'
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* فیلد شماره فاکتور */}
                <div className="group">
                  <label
                    className={`mb-1 block text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    شماره فاکتور
                  </label>
                  <CustomInputField
                    name="paymentInvoiceNumber"
                    type="number"
                    placeholder="مثال: 12345"
                    disable={isSubmitting}
                    className={`w-full rounded-lg border px-4 py-2 text-sm ${
                      darkMode
                        ? 'border-gray-600 bg-gray-700'
                        : 'border-gray-300 bg-white text-gray-800'
                    }`}
                  />
                </div>

                {/* نمایش مبلغ به حروف */}
                {values.paid && (
                  <div
                    className={`rounded-lg p-2 text-center text-xs ${
                      darkMode
                        ? 'bg-blue-900/20 text-blue-200'
                        : 'bg-blue-50/50 text-blue-700'
                    }`}
                  >
                    مبلغ: {Number(values.paid).toLocaleString()} تومان
                    <br />
                    <span className="text-xs">
                      ({convertToWords(values.paid)} تومان)
                    </span>
                  </div>
                )}

                {/* دکمه‌های اقدام */}
                <div className="flex justify-end space-x-3 pt-3">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className={`flex items-center justify-center rounded-lg border px-5 py-1.5 text-sm font-medium ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    انصراف
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-1.5 text-sm font-medium text-white shadow hover:from-blue-600 hover:to-indigo-700 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="mr-2 h-3 w-3 animate-spin text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        در حال پردازش...
                      </>
                    ) : (
                      'تایید و پرداخت'
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          {/* پاورقی مودال */}
          <div
            className={`border-t p-3 text-center text-xs ${
              darkMode
                ? 'border-gray-700 bg-gray-800/50 text-gray-400'
                : 'border-gray-200 bg-gray-50/50 text-gray-500'
            }`}
          >
            <p>اطلاعات پرداخت شما با امنیت کامل ذخیره می‌شود</p>
          </div>
        </div>
      </div>
    </div>
  );
};
const TableComponent = ({
  data = [],
  pagination,
  setPagination,
  query,
  short = false,
  dataType = 'courses', // Only 'courses' or 'favorites'
}) => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  // Handle payment modal open
  const handlePaymentClick = (courseId) => {
    setSelectedCourseId(courseId);
    setIsPaymentModalOpen(true);
  };

  // Handle payment form submission
  const handlePaymentSubmit = async (values, setSubmitting) => {
    try {
      const res = await addUserPayment(values);
      if (res.success) {
        toast.success('پرداخت شما با موفقیت ثبت شد');
        setIsPaymentModalOpen(false);
      } else {
        toast.error('خطایی در ثبت پرداخت رخ داد');
      }
    } catch (error) {
      console.log(error);
      toast.error('خطایی در ارتباط با سرور رخ داد');
    } finally {
      setSubmitting(false);
    }
  };

  // Define column configurations for courses and favorites
  const columnConfigs = {
    courses: [
      {
        title: 'تصویر',
        accessors: ['tumbImageAddress'],
        render: (value) => (
          <img
            src={value || '/src/assets/img/figma.jpg'}
            className="h-12 w-12 rounded object-cover"
            alt={value ? 'تصویر دوره' : 'تصویر پیش‌فرض'}
          />
        ),
      },
      {
        title: 'عنوان دوره',
        accessors: ['courseTitle'],
        defaultValue: 'بدون عنوان',
        className: 'truncate-text',
      },
      {
        title: 'مدرس',
        accessors: ['fullName', 'teacherName'],
        defaultValue: 'بدون مدرس',
      },
      {
        title: 'تاریخ به‌روزرسانی',
        accessors: ['lastUpdate'],
        render: (value) =>
          value?.includes('T') ? deprateTime(value) : value || 'نامشخص',
      },
      {
        title: 'سطح',
        accessors: ['levelName'],
        defaultValue: 'نامشخص',
      },
      {
        title: 'عملیات',
        accessors: ['courseId'],
        render: (value, row) => (
          <div className="flex items-center gap-4">
            <Link to={`/courses/single/${row.courseId}`} className="h-6 w-6">
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
            <div
              className="h-6 w-6 cursor-pointer"
              onClick={() => handlePaymentClick(row.courseId)}
            >
              <IconSet
                className={clsx(
                  'cursor-pointer transition-transform hover:scale-110',
                  {
                    'brightness-100 invert': darkMode,
                    'brightness-50 contrast-150': !darkMode,
                  },
                )}
                imageAddress={payicon}
              />
            </div>
          </div>
        ),
      },
    ],
    favorites: [
      {
        title: 'تصویر',
        accessors: ['tumbImageAddress'],
        render: (value) => (
          <img
            src={value || '/src/assets/img/figma.jpg'}
            className="h-12 w-12 rounded object-cover"
            alt={value ? 'تصویر دوره' : 'تصویر پیش‌فرض'}
          />
        ),
      },
      {
        title: 'عنوان دوره',
        accessors: ['courseTitle'],
        defaultValue: 'بدون عنوان',
        className: 'truncate-text',
      },
      {
        title: 'مدرس',
        accessors: ['teacherName'],
        defaultValue: 'بدون مدرس',
      },
      {
        title: 'تاریخ به‌روزرسانی',
        accessors: ['lastUpdate'],
        render: (value) =>
          value?.includes('T') ? deprateTime(value) : value || 'نامشخص',
      },
      {
        title: 'سطح',
        accessors: ['levelName'],
        defaultValue: 'نامشخص',
      },
      {
        title: 'عملیات',
        accessors: ['courseId'],
        render: (value, row) => (
          <div className="flex items-center gap-4">
            <Link to={`/courses/single/${row.courseId}`} className="h-6 w-6">
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
            <div
              className="h-6 w-6 cursor-pointer"
              onClick={() => handlePaymentClick(row.courseId)}
            >
              <IconSet
                className={clsx(
                  'cursor-pointer transition-transform hover:scale-110',
                  {
                    'brightness-100 invert': darkMode,
                    'brightness-50 contrast-150': !darkMode,
                  },
                )}
                imageAddress={payicon}
              />
            </div>
          </div>
        ),
      },
    ],
  };

  // Select columns based on short and dataType
  const fullColumns = columnConfigs[dataType] || columnConfigs.courses;
  const shortColumns = fullColumns.filter((col) =>
    ['تصویر', 'عنوان دوره', 'مدرس', 'عملیات'].includes(col.title),
  );
  const columns = short ? shortColumns : fullColumns;

  // Function to extract value from row
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

  // Handle pagination
  const handlePageClick = (event) => {
    if (setPagination) {
      setPagination({ ...pagination, currentPage: event.selected + 1 });
    }
  };

  // Limit data for short version
  const displayData = short ? data.slice(0, 3) : data;

  return (
    <div
      className={clsx(
        'mx-0 min-w-[674px] overflow-hidden rounded-3xl shadow-sm transition-all duration-300 lg:mx-16',
        {
          'bg-[#292a2d]': darkMode,
          'bg-gradient-to-br from-white via-blue-50 to-indigo-50': !darkMode,
          'h-[280px]': short,
          'h-[600px]': !short,
        },
      )}
    >
      <style>
        {`
          .truncate-text {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: 0.9rem;
          }
        `}
      </style>
      <div className="overflow-x-auto">
        <div
          className={clsx('min-w-[650px]', {
            'bg-[#292a2d]': darkMode,
            'bg-[#F6F6F6]': !darkMode,
          })}
        >
          {/* Table Header */}
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
                style={{
                  minWidth: column.title.includes('عنوان') ? '150px' : '120px',
                  maxWidth: column.title.includes('عنوان') ? '250px' : '200px',
                }}
                title={column.title}
              >
                {column.title}
              </div>
            ))}
          </div>

          {/* Table Body */}
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
                          'flex flex-1 items-center justify-center px-4 py-3 text-sm font-medium',
                          column.className,
                          {
                            'text-white': darkMode,
                            'text-[#2F2F2F]': !darkMode,
                          },
                        )}
                        style={{
                          minWidth: column.title.includes('عنوان')
                            ? '150px'
                            : '120px',
                          maxWidth: column.title.includes('عنوان')
                            ? '250px'
                            : '200px',
                        }}
                        title={typeof value === 'string' ? value : ''}
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
                      '': darkMode,
                      'text-gray-900': !darkMode,
                    })}
                  >
                    دوره‌ای یافت نشد
                  </h3>
                  <p
                    className={clsx('mt-1 text-sm', {
                      'text-gray-400': darkMode,
                      'text-gray-500': !darkMode,
                    })}
                  >
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

      {/* Pagination */}
      {!short && pagination && (
        <Pagination
          handlePageClick={handlePageClick}
          pageCount={pagination.pageCount}
          currentPage={pagination.currentPage}
        />
      )}

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        onSubmit={handlePaymentSubmit}
        courseId={selectedCourseId}
        darkMode={darkMode}
      />
    </div>
  );
};

export default TableComponent;
