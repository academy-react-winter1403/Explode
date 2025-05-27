import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import SideBarMenuList from './SideBarMenuList';
import IconSet from '../../../../components/shared/IconSet';
import logoutIcon from '/src/assets/icons/logout-03-stroke-rounded 1.png';
import { logout } from '../../../../redux/authSlice';

const PanelSideBar = () => {
  const { darkMode } = useSelector((state) => state.darkMode);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className={`mr-0 flex h-full w-[260px] cursor-pointer flex-col flex-nowrap justify-between gap-2 pt-8 pr-3 ${
        darkMode ? 'bg-thirdly' : 'bg-white'
      }`}
    >
      <div>
        <SideBarMenuList />
      </div>

      <div
        className={`Center mx-auto mb-16 flex h-[23px] gap-1 rounded-[40px] border-1 px-[24px] py-[20px] text-[16px] font-[500] whitespace-nowrap ${
          darkMode
            ? 'border-[#FF5353] text-[#FF5353]'
            : 'border-[#FF5353] bg-gray-100 text-[#FF5353]'
        }`}
        onClick={() => {
          dispatch(logout());
          navigate('/auth/login');
        }}
      >
        <IconSet firstSize={24} secondSize={24} imageAddress={logoutIcon} />
        خروج کاربری
      </div>
    </div>
  );
};

export default PanelSideBar;
