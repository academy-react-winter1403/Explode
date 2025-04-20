import React from 'react';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import { useSelector } from 'react-redux';
import CourseCards from './../../../../components/CourseCards';

const Blogs = () => {
  const loading = useSelector((state) => state.blogs.loading);
  const blogs = useSelector((state) => state.blogs.blogs);
  return (
    <div className="flex flex-wrap justify-between gap-[20px] max-[1356px]:justify-center max-[1050px]:gap-[40px]">
      {loading ? (
        Array(8)
          .fill(0)
          .map((_, index) => (
            <CardsSkeleton key={index} width={431} height={293} className />
          ))
      ) : blogs.length > 0 ? (
        blogs.map((item) => (
          <CourseCards
            key={item.id}
            isBlog={true}
            width={431}
            title={item.title}
            view={item.currentView}
            date={item.insertDate}
            author={item.addUserFullName}
            image={item.currentImageAddressTumb}
            linkAddress={`/blogs/single/${item.id}`}
          />
        ))
      ) : (
        <div className="w-[100%] rounded-[10px] bg-[#FF5353] p-[10px] text-center text-[20px] font-[700] text-[#fff]">
          {' '}
          مطلبی با این مشخصات یافت نشد
        </div>
      )}
    </div>
  );
};

export default Blogs;
