import { Link } from 'react-router';
import { Menu } from './Menu';
import { Profile } from './Profile';
import menuBars from '/src/assets/icons/bars.png';
const MainMenu = ({ menuStatus, setMenuStatus }) => {
  return (
    <nav className="flex items-center gap-[10px]">
      {/* Menu Container */}
      <div className="bg-thirdly flex items-center gap-[32px] rounded-[56px] p-[4px_24px_4px_4px] text-[#fff] max-[805px]:pr-[4px]">
        {/* Main Menu */}
        <Menu customStyle="flex gap-[32px] max-[805px]:hidden" />

        {/* Login/Register page link */}
        <Link to="/login" className="bg-primary rounded-[56px] p-[8px_16px]">
          ثبت نام یا ورود
        </Link>

        {/* Profile*/}
        <Profile />
      </div>

      {/* This part is for accessing the responsive menu (Click Icon)*/}
      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className="bg-thirdly flex hidden h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[50%] text-[27px] text-[#fff] max-[805px]:flex"
      >
        <span
          className="h-[100%] w-[100%] bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${menuBars})` }}
        ></span>
      </div>
    </nav>
  );
};
export { MainMenu };
