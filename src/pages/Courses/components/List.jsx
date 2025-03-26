import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cards from '../../../components/shared/cards';

const List = () => {
  const [CourseList, setCourseList] = useState(null);

  const getCourses = async () => {
    const res = await axios.get(
      'https://classapi.sepehracademy.ir/api/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=Active&SortType=DESC&TechCount=0',
    );

    setCourseList(res.data);
  };

  useEffect(() => {
    getCourses();
  }, []);

    return (
      <div className='flex flex-wrap gap-y-10'>
        {CourseList?.courseFilterDtos.map((course, index) => {
          return (
            <Cards
              key={index}
              title={course.title}
              isCourse={true}
              author={course.teacherName}
              price={course.cost}
              width={'322px'}
              courseLevel={course.levelName}
              courseCategory={course.typeName}
              image={course.tumbImageAddress}
              linkAddress={`/course-detail/${course.courseId}`}
            />
          );
        })}
      </div>
    );
};

export default List;
