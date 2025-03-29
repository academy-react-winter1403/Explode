import SortingList from './sorting-list';
import Courses from './courses';
import Pagination from '../../../../components/shared/pagination';
const CourseList = ({
    loading,
    courses,
    totalCourses,
    setCurrentPage,
    perPage,
    currentPage,
    sorting,
    setSorting,
    sortingType,
    setSortingType
}) => {
    const pageCount = Math.ceil(totalCourses / perPage)
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1)
    }
    const handleSortingChange = (sorting, sortingType) => {
        setSorting(sorting)
        setSortingType(sortingType)
        setCurrentPage(1)
    }

    return (
        <div className='w-[1031px] '>
            <SortingList sorting={sorting} sortingType={sortingType} handleSortingChange={handleSortingChange} />

            <Courses loading={loading} courses={courses} perPage={perPage} />

            <Pagination pageCount={pageCount} currentPage={currentPage} handlePageClick={handlePageClick} />
        </div>
    )
}
export default CourseList