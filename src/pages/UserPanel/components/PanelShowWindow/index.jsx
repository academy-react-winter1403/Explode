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
        'border-primary bg-primary/10 shadow-primary/20 hover:shadow-primary/30 m-4 h-[800px] w-full transform overflow-hidden rounded-[24px] border-2 fill-neutral-400 p-4 opacity-[0.7] shadow-lg transition-all duration-500 ease-in-out',
        {
          'to-thirdly bg-gradient-to-br from-white shadow-2xl': true, // پس‌زمینه گرادینت
          'hover:border-primary/30 border border-gray-200': true, // حاشیه تعاملی
          'hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]': true, // سایه هنگام هاور
          'transform hover:-translate-y-1': false, // اثر شناور شدن
          'backdrop-blur-sm': true, // میتوانید برای افکت شیشهای فعال کنید
        },
      )}
    >
      {renderSlide()}
    </div>
  );
};

export default PanelShowWindow;
