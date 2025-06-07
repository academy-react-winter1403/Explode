import React, { Fragment, useEffect, useState } from 'react';
import CourseList from './components/CourseList';
import CourseFilter from './components/CourseFilter';
import CoursesPageTitle from './components/CoursesPageTitle';
import { useDispatch, useSelector } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import {

  fetchCategories,
  fetchCourses,
  fetchLevels,
  fetchTeachers,
} from '../../redux/courseSlice';
const Courses = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true)
  const { darkMode } = useSelector((state) => state.darkMode)
  const fetchData = async () => {
    try {
      await dispatch(fetchCourses());
      await dispatch(fetchCategories());
      await dispatch(fetchLevels());
      await dispatch(fetchTeachers());
      setLoading(false)
    }
    catch {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);

  if (loading) {
    return (
      <div className={` ${darkMode ? 'bg-thirdly' : 'bg-[#fff]'} flex flex-col items-center justify-center z-1000  fixed top-0 left-0 w-full h-full`}>
        <FaSpinner className={`animate-spin text-[60px] mb-[10px] ${darkMode && 'text-[#fff]'}`} />
        <p className={`font-bold text-[30px] ${darkMode && 'text-[#fff]'}`}>در حال دریافت اطلاعات ...</p>
      </div>
    );
  }
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
