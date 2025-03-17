import { NavLink } from "react-router";
import { WebSiteLogo } from "../Header/components/Logo/WebSiteLogo";
import { Menu } from '../Header/components/Menu/Main/Menu'
import { Social } from "../Header/components/Menu/Responsive-Menu/Social";
const Footer = () => {
  return (
    // Footer Container
    <div className="max-[1360px]:p-[0px_10px]">
      {/* Row */}
      <div className="m-[0_auto] max-w-[1360px] flex items-center justify-between max-[800px]:flex-wrap  p-[60px_0] border-[#DCDCDC] border-t-[1px] max-[800px]:border-hidden">
        {/* Logo */}
        <WebSiteLogo imgStatus={"hidden"} logoTileStatus={"max-[817px]:hidden"} customStyle={"max-[800px]:order-[1]"} />

        {/* Menu */}
        <Menu customStyle={"font-bold max-[800px]:flex-wrap max-[800px]:justify-center max-[800px]:mb-[50px] max-[800px]:w-[100%]"} >
          <li><NavLink>ارتباط  با ما</NavLink></li>
          <li><NavLink>خدمات ما</NavLink></li>
        </Menu>

        {/* Social Icons */}
        <Social customStyle={'text-thirdly flex gap-[10px] max-[800px]:order-[2] text-[25px]'} />
      </div>
    </div>
  );
};
export default Footer;
