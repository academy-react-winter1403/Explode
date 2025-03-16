import MainLayout from '../components/layout/MainLayout';
import NotFoundPage from '../pages/NotFoundPage';

import privateRoutes from './PrivateRoutes';
import publicRoutes from './PublicRoutes';

const routesConfig = [
  {
    path: '/',
    element: <MainLayout />,
    children: [...publicRoutes, ...privateRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routesConfig;
