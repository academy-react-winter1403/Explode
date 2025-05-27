import { useSelector } from 'react-redux';
import Dashboard from './Dashboard';
import MyCourses from './MyCourse';
import MyProfile from './MyProfile';

import MyReserve from './MyReserve';
import MyFavCourses from './MyFavCourses';
import MyFavBlogs from './MyFavBlogs';
import clsx from 'clsx';
import InterviewAi from './InterviewAi';

const PanelShowWindow = () => {
  const { panelState } = useSelector((state) => state.userpanel);
  const { darkMode } = useSelector((state) => state.darkMode);

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
      case 'interviewAi':
        return <InterviewAi />;
      default:
        return (
          <div className={darkMode ? 'text-white' : 'text-gray-800'}>
            Select a panel
          </div>
        );
    }
  };

  return (
    <div
      className={clsx(
        'm-4 h-[800px] w-full overflow-hidden rounded-[24px] p-4 transition-all duration-500 ease-in-out',
        {
          'border-primary bg-primary/10 shadow-primary/20 hover:shadow-primary/30 to-thirdly border-2 bg-gradient-to-br from-white opacity-[0.7] shadow-lg':
            darkMode,
          'border-gray-200 bg-gradient-to-br from-white via-blue-50 to-indigo-100 opacity-[0.9] shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]':
            !darkMode,
          'hover:border-primary/30': true,
          'backdrop-blur-sm': true, // افکت شیشه‌ای (اختیاری)
        },
      )}
    >
      {renderSlide()}
    </div>
  );
};

export default PanelShowWindow;
