import clsx from 'clsx';
import IconSet from '../shared/IconSet';

const CloseButton = ({ onClick, className, display = 'hidden' }) => (
  <div
    onClick={onClick}
    className={clsx(
      `${display} items-center gap-4 rounded-[34px] border-2 border-[#FF5353] px-4 py-2 text-lg font-medium text-[#FF5353] cursor-pointer`,
      className,
    )}
  >
    <IconSet
      imageAddress="/src/assets/icons/red-close.svg"
      width={24}
      height={24}
    />
    بستن
  </div>
);

export default CloseButton;
