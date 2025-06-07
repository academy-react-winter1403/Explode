import { Fragment, useEffect, useState } from 'react';
import { getTopCourses } from '../../../../core/services/courses';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import CourseCards from '../../../../components/CourseCards';
import { FaSpinner } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopCourses, setCourseLoadingData } from '../../../../redux/courseSlice';

const CoursesList = () => {
  const { courseLoadingData, topCourses, teacherLoadingData, topBlogsLoading } = useSelector((state) => state.courses)
  const { darkMode } = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTopCourses())
  }, []);

  if (courseLoadingData && topBlogsLoading) {
    return (
      <div className={` ${darkMode ? 'bg-thirdly' : 'bg-[#fff]'} flex flex-col items-center justify-center z-1000  fixed top-0 left-0 w-full h-full`}>
        <FaSpinner className={`animate-spin text-[60px] mb-[10px] ${darkMode && 'text-[#fff]'}`} />
        <p className={`font-bold text-[30px] ${darkMode && 'text-[#fff]'}`}>در حال دریافت اطلاعات ...</p>
      </div>
    );
  }

  return (
    <Fragment>
      {
        topCourses?.map((course, index) => (
          <CourseCards
            key={index}
            title={course.title}
            isCourse={true}
            author={course.teacherName}
            price={course.cost}
            width={322}
            courseLevel={course.levelName}
            courseCategory={course.typeName}
            image={course.tumbImageAddress}
            linkAddress={`/courses/single/${course.courseId}`}
          />
        ))
      }
    </Fragment>
  );
};
export default CoursesList;
