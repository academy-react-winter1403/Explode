import IconSet from '../../../../../components/shared/IconSet';

const MobileToggleButtons = ({ onFilterClick, onSortingClick }) => (
  <div className="max-[600px]:flex max-[600px]:w-full max-[600px]:items-center max-[600px]:justify-between">
    <div className="hidden gap-3 max-[600px]:flex">
      <ToggleButton
        icon="/src/assets/icons/filter.svg"
        label="فیلتر"
        onClick={onFilterClick}
      />
      <ToggleButton
        icon="/src/assets/icons/sorting.svg"
        label="ترتیب"
        onClick={onSortingClick}
      />
    </div>
  </div>
);

const ToggleButton = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="bg-thirdly flex items-center gap-2 rounded-[40px] px-4 py-3 text-base font-medium text-white"
  >
    <IconSet imageAddress={icon} width={24} height={24} />
    {label}
  </div>
);

export default MobileToggleButtons;
