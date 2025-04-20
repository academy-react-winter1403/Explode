import Courses from './Courses';
import Pagination from '../../../../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, setCurrentPage } from '../../../../redux/courseSlice';
import Sorting from '../../../../components/Sorting';

const CourseList = () => {
  const totalCourses = useSelector((state) => state.courses.totalCourses);
  const currentPage = useSelector((state) => state.courses.currentPage);
  const pageCount = Math.ceil(totalCourses / 12);
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    dispatch(setCurrentPage(data.selected + 1));
    dispatch(fetchCourses());
  };

  return (
    <div className="w-[1031px] max-[1050px]:w-[100%]">
      <Sorting />

      <Courses />

      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};
export default CourseList;
