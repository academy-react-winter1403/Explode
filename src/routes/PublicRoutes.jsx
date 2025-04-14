import Blogs from '../pages/Blogs/Index';
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

];

export default publicRoutes;
