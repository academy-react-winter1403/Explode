import ForgetPassPage from '../pages/AuthPage/ForgetPasswordPage';
import LoginPage from '../pages/AuthPage/LoginPage';
import RegisterPage from '../pages/AuthPage/RegisterPage';
import Blogs from '../pages/Blogs/Index';
import Single from '../pages/Single/Course';
import BlogSingle from '../pages/Single/Blog';

import Courses from '../pages/Courses';
import HomePage from '../pages/HomePage';
import { Outlet } from 'react-router-dom';

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
    path: '/auth',
    element: <Outlet />, // Changed from <></> to <Outlet />
    children: [
      {
        path: 'login', // Removed leading slash
        element: <LoginPage />,
      },
      {
        path: 'register', // Removed leading slash
        element: <RegisterPage />,
      },
      {
        path: 'forgot-password', // Removed leading slash
        element: <ForgetPassPage />,
      },
      {
        path: 'forgot-password/:configValue', // Removed leading slash
        element: <ForgetPassPage />,
      },
    ],
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
