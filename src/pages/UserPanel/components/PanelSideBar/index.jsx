import SideBarMenuList from './SideBarMenuList';
import IconSet from '../../../../components/shared/IconSet';
import logoutIcon from '/src/assets/icons/logout-03-stroke-rounded 1.png';
import { logout } from '/src/redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
const PanelSideBar = () => {
  const navigator = useNavigate();
  const dipatch = useDispatch();
  return (
    <div className="bg-thirdly mr-0 flex h-full w-[260px] cursor-pointer flex-col flex-nowrap justify-between gap-2 pt-8 pr-3">
      <div>
        {' '}
        <SideBarMenuList />
      </div>

      <div
        className="Center whiteSpace-nowrap mx-auto mb-16 flex h-[23px] gap-1 rounded-[40px] border-1 border-[#FF5353] px-[24px] py-[20px] text-[16px] font-[500] text-[#FF5353]"
        onClick={() => (dipatch(logout()), navigator('/auth/login'))}
      >
        <IconSet firstSize={24} secondSize={24} imageAddress={logoutIcon} />
        خروج کاربری
      </div>
    </div>
  );
};
export default PanelSideBar;
