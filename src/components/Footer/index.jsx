import { useEffect, useState } from 'react';
import Logo from '../shared/Logo';
import ShortLink from './ShortLink';
import Socials from './Socials';
import { useLocation } from 'react-router';

const Footer = () => {
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(pathname === '/dashboard');
  useEffect(() => {
    if (pathname == '/dashboard') {
      setHidden(true);
    }
  }, [pathname]);
  return (
    <>
      {!hidden && (
        <footer className="max-[1360px]:p-[73px_16px]">
          <div className="m-[0_auto] flex max-w-[1360px] flex-wrap items-center justify-between border-t-[1px] border-[#DCDCDC] p-[73px_0]">
            <Logo />
            <ShortLink />
            <Socials />
          </div>
        </footer>
      )}
    </>
  );
};
export default Footer;
