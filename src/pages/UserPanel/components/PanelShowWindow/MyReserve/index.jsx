import { useState } from 'react';
import UserPanelFilterNav from '../../../../../components/UserPanelFilterNav';
import { SortingMyReserveOptionsButtonData } from './SortingMyReserveOptionsButtonData';
import UserPanelTitle from '../../../../../components/UserPanelTitle';
import TableComponent from '../../../../../components/TabelComponent';
import { getMyReservesWithPagination } from '../../../../../core/services/myreserve';
import EmptyState from '../../../../../components/EmtyState';
import usePaginationFetch from '../../../../../Hooks/usePaginationFetch';

const RowsOfPage = 10;

const MyReserve = () => {
  const {
    data,

    query,
    filters,
    pagination,
    handleSearch,
    handleStartDate,
    handleEndDate,
    setPage,
  } = usePaginationFetch(getMyReservesWithPagination);
  const [sorting, setSorting] = useState('');
  const [sortingType, setSortingType] = useState('DESC');
  const handleSortingChangeFunc = (sorting, sortingType) => {
    setSorting(sorting);
    setSortingType(sortingType);
    setPage((prev) => ({ ...prev, currentPage: 1 }));
  };
  return (
    <div>
      <UserPanelTitle title="رزرو من" />
      <div className="flex flex-col">
        <UserPanelFilterNav
          SearchHandler={handleSearch}
          handleStartDate={handleStartDate}
          handleEndtDate={handleEndDate}
          haveSortingButtons={true}
          sorting={sorting}
          handleSortingChange={handleSortingChangeFunc}
          sortingType={sortingType}
          SortingOptionsButtonData={SortingMyReserveOptionsButtonData}
        />

        {data?.length > 0 ? (
          <TableComponent
            data={data}
            pagination={pagination}
            setPagination={setPage}
            query={query}
          />
        ) : (
          <EmptyState
            icon="search"
            title="رزروی یافت نشد"
            description={
              query || filters.startDate || filters.endDate
                ? 'با معیارهای جستجوی شما هیچ رزروی مطابقت ندارد'
                : 'هنوز رزروی به لیست رزور های خود اضافه نکرده‌اید'
            }
          />
        )}
      </div>
    </div>
  );
};

export default MyReserve;
