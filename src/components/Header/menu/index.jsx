import { useSelector } from 'react-redux';
import useToggleDarkMode from '../../../Hooks/useToggleDarkMode';
import IconSet from '../../shared/IconSet';
import MenuLinks from './MenuLinks';
import Profile from './Profile';

import clsx from 'clsx';
import { AiFillSun } from 'react-icons/ai';
const Menu = ({ menuStatus, setMenuStatus, isDashboard, checkLoggedIn }) => {
  const { darkMode } = useSelector((state) => state.darkMode)
  const toggleDarkMode = useToggleDarkMode()
  return (
    <div className="flex items-center gap-[10px]">
      <div
        className={clsx(
          'bg-thirdly flex h-[100%] items-center justify-between gap-[25px] rounded-[56px] p-[4px_24px_4px_4px] max-[880px]:pr-[4px]',
          {
            'px-2 py-[4px]': isDashboard, // padding-x برابر px-2 در داشبورد
          },
          {
            'border-[1px] border-[#fff]': darkMode
          }
        )}
      >
        <MenuLinks isDashboard={isDashboard} />
        {!isDashboard && <Profile checkLoggedIn={checkLoggedIn} />}
      </div>

      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className={` ${darkMode && 'border-[1px] border-[#fff]'} bg-thirdly hidden h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[50%] max-[880px]:flex`}
      >
        <IconSet imageAddress={'/src/assets/icons/bars.svg'} />

      </div>
      <div onClick={() => toggleDarkMode(darkMode)} className={` ${darkMode && 'border-[#fff] border-[1px]'} bg-thirdly hidden max-[880px]:flex flex items-center justify-center w-[48px] h-[48px] max-[880px]:w-[55px] max-[880px]:h-[55px] rounded-[50%] cursor-pointer`}>
        {
          darkMode ? <AiFillSun className="text-[#fff] text-[25px]" /> : <IconSet imageAddress={'/src/assets/icons/dark.svg'} />
        }
      </div>
    </div>
  );
};
export default Menu;
