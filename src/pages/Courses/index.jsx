import React, { Fragment, useEffect } from 'react';
import CourseList from './components/CourseList';
import CourseFilter from './components/CourseFilter';
import CoursesPageTitle from './components/CoursesPageTitle';
import { useDispatch } from 'react-redux';
import {
  fetchCategories,
  fetchCourses,
  fetchLevels,
  fetchTeachers,
} from '../../redux/courseSlice';
const Courses = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses());
    dispatch(fetchCategories());
    dispatch(fetchLevels());
    dispatch(fetchTeachers());
  }, []);
  return (
    <Fragment>
      <CoursesPageTitle />
      <section className="m-[0_auto] mb-[80px] flex max-w-[1360px] items-start justify-between max-[1460px]:p-[0_16px] max-[1050px]:flex-col max-[1050px]:gap-[40px]">
        <CourseFilter />
        <CourseList />
      </section>
    </Fragment>
  );
};

export default Courses;
