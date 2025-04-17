import SideBarMenuItem from './SideBarMenuItem';
import { SideBarMenuItemData } from './SideBarMenuItemData';
import { useDispatch } from 'react-redux';
import { setPanelState } from '../../../../redux/userPanelSlice';
const SideBarMenuList = () => {
  const dispatch = useDispatch();
  const slideChangeHandler = (value) => {
    dispatch(setPanelState(value));
  };
  return (
    <>
      {SideBarMenuItemData.map((item) => (
        <SideBarMenuItem
          key={item.id}
          item={item}
          handlerFunction={() => slideChangeHandler(item.value)}
        />
      ))}
    </>
  );
};

export default SideBarMenuList;
