import CloseButton from '../../../../../components/CloseButton';
import IconSet from '../../../../../components/shared/IconSet';

const SortingMobilePanel = ({ isSortingActive, onClose, children }) => (
  <div
    className={`${isSortingActive ? 'max-[600px]:fixed' : 'max-[600px]:hidden'} max-[600px]:top-0 max-[600px]:right-0 max-[600px]:z-[1000] max-[600px]:w-full max-[600px]:bg-white`}
  >
    <div className="mb-5 hidden w-full items-center justify-between max-[600px]:flex max-[600px]:px-[30px] max-[600px]:py-5">
      <span className="text-thirdly text-xl font-bold">ترتیب</span>
      <CloseButton onClick={onClose} />
    </div>
    {children}
  </div>
);

export default SortingMobilePanel;
