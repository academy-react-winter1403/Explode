import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import MyCourses from './MyCourse';
import MyProfile from './MyProfile';
import Payments from './Payments';
import MyReserve from './MyReserve';
import MyFavCourses from './MyFavCourses';
import MyFavBlogs from './MyFavBlogs';

const PanelShowWindow = () => {
  const { panelState } = useSelector((state) => state.userpanel);

  const renderSlide = () => {
    switch (panelState) {
      case 'dashboard':
        return <Dashboard />;
      case 'myCourse':
        return <MyCourses />;
      case 'myReserve':
        return <MyReserve />;
      case 'myFavCourses':
        return <MyFavCourses />;
      case 'myFavBlogs':
        return <MyFavBlogs />;
      case 'myprofile':
        return <MyProfile />;
      case 'payments':
        return <Payments />;
      default:
        return <div>Select a pannel</div>;
    }
  };

  return (
    <div className="m-4 h-[800px] w-full rounded-[16px] bg-white p-2">
      {renderSlide()}
    </div>
  );
};

export default PanelShowWindow;
