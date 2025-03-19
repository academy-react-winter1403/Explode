import { WebSiteLogo } from "./components/Logo/WebSiteLogo";
import { HeaderOptions } from "./components/Options/HeaderOptions";
import { HeaderNavigation } from "./components/Menu/Main/HeaderNavigation";
const Header = () => {
  return (
    // Header Container
    <div className="p-[24px_0]">
      {/* Row */}
      <div className="m-[0_auto] flex items-center justify-between h-[49px] p-[0px_10px]">
        <WebSiteLogo logoTileStatus={"max-[830px]:hidden"}/>
        <HeaderNavigation />
        <HeaderOptions />
      </div>
    </div>
  );
};
export default Header;
