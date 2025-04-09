import Menu from './Menu';
import Options from './optionButtons';
import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../shared/Logo';
const Header = () => {
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <header className="m-[24px_auto_0_auto] flex h-[49px] max-w-[1360px] items-center justify-between max-[1460px]:p-[0_16px]">
      <Logo />
      <Menu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      <Options />
      <ResponsiveMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
    </header>
  );
};
export default Header;
