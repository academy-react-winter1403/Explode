import React, { Fragment, useEffect } from 'react';
import CourseCards from '../CourseCards';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRelatedCourses } from './../../redux/courseSlice';
import { fetchRelatedBlogs } from '../../redux/blogSlice';

const RelatedSection = ({ courseSingle, teacherId, title, categoryId }) => {
  const dispatch = useDispatch();
  let relatedCourses = useSelector((state) => state.courses.relatedCourses);
  let relatedBlogs = useSelector((state) => state.blogs.relatedBlogs);
  const courseSingleLoading = useSelector((state) => state.courses.loading);
  const blogSingleLoading = useSelector((state) => state.blogs.loading);
  relatedCourses =
    relatedCourses.length > 0 &&
    relatedCourses.filter((course) => course.title !== title);
  relatedBlogs =
    relatedBlogs.news?.length > 0 &&
    relatedBlogs.news.filter((blog) => blog.title !== title);
  useEffect(() => {
    if (teacherId) {
      dispatch(fetchRelatedCourses(teacherId));
    }
  }, [teacherId]);

  useEffect(() => {
    if (categoryId) {
      dispatch(fetchRelatedBlogs(categoryId));
    }
  }, [categoryId]);
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className="mt-[30px]">
      <h2 className={` ${darkMode ? 'text-[#fff]' : 'text-[#707070]'} mb-[20px] text-[20px] font-[700]`}>
        {courseSingle ? 'دوره های مرتبط' : 'بلاگ های مرتبط'}
      </h2>
      <div className="flex flex-wrap items-center justify-between max-[680px]:justify-center">
        {courseSingle ? (
          <Fragment>
            {courseSingleLoading ? (
              'loading'
            ) : relatedCourses?.length > 0 ? (
              relatedCourses
                .slice(0, 4)
                .map((item) => (
                  <CourseCards
                    key={item.courseId}
                    isCourse={true}
                    title={item.title}
                    date={item.date}
                    author={item.teacherName}
                    courseCategory={
                      Array.isArray(item?.techs) && item.techs.length > 0
                        ? item.techs[0]
                        : ''
                    }
                    courseLevel={item.courseLevelName}
                    price={item.cost}
                    linkAddress={`/courses/single/${item.courseId}`}
                    image={item.tumbImageAddress}
                    width={321}
                    className={'max-[600px]:w-[100%]'}
                  />
                ))
            ) : (
              <div className="w-[100%] rounded-[10px] bg-[#FF5353] p-[10px] text-center font-bold text-[#fff]">
                دوره ی مرتبطی یافت نشد
              </div>
            )}
          </Fragment>
        ) : (
          <Fragment>
            {blogSingleLoading ? (
              'loading'
            ) : relatedBlogs?.length > 0 ? (
              relatedBlogs
                .slice(0, 4)
                .map((item) => (
                  <CourseCards
                    key={item.id}
                    isBlog={true}
                    title={item.title}
                    view={item.currentView}
                    linkAddress={`/blogs/single/${item.id}`}
                    image={item.currentImageAddressTumb}
                    date={item.insertDate}
                  />
                ))
            ) : (
              <div className="w-[100%] rounded-[10px] bg-[#FF5353] p-[10px] text-center font-bold text-[#fff]">
                {' '}
                مطالب مرتبطی یافت نشد
              </div>
            )}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default RelatedSection;
