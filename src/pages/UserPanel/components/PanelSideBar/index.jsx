import SideBarMenuList from './SideBarMenuList';

const PanelSideBar = () => {
  return (
    <div className="bg-thirdly mr-0 flex h-full w-[260px] cursor-pointer flex-col flex-nowrap gap-2 pt-8 pr-3">
      <SideBarMenuList />
    </div>
  );
};
export default PanelSideBar;
