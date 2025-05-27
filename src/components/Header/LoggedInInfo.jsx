import { useSelector } from 'react-redux';
import IconSet from '../shared/IconSet';
import LoggedOut from './Menu/Profile/LoggedOut';
import clsx from 'clsx';

const LoggedInInfo = ({ isDashboard = false, userName = 'ناشناس' }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  if (!isDashboard) return null;

  return (
    <div className="flex items-center gap-1">
      <span>
        <LoggedOut arrowShow={false} />
      </span>
      <div className="flex flex-col items-center">
        <span
          className={clsx('text-[16px] font-semibold', {
            'text-white': darkMode,
            'text-gray-800': !darkMode,
          })}
        >
          {userName || 'ناشناس'}
        </span>
        <span
          className={clsx('text-[14px] font-medium', {
            'text-white': darkMode,
            'text-gray-700': !darkMode,
          })}
        >
          دانشجو
        </span>
      </div>
    </div>
  );
};

export default LoggedInInfo;
