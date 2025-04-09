import React from 'react';
import { Link } from 'react-router';
import IconSet from '../shared/IconSet';
const Socials = () => {
  const socialsLinks = [
    { address: '/', icon: '/src/assets/icons/dark_instagram.svg' },
    { address: '/', icon: '/src/assets/icons/dark_telegram.svg' },
    { address: '/', icon: '/src/assets/icons/dark_youtube.svg' },
    { address: '/', icon: '/src/assets/icons/dark_twitter.svg' },
  ];
  return (
    <div className="flex w-[240px] flex-row-reverse gap-[20px] max-[1210px]:order-2 max-[1210px]:w-[auto]">
      {socialsLinks.map((link, index) => (
        <Link
          key={index}
          to={link.address}
          className="flex h-[24px] w-[24px] items-center justify-center"
        >
          <IconSet imageAddress={link.icon} />
        </Link>
      ))}
    </div>
  );
};
export default Socials;
