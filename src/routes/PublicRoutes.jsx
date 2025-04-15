import Blogs from '../pages/Blogs/Index';
import Courses from '../pages/Courses';
import HomePage from '../pages/HomePage';
import Single from '../pages/Single/Course/Index';
import BlogSingle from './../pages/Single/Blog/index';


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
    path: '/courses/single/:id',
    element: <Single />,
  },
  {
    path: '/blogs/single/:id',
    element: <BlogSingle />,
  },

];

export default publicRoutes;
