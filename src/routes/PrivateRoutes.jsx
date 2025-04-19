import { Navigate, Outlet } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { useSelector } from 'react-redux';
import UserPanel from '../pages/UserPanel';

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/auth/login" replace />;
  }

  return <Outlet />;
};
const privateRoutes = [
  {
    path: '',
    element: <PrivateRoute />,
    children: [
      {
        path: '/dashboard',
        element: <UserPanel />,
      },
    ],
  },
];

export default privateRoutes;
