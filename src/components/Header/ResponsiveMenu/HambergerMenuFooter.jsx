import React from 'react';
import IconSet from '../../shared/IconSet/index';
import { Link } from 'react-router';
const HambergerMenuFooter = () => {
  const socialsLinks = [
    { address: '/', icon: '/src/assets/icons/instagram.svg' },
    { address: '/', icon: '/src/assets/icons/telegram.svg' },
    { address: '/', icon: '/src/assets/icons/youtube.svg' },
    { address: '/', icon: '/src/assets/icons/twitter.svg' },
  ];
  return (
    <footer className="flex items-center justify-center gap-[20px]">
      {socialsLinks.map((link, index) => (
        <Link
          key={index}
          to={link.address}
          className="flex h-[24px] w-[24px] items-center justify-center"
        >
          <IconSet imageAddress={link.icon} />
        </Link>
      ))}
    </footer>
  );
};
export default HambergerMenuFooter;
