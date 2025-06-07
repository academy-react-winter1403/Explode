import { Fragment, useEffect, useState } from 'react';
import { getBlogsList } from '../../../../core/services/blogs';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import CourseCards from '../../../../components/CourseCards';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopBlogs } from '../../../../redux/courseSlice';

const BlogsList = () => {
  const dispatch = useDispatch()
  const { topBlogs } = useSelector((state) => state.courses)
  useEffect(() => {
    dispatch(fetchTopBlogs())
  }, []);

  return (
    <Fragment>
      {topBlogs?.map((item, index) => (
        <CourseCards
          key={index}
          title={item.title}
          isBlog={true}
          author={item.addUserFullName}
          date={item.insertDate}
          view={item.currentView}
          width={431}
          image={item.currentImageAddressTumb}
          linkAddress={`/blogs/single/${item.id}`}
        />
      ))}
    </Fragment>
  );
};
export default BlogsList;
