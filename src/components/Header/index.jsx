import Logo from "./logo";
import Menu from "./menu";
import Options from "./options";
import { useState } from "react"
import ResponsiveMenu from "./responsive-menu";
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false)
  return (
    <header className="max-w-[1360px] max-[1460px]:p-[0_16px] h-[49px] m-[24px_auto_0_auto] flex items-center justify-between">
      <Logo />
      <Menu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Options />
      <ResponsiveMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
    </header>
  );
};
export default Header;
