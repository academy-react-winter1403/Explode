import { useSelector } from 'react-redux';
import { useState } from 'react';
import PanelShowWindow from './components/PanelShowWindow';
import PanelSideBar from './components/PanelSideBar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { FaBars } from 'react-icons/fa';

const UserPanel = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const { isLoading } = useSelector((state) => state.userProfile);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (isLoading) {
    return (
      <div
        className={`flex min-h-screen w-full ${
          darkMode
            ? 'bg-[#292a2d]'
            : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50'
        } transition-all duration-300`}
      >
        <div className="flex w-full flex-col overflow-hidden sm:mx-auto sm:mt-2 sm:h-[840px] sm:max-w-[1400px] sm:flex-row sm:gap-3 sm:rounded-[20px]">
          {/* Sidebar for larger screens */}
          <div
            className={`hidden sm:flex sm:w-[260px] ${
              darkMode ? 'bg-thirdly' : 'border border-gray-200 bg-white'
            }`}
          >
            <PanelSideBar />
          </div>

          {/* Mobile Sidebar Toggle Button */}
          <button
            className={`p-4 text-2xl sm:hidden ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>

          {/* Mobile Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out sm:hidden ${
              darkMode ? 'bg-thirdly' : 'bg-white'
            }`}
          >
            <button
              className={`absolute top-4 right-4 text-2xl ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}
              onClick={toggleSidebar}
            >
              &times;
            </button>
            <PanelSideBar />
          </div>

          {/* Skeleton Loader for Main Content */}
          <div
            className={`mt-2 flex-1 p-4 sm:mt-0 sm:p-6 ${
              darkMode ? 'bg-thirdly' : 'border border-gray-200 bg-white'
            } sm:rounded-[20px]`}
          >
            <div className="flex w-full flex-col items-center">
              <div className="mb-6 flex w-full items-center justify-between sm:w-[90%]">
                <Skeleton
                  width={100}
                  height={40}
                  borderRadius={8}
                  baseColor={darkMode ? '#3a3b3d' : '#f0f0f0'}
                  highlightColor={darkMode ? '#4d4f52' : '#e0e0e0'}
                />
              </div>
              <div className="mb-6 flex w-full flex-col items-center gap-2 sm:w-[90%] sm:flex-row">
                <Skeleton
                  width="100%"
                  smWidth={258}
                  height={40}
                  borderRadius={8}
                  baseColor={darkMode ? '#3a3b3d' : '#f0f0f0'}
                  highlightColor={darkMode ? '#4d4f52' : '#e0e0e0'}
                  className="w-full sm:w-[258px]"
                />
                <Skeleton
                  width="100%"
                  smWidth={258}
                  height={40}
                  borderRadius={8}
                  baseColor={darkMode ? '#3a3b3d' : '#f0f0f0'}
                  highlightColor={darkMode ? '#4d4f52' : '#e0e0e0'}
                  className="w-full sm:w-[258px]"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:w-[90%]">
              {[...Array(6)].map((_, rowIndex) => (
                <Skeleton
                  key={rowIndex}
                  height={40}
                  borderRadius={10}
                  baseColor={darkMode ? '#3a3b3d' : '#f0f0f0'}
                  highlightColor={darkMode ? '#4d4f52' : '#e0e0e0'}
                  className="w-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-screen w-full ${
        darkMode
          ? 'bg-[#292a2d]'
          : 'bg-gradient-to-br from-white via-blue-50 to-indigo-50'
      } transition-all duration-300`}
    >
      <div className="flex w-full flex-col overflow-hidden sm:mx-auto sm:mt-2 sm:h-[840px] sm:max-w-[1400px] sm:flex-row sm:gap-3 sm:rounded-[20px]">
        {/* Sidebar for larger screens */}
        <div
          className={`hidden sm:flex sm:w-[260px] ${
            darkMode
              ? 'bg-thirdly'
              : 'border border-gray-200 bg-white shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]'
          } transition-all duration-300`}
        >
          <PanelSideBar />
        </div>

        {/* Mobile Sidebar Toggle Button */}
        <button
          className={`p-4 text-2xl sm:hidden ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-white ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out sm:hidden ${
            darkMode ? 'bg-thirdly' : 'bg-white'
          }`}
        >
          <button
            className={`absolute top-4 right-4 text-2xl ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}
            onClick={toggleSidebar}
          >
            &times;
          </button>
          <PanelSideBar />
        </div>

        {/* Main Content */}
        <div
          className={`mt-2 flex-1 p-4 sm:mt-0 sm:p-6 ${
            darkMode
              ? 'bg-thirdly'
              : 'border border-gray-200 bg-white shadow-lg hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]'
          } transition-all duration-300 sm:rounded-[20px]`}
        >
          <PanelShowWindow />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
