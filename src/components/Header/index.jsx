import { HeaderLogo } from "./components/HeaderLogo";
import { HeaderOptions } from "./components/HeaderOptions";
import { HeaderMenu } from "./components/HeaderMenu";
const Header = () => {
  return (
    // Header Container
    <div className="p-[24px_0]">
      {/* Row */}
      <div className="m-[0_auto] flex items-center justify-between max-w-[1360px]">
        {/* Header Logo */}
        <HeaderLogo />
        {/* Header Menu */}
        <HeaderMenu />
        {/* Header Options */}
        <HeaderOptions />
      </div>
    </div>
  );
};
export default Header;
