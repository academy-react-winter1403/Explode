import Blogs from '../pages/Blogs';
import CourseDetail from '../pages/Single/course/courseDetail';
import Courses from '../pages/Courses';
import HomePage from '../pages/HomePage';


const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/blogs',
    element: <Blogs />,
  },
  {
    path: '/courseDetai',
    element: <CourseDetail />,
  },
];

export default publicRoutes;
