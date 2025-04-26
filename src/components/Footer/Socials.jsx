import React from 'react';
import { Link } from 'react-router';
import IconSet from '../shared/IconSet';
import { useSelector } from 'react-redux';
const Socials = () => {
  const { darkMode } = useSelector((state) => state.darkMode)
  const socialsLinks = [
    { address: '/', icon: '/src/assets/icons/dark_instagram.svg', darkIcon: '/src/assets/icons/instagram.svg' },
    { address: '/', icon: '/src/assets/icons/dark_telegram.svg', darkIcon: '/src/assets/icons/telegram.svg' },
    { address: '/', icon: '/src/assets/icons/dark_youtube.svg', darkIcon: '/src/assets/icons/youtube.svg' },
    { address: '/', icon: '/src/assets/icons/dark_twitter.svg', darkIcon: '/src/assets/icons/twitter.svg' }
  ];
  return (
    <div className="flex w-[240px] flex-row-reverse gap-[20px] max-[1210px]:order-2 max-[1210px]:w-[auto]">
      {socialsLinks.map((link, index) => (
        <Link
          key={index}
          to={link.address}
          className="flex h-[24px] w-[24px] items-center justify-center"
        >
          <IconSet imageAddress={darkMode ? link.darkIcon : link.icon} />
        </Link>
      ))}
    </div>
  );
};
export default Socials;
