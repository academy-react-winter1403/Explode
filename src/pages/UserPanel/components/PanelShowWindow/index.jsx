import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import MyCourses from './MyCourse';
import MyProfile from './MyProfile';
import Payments from './Payments';
import MyReserve from './MyReserve';
import MyFavCourses from './MyFavCourses';
import MyFavBlogs from './MyFavBlogs';
import clsx from 'clsx';

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
    <div
      className={clsx(
        'm-4 h-[800px] w-full rounded-[24px] bg-[#292a2d] p-4 opacity-[0.9] transition-all duration-500 ease-in-out',
        {
          'bg-gradient-to-br from-white to-gray-50 shadow-2xl': true, // پس‌زمینه گرادینت
          'hover:border-primary/30 border border-gray-200': true, // حاشیه تعاملی
          'hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]': true, // سایه هنگام هاور
          'transform hover:-translate-y-1': true, // اثر شناور شدن
          'backdrop-blur-sm': false, // میتوانید برای افکت شیشهای فعال کنید
        },
      )}
    >
      {renderSlide()}
    </div>
  );
};

export default PanelShowWindow;
