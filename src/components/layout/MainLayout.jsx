import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const MainLayout = () => {
  const { darkMode } = useSelector((state) => state.darkMode)

  useEffect(() => {
    document.body.classList = darkMode ? 'bg-thirdly' : ''
  }, [darkMode])

  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
