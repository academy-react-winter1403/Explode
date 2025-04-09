import IconSet from '../../shared/IconSet';
import MenuLinks from './Links';
import Profile from './Profile';

const Menu = ({ menuStatus, setMenuStatus }) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="bg-thirdly flex h-[100%] items-center justify-between gap-[25px] rounded-[56px] p-[4px_24px_4px_4px] max-[880px]:pr-[4px]">
        <MenuLinks />
        <Profile />
      </div>

      <div
        onClick={() => setMenuStatus(!menuStatus)}
        className="bg-thirdly flex hidden h-[56px] w-[56px] cursor-pointer items-center justify-center rounded-[50%] max-[880px]:flex"
      >
        <IconSet imageAddress={'/src/assets/icons/bars.svg'} />
      </div>
    </div>
  );
};
export default Menu;
