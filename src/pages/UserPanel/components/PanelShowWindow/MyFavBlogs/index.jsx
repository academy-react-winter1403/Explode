import TableComponent from '../../../../../components/TabelComponent';
import UserPanelFilterNav from '../../../../../components/UserPanelFilterNav';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import { getMyFavoriteBlogs } from '../../../../../core/services/blogs';
import EmptyState from '../../../../../components/EmtyState';
import usePaginationFetch from '../../../../../Hooks/usePaginationFetch';
const RowsOfPage = 10;

const MyFavBlogs = () => {
  const {
    data,
    loading,
    query,
    filters,
    pagination,
    handleSearch,
    handleStartDate,
    handleEndDate,
    setPage,
  } = usePaginationFetch(getMyFavoriteBlogs);
  return (
    <div>
      <UserPanelTitle title="بلاگ های موردعلاقه" />
      <div className="flex flex-col">
        <UserPanelFilterNav
          SearchHandler={handleSearch}
          handleStartDate={handleStartDate}
          handleEndtDate={handleEndDate}
        />

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : data?.length > 0 ? (
          <TableComponent
            data={data}
            pagination={pagination}
            setPagination={setPage}
            query={query}
          />
        ) : (
          <EmptyState
            icon="search"
            title="بلاگ موردعلاقه ای یافت نشد"
            description={
              query || filters.startDate || filters.endDate
                ? 'با معیارهای جستجوی شما هیچ بلاگ موردعلاقه‌ای مطابقت ندارد'
                : 'هنوز بلاگی به لیست موردعلاقه‌های خود اضافه نکرده‌اید'
            }
          />
        )}
      </div>
    </div>
  );
};

export default MyFavBlogs;
