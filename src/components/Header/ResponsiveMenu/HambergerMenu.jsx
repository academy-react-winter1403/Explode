import React from 'react';
import { Link } from 'react-router';
const HambergerMenu = () => {
  const menuLinks = [
    { address: '/', title: 'خانه' },
    { address: '/courses', title: 'دوره ها' },
    { address: '/blogs', title: 'بلاگ ها' },
    { address: '/about-us', title: 'درباره ما' },
    { address: '/contact-us', title: 'ارتباط ما' },
  ];

  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-[20px] text-[32px] font-[700] text-[#FCFCFC]">
        {menuLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.address}
              className="block w-full border-b-[1px] border-[#FFFFFF]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default HambergerMenu;
