import PanelShowWindow from './components/PanelShowWindow';
import PanelSideBar from './components/PanelSideBar';

const UserPanel = () => {
  return (
    <div className="Center flex h-full w-full bg-[#292a2d]">
      {' '}
      <div className="bg-thirdly mx-auto mt-3 flex h-[840px] w-[1360px] justify-center gap-2 overflow-hidden rounded-[16px]">
        <PanelSideBar />
        <PanelShowWindow />
      </div>
    </div>
  );
};
export default UserPanel;
