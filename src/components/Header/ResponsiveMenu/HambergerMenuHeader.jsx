import React from 'react';
import IconSet from '../../shared/IconSet/index';
import logoSvg from '/src/assets/img/logo.svg';
import titleSvg from '/src/assets/img/title.svg';
const HambergerMenuHeader = ({ menuStatus, setMenuStatus }) => {
  return (
    <header className="flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <IconSet imageAddress={logoSvg} firstSize={42} secondSize={40} />
        <IconSet
          imageAddress={titleSvg}
          firstSize={189}
          secondSize={38}
          className={'relative top-[8px]'}
        />
      </div>

      {/* Close Menu */}
      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className="flex h-[56px] w-[56px] cursor-pointer items-center justify-center"
      >
        <IconSet imageAddress={'/src/assets/icons/close.svg'} />
      </div>
    </header>
  );
};
export default HambergerMenuHeader;
