import { useDispatch } from 'react-redux';
import lefticon from '../../assets/icons/icons8-left-arrow-24.png';
import { setPanelState } from '../../redux/userPanelSlice';
import IconSet from '../shared/IconSet';
import clsx from 'clsx';

const EmptyState = ({
  icon = 'clock',
  title,
  description,
  additionalText,
  shortShowTitle = '',
  shortShowStateValue = '',
  height = 246,
}) => {
  const icons = {
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    folder:
      'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  };
  const dispatch = useDispatch();

  return (
    <div
      className={clsx(
        'mx-[16px] flex flex-col items-center justify-center overflow-hidden rounded-[24px] bg-[#F6F6F6]',
      )}
      style={{ height: `${height}px` }}
    >
      <div className="flex h-[10%] w-full justify-between bg-[#F6F6F6] px-4">
        <span className="font-[600]">{shortShowTitle}</span>
        <span
          className="text-primary flex cursor-pointer flex-row items-center gap-1 text-[14px] font-[600]"
          onClick={() => {
            dispatch(setPanelState(shortShowStateValue));
          }}
        >
          مشاهده بیشتر
          <IconSet
            firstSize={20}
            secondSize={20}
            className="mt-1"
            imageAddress={lefticon}
          />
        </span>
      </div>
      <div className="h-[90%] text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={icons[icon] || icons.clock}
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">
          {description}
          {additionalText && (
            <span className="mt-1 block text-xs text-gray-400">
              {additionalText}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
