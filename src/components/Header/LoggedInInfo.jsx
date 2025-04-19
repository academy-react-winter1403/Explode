import IconSet from '../shared/IconSet';
import LoggedOut from './Menu/Profile/LoggedOut';

const LoggedInInfo = ({ isDashboard = false, userName = 'ناشناس' }) => {
  if (!isDashboard) return null;

  return (
    <div className="flex items-center gap-1">
      <span>
        <LoggedOut arrowShow={false} />
      </span>
      <div className="flex flex-col items-center">
        <span className="text-[16px] font-semibold text-white">
          {userName || 'ناشناس'}
        </span>
        <span className="text-[14px] font-medium text-white">دانشجو</span>
      </div>
    </div>
  );
};

export default LoggedInInfo;
