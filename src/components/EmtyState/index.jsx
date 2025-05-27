import { useSelector } from 'react-redux';

import IconSet from '../shared/IconSet';
import clsx from 'clsx';

const EmptyState = ({
  icon = 'clock',
  title,
  description,
  additionalText,
  shortShowTitle = '',

  height = 246,
}) => {
  const icons = {
    clock: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
    search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
    folder:
      'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  };

  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <div
      className={clsx(
        'mx-[16px] flex max-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[24px] py-2',
        {
          'bg-[#F6F6F6]': !darkMode,
          'bg-[#2A2A2A]': darkMode,
        },
      )}
      style={{ height: `${height}px` }}
    >
      <div
        className={clsx('flex h-[10%] w-full justify-between px-4', {
          'bg-[#F6F6F6] text-[#2F2F2F]': !darkMode,
          'bg-[#2A2A2A] text-gray-200': darkMode,
        })}
      >
        <span className="font-[600]">{shortShowTitle}</span>
        <span
          className={clsx(
            'flex cursor-pointer flex-row items-center gap-1 text-[14px] font-[600]',
            {
              'text-[#007BFF]': !darkMode, // text-primary لایت
              'text-[#4EA8FF]': darkMode, // کمی روشن‌تر برای دارک مود
            },
          )}
        ></span>
      </div>

      <div className="h-[90%] text-center">
        <svg
          className={clsx('mx-auto h-12 w-12', {
            'text-gray-400': !darkMode,
            'text-gray-500': darkMode,
          })}
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

        <h3
          className={clsx('mt-2 text-sm font-medium', {
            'text-gray-900': !darkMode,
            'text-gray-200': darkMode,
          })}
        >
          {title}
        </h3>

        <p
          className={clsx('mt-1 text-sm', {
            'text-gray-500': !darkMode,
            'text-gray-400': darkMode,
          })}
        >
          {description}
          {additionalText && (
            <span
              className={clsx('mt-1 block text-xs', {
                'text-gray-400': !darkMode,
                'text-gray-500': darkMode,
              })}
            >
              {additionalText}
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default EmptyState;
