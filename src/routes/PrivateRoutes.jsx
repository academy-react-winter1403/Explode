import { Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const privateRoutes = [
  {
    path: 'dashboard',
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
  },
];

export default privateRoutes;
