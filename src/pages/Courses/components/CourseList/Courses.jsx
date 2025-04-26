import React from 'react';
import CardsSkeleton from '../../../skeleton/cards-skeleton';
import { useSelector } from 'react-redux';
import CourseCards from './../../../../components/CourseCards';
const Courses = () => {
  const courses = useSelector((state) => state.courses.courses);
  const loading = useSelector((state) => state.courses.loading);
  return (
    <div className="flex flex-wrap justify-between gap-[20px] max-[1345px]:justify-evenly max-[1050px]:gap-[40px]">
      {loading ? (
        Array(12)
          .fill(0)
          .map((_, index) => (
            <CardsSkeleton key={index} width={322} height={293} />
          ))
      ) : courses.length > 0 ? (
        courses.map((item, index) => (
          <CourseCards
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
        ))
      ) : (
        <div className="w-[100%] rounded-[10px] bg-[#FF5353] p-[10px] text-center text-[20px] font-[700] text-[#fff]">
          دوره ای با این مشخصات یافت نشد
        </div>
      )}
    </div>
  );
};
export default Courses;
