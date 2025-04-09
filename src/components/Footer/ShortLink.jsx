import React from 'react';
import { Link } from 'react-router';
const ShortLink = () => {
  const menuLinks = [
    { address: '/', title: 'خانه' },
    { address: '/courses', title: 'دوره ها' },
    { address: '/blogs', title: 'بلاگ ها' },
    { address: '/teachers', title: 'اساتید' },
    { address: '/about-us', title: 'درباره ما' },
    { address: '/contact-us', title: 'ارتباط ما' },
    { address: '/our-services', title: 'خدمات ما' },
  ];
  return (
    <nav className="max-[1210px]:mb-[50px] max-[1210px]:w-[100%]">
      <ul className="text-thirdly flex flex-wrap justify-center gap-[50px] text-[18px] font-[600]">
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
export default ShortLink;
