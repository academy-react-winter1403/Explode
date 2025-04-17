import Pagination from '../Pagination';

const TableComponent = ({ data, pagination, setPagination, query }) => {
  // عنوان‌های ستون‌ها
  const columns = [
    { title: '#', accessor: 'id' },
    { title: 'نام', accessor: 'name' },
    { title: 'مدرس', accessor: 'category' },
    { title: 'تاریخ برگزاری', accessor: 'price' },
    { title: 'تاریخ اتمام', accessor: 'stock' },
    { title: 'سطح', accessor: 'status' },
    { title: '', accessor: 'status' },
  ];

  // حالت‌های صفحه‌بندی

  // تابع تغییر صفحه
  const handlePageClick = (event) => {
    setPagination({ ...pagination, currentPage: event.selected + 1 });
    // در اینجا می‌توانید درخواست API برای دریافت داده‌های صفحه جدید را انجام دهید
  };
  console.log(pagination);
  return (
    <div className="mx-[4px] h-full overflow-hidden rounded-[24px] bg-[#F6F6F6] pb-[28px] shadow-sm">
      <div className="overflow-x-auto">
        <div className="min-w-full bg-[#F6F6F6]">
          {/* هدر جدول */}
          <div>
            <div className="m-[16px] flex rounded-[16px] bg-[#F1F1F1]">
              {columns.map((column, index) => (
                <div
                  key={index}
                  className="flex-1 px-4 py-3 text-[14px] font-[600] tracking-wider text-[#707070]"
                  style={{ minWidth: '110px' }}
                >
                  {column.title}
                </div>
              ))}
            </div>
          </div>

          {/* بدنه جدول */}
          <div className="mx-[16px] h-[420px]">
            {data?.length > 0 ? (
              data.map((row, rowIndex) => (
                <div key={rowIndex} className="mb-[8px] flex rounded-[8px]">
                  {columns.map((column, colIndex) => (
                    <div
                      key={colIndex}
                      className="flex-1 px-4 py-4 text-right text-sm font-[700] whitespace-nowrap text-[#2F2F2F]"
                      style={{ minWidth: '110px' }}
                    >
                      {row[column.accessor]}
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
