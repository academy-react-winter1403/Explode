import { HeaderLogo } from "./components/Logo/HeaderLogo";
import { HeaderOptions } from "./components/Options/HeaderOptions";
import { HeaderNavigation } from "./components/Menu/Main/HeaderNavigation";
const Header = () => {
  return (
    // Header Container
    <div className="p-[24px_0]">
      {/* Row */}
      <div className="m-[0_auto] flex items-center justify-between max-w-[1360px] h-[49px] max-[1360px]:p-[0px_10px]">
        <HeaderLogo imgStatus={"hidden"} />
        <HeaderNavigation />
        <HeaderOptions />
      </div>
    </div>
  );
};
export default Header;
