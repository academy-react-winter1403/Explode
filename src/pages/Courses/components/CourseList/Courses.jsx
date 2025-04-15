import React from 'react';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import { useSelector } from 'react-redux';
import ProductCards from './../../../../components/cards/index';
const Courses = () => {
  const courses = useSelector((state) => state.courses.courses)
  const loading = useSelector((state) => state.courses.loading)
  return (
    <div className="flex flex-wrap justify-between gap-[20px] max-[1050px]:justify-center max-[1050px]:gap-[40px]">
      {loading
        ? Array(12)
          .fill(0)
          .map((_, index) => (
            <CardsSkeleton key={index} width={322} height={293} />
          ))
        : courses.length > 0 ? courses.map((item, index) => (
          <ProductCards
            isCourse={true}
            key={index}
            width={322}
            title={item.title}
            author={item.teacherName}
            courseLevel={item.levelName}
            courseCategory={item.technologyList.split(',')[0]}
            price={item.cost}
            image={item.tumbImageAddress}
            linkAddress={`/courses/single/${item.courseId}`}
          />
        )) : <div className='text-center w-[100%] p-[10px] bg-[#FF5353] text-[#fff] font-[700] text-[20px] rounded-[10px]'>دوره ای با این مشخصات یافت نشد</div>}
    </div>
  );
};
export default Courses;
