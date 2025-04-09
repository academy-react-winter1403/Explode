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
    

];

export default publicRoutes;
