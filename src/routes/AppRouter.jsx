import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routesConfig from './routerConfig';

const router = createBrowserRouter(routesConfig);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
