import Courses from './Courses';
import Pagination from '../../../../components/Pagination';
import SortingContainer from './SortingContainer';
import useCourseStore from '../../../../Hooks/useCourseStore';
const CourseList = () => {
  const {
    totalCourses,
    currentPage,
    setCurrentPage,
    sorting,
    setSorting,
    sortingType,
    setSortingType,
    perPage,
  } = useCourseStore();
  const pageCount = Math.ceil(totalCourses / perPage);
  const handlePageClick = (data) => {
    setCurrentPage(data.selected + 1);
  };
  const handleSortingChangeFunc = (sorting, sortingType) => {
    setSorting(sorting);
    setSortingType(sortingType);
    setCurrentPage(1);
  };

  return (
    <div className="w-[1031px] max-[1050px]:w-[100%]">
      <SortingContainer
        sorting={sorting}
        sortingType={sortingType}
        handleSortingChange={handleSortingChangeFunc}
      />

      <Courses perPage={perPage} />

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};
export default CourseList;
