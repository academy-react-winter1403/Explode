import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
const MainLayout = () => {
  const { darkMode } = useSelector((state) => state.darkMode)
  console.log(darkMode)
  return (
    <>
      <div className={`${darkMode && 'bg-thirdly'} `}>
        <Header />
        <Outlet />
        <Footer />
      </div>


    </>
  );
};
export default MainLayout;
