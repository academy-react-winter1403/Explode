import React from 'react';
import HambergerMenuHeader from './HambergerMenuHeader';
import HambergerMenu from './HambergerMenu';
import HambergerMenuFooter from './HambergerMenuFooter';
const ResponsiveMenu = ({ menuStatus, setMenuStatus }) => {
  return (
    <section
      className={`${menuStatus ? 'bg-thirdly fixed top-0 left-0 z-1000 flex h-full w-full flex-col justify-between p-[16px]' : 'hidden'}`}
    >
      <HambergerMenuHeader
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
      />
      <HambergerMenu />
      <HambergerMenuFooter />
    </section>
  );
};
export default ResponsiveMenu;
