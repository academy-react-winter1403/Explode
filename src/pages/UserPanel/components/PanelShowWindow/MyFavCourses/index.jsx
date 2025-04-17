import TableComponent from '../../../../../components/TabelComponent';
import UserPanelFilterNav from '../../../../../components/UserPanelFilterNav';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import { getMyFavoriteCourses } from '../../../../../core/services/mycourses';
import EmptyState from '../../../../../components/EmtyState';
import usePaginationFetch from '../../../../../Hooks/usePaginationFetch';

const RowsOfPage = 10;

const MyFavCourses = () => {
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
  } = usePaginationFetch(getMyFavoriteCourses);
  return (
    <div className="h-full">
      <UserPanelTitle title="دوره های موردعلاقه" />
      <div className="flex h-full flex-col">
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
            query={query}
            pagination={pagination}
            setPagination={setPage}
          />
        ) : (
          <EmptyState
            icon="search"
            title="دوره ای یافت نشد"
            description={
              query || filters.startDate || filters.endDate
                ? 'با معیارهای جستجوی شما هیچ دوره ی مورد علاقه ای مطابقت ندارد'
                : 'هنوز دوره ای به لیست موردعلاقه‌های خود اضافه نکرده‌اید'
            }
          />
        )}
      </div>
    </div>
  );
};

export default MyFavCourses;
