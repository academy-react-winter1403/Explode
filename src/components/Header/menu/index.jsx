import IconSet from '../../shared/IconSet';
import MenuLinks from './MenuLinks';
import Profile from './Profile';

const Menu = ({ menuStatus, setMenuStatus, isDashboard, checkLoggedIn }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-thirdly flex h-[100%] items-center justify-between gap-[25px] rounded-[56px] p-[4px_24px_4px_4px] max-[880px]:pr-[4px]">
        <MenuLinks isDashboard={isDashboard} />
        {!isDashboard && <Profile checkLoggedIn={checkLoggedIn} />}
      </div>

      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className="bg-thirdly hidden h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[50%] max-[880px]:flex"
      >
        <IconSet imageAddress={'/src/assets/icons/bars.svg'} />
      </div>
    </div>
  );
};
export default Menu;
