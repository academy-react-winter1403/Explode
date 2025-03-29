import MainLayout from '../components/layout/MainLayout';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';
import RegisterPage from '../pages/RegisterPage';
import ForgetPassPage from '../pages/ForgetPasswordPage';
const routesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...publicRoutes, ...privateRoutes],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '/forgot-password',
    element: <ForgetPassPage />,
  },
  {
    path: '/forgot-password/:configValue',
    element: <ForgetPassPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routesConfig;
