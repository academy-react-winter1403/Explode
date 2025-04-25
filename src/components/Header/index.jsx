import Menu from './Menu';
import Options from './optionButtons';
import { useEffect, useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../shared/Logo';
import { useLocation } from 'react-router';
import clsx from 'clsx';
import IconSet from '../shared/IconSet';
import { getUserProfileInfo } from '../../core/services/UserProfileInfo';
import LoggedInInfo from './LoggedInInfo';
import { useSelector } from 'react-redux';
const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { panelState } = useSelector((state) => state.userpanel);
  const [menuStatus, setMenuStatus] = useState(false);
  const { pathname } = useLocation();
  const [isDashboard, setIsDashboard] = useState(pathname == '/dashboard');
  const [userImage, setUserImage] = useState('');
  const [userName, setUserName] = useState('');
  const [checkLoggedIn, setCheckLoggedIn] = useState(false);
  const [hidden, setHidden] = useState(pathname.includes('/auth'));

  const getUserInfo = async () => {
    const res = await getUserProfileInfo();
    setUserImage(res.currentPictureAddress);
    setUserName(res.fName);
  };
  useEffect(() => {
    isAuthenticated && getUserInfo();
  }, [panelState]);
  useEffect(() => {
    if (isAuthenticated) {
      setCheckLoggedIn(true);
      getUserInfo();
    } else {
      setCheckLoggedIn(false);
    }
    if (pathname.includes('/auth')) {
      setHidden(true);
    } else {
      setHidden(false);
    }

    if (pathname == '/dashboard') {
      setIsDashboard(true);
    } else {
      setIsDashboard(false);
    }
  }, [pathname]);
  return (
    <header
      className={clsx('flex items-center py-6', {
        'm-[24px_auto_0_auto] h-[49px] max-w-[1360px] justify-between max-[1460px]:p-[0_16px]':
          !isDashboard,
        'bg-thirdly h-[80px] w-full justify-center': isDashboard,
        hidden: hidden,
        flex: !hidden,
      })}
    >
      <div
        className={clsx('flex w-full justify-between', {
          'max-w-[1360px]': isDashboard,
        })}
      >
        <div className="Center flex gap-[36px]">
          {' '}
          <Logo isDashboard={isDashboard} />
          <LoggedInInfo
            isDashboard={isDashboard}
            userImage={userImage}
            userName={userName}
          />
        </div>

        <Menu
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
          isDashboard={isDashboard}
          checkLoggedIn={checkLoggedIn}
        />
        <Options />
        <ResponsiveMenu menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      </div>
    </header>
  );
};
export default Header;
