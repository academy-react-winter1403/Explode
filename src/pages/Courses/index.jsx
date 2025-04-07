import React, { Fragment, useEffect } from 'react';
import CourseList from './components/CourseList';
import CourseFilter from './components/CourseFilter';
import CoursesPageTitle from './components/CoursesPageTitle';
import useCourseStore from '../../Hooks/useCourseStore';

const Courses = () => {
  const {
    // State
    currentPage,
    query,
    category,
    levelId,
    teacherId,
    costDown,
    costUp,
    startDate,
    endDate,
    sorting,
    // Async Actions
    fetchInitialData,
    fetchCourses,
  } = useCourseStore();

  // Fetch initial data on mount
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  // Fetch courses when any filter changes
  useEffect(() => {
    fetchCourses();
  }, [
    currentPage,
    query,
    category,
    levelId,
    teacherId,
    costDown,
    costUp,
    startDate,
    endDate,
    fetchCourses,
    sorting,
  ]);

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
