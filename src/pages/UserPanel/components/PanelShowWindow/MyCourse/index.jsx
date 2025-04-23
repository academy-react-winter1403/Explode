import TableComponent from '../../../../../components/TabelComponent';
import UserPanelFilterNav from '../../../../../components/UserPanelFilterNav';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import { getMyCoursesWithPagination } from '../../../../../core/services/mycourses';
import EmptyState from '../../../../../components/EmtyState';
import usePaginationFetch from '../../../../../Hooks/usePaginationFetch';

const RowsOfPage = 10;

const MyCourse = ({
  shortList = false,
  shortShowTitle,
  shortShowStateValue,
}) => {
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
  } = usePaginationFetch(getMyCoursesWithPagination, {
    name: 'listOfMyCourses',
  });

  return (
    <div className="w-full">
      {!shortList && <UserPanelTitle title="دوره من" />}

      <div className="flex h-full flex-col">
        {!shortList && (
          <UserPanelFilterNav
            SearchHandler={handleSearch}
            handleStartDate={handleStartDate}
            handleEndtDate={handleEndDate}
          />
        )}

        {loading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : data.listOfMyCourses?.length > 0 ? (
          <TableComponent
            data={data.listOfMyCourses}
            query={query}
            pagination={pagination}
            setPagination={setPage}
          />
        ) : (
          <EmptyState
            icon="book"
            title="دوره‌ای یافت نشد"
            shortShowStateValue={shortShowStateValue}
            shortShowTitle={shortShowTitle}
            description={
              query || filters.startDate || filters.endDate
                ? 'با معیارهای جستجوی شما هیچ دوره‌ای مطابقت ندارد'
                : 'هنوز دوره‌ای ثبت نکرده‌اید'
            }
          />
        )}
      </div>
    </div>
  );
};

export default MyCourse;
