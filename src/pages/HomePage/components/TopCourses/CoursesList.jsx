import { Fragment, useEffect, useState } from 'react';
import CourseCards from '../../../../components/CourseCards';
import { getTopCourses } from '../../../../core/services/courses';
import CardsSkeleton from '../../../skeleton/cards-skeleton';

const CoursesList = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const getCoursesList = async () => {
    const params = {
      Count: 4,
    };

    const result = await getTopCourses(params);
    setTopCourses(result);
    setLoading(false);
  };

  useEffect(() => {
    getCoursesList();
  }, []);

  return (
    <Fragment>
      {loading
        ? Array(4)
            .fill(0)
            .map((_, index) => (
              <CardsSkeleton key={index} width={322} height={293} />
            ))
        : topCourses.map((course, index) => (
            <CourseCards
              key={index}
              title={course.title}
              isCourse={true}
              author={course.teacherName}
              price={course.cost}
              width={322}
              courseLevel={course.levelName}
              courseCategory={course.typeName}
              image={course.tumbImageAddress}
              linkAddress={`/course-detail/${course.courseId}`}
            />
          ))}
    </Fragment>
  );
};
export default CoursesList;
