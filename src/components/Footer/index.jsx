import { NavLink } from "react-router";
import { WebSiteLogo } from "../Header/components/Logo/WebSiteLogo";
import { Menu } from '../Header/components/Menu/Main/Menu'
import { Social } from "../Header/components/Menu/Responsive-Menu/Social";
const Footer = () => {
  return (
    // Footer Container
    <div className="p-[0px_10px] mt-[50px]">
      {/* Row */}
      <div className="m-[0_auto] gap-[20px]  flex items-center justify-between flex-wrap p-[60px_0] border-[#DCDCDC] border-t-[1px] ">
        {/* Logo */}
        <WebSiteLogo logoTileStatus={"max-[817px]:hidden"} customStyle={"max-[800px]:order-[1]"} />

        {/* Menu */}
        <Menu customStyle={"flex gap-[75px] font-bold flex-wrap max-[800px]:justify-center max-[800px]:w-[100%] max-[800px]:mb-[40px]"} >
          <li><NavLink>ارتباط  با ما</NavLink></li>
          <li><NavLink>خدمات ما</NavLink></li>
        </Menu>

        {/* Social Icons */}
        <Social customStyle={'flex  gap-[10px] max-[800px]:order-[2]'} isFooter={true} />
      </div>
    </div>
  );
};
export default Footer;
