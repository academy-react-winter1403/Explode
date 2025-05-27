import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Menu from './Menu';
import Options from './optionButtons';
import ResponsiveMenu from './ResponsiveMenu';
import Logo from '../shared/Logo';
import IconSet from '../shared/IconSet';
import LoggedInInfo from './LoggedInInfo';
import { getUserInfo } from '../../redux/userProfileSlice';

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { panelState } = useSelector((state) => state.userpanel);
  const { userProfile } = useSelector((state) => state.userProfile);

  const [menuStatus, setMenuStatus] = useState(false);
  const [isDashboard, setIsDashboard] = useState(pathname === '/dashboard');
  const [hidden, setHidden] = useState(pathname.includes('/auth'));

  // Derived state - no need for separate useState
  const userImage = userProfile?.currentPictureAddress || '';
  const userName = userProfile?.fName || '';
  const checkLoggedIn = isAuthenticated;

  const getUserData = async () => {
    if (isAuthenticated) {
      await dispatch(getUserInfo());
    }
  };

  useEffect(() => {
    const isAuthPath = pathname.includes('/auth');
    setHidden(isAuthPath);
    setIsDashboard(pathname === '/dashboard');
  }, [pathname]);

  useEffect(() => {
    getUserData();
  }, [isAuthenticated, panelState]);

  if (hidden) return null;

  return (
    <header
      className={clsx('flex items-center py-6', {
        'm-[0_auto] h-[49px] max-w-[1360px] justify-between pt-[40px] max-[1460px]:p-[40px_16px]':
          !isDashboard,
        'h-[80px] w-full justify-center': isDashboard,
      })}
    >
      <div
        className={clsx('flex w-full justify-between', {
          'max-w-[1360px]': isDashboard,
        })}
      >
        <div className="Center flex gap-[36px]">
          <Logo isDashboard={isDashboard} />
          {checkLoggedIn && (
            <LoggedInInfo
              isDashboard={isDashboard}
              userImage={userImage}
              userName={userName}
            />
          )}
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
