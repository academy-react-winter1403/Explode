import React from 'react';

import CardsSkeleton from '../../../skeleton/cards-skeleton';
import CourseCards from '../../../../components/CourseCards';
import useCourseStore from '../../../../Hooks/useCourseStore';
const Courses = ({ perPage }) => {
  const { courses, loading } = useCourseStore();
  return (
    <div className="flex flex-wrap justify-between gap-[20px] max-[1050px]:justify-center max-[1050px]:gap-[40px]">
      {loading
        ? Array(perPage)
            .fill(0)
            .map((_, index) => (
              <CardsSkeleton key={index} width={322} height={293} />
            ))
        : courses.map((item, index) => (
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
            />
          ))}
    </div>
  );
};
export default Courses;
