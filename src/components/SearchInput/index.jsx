import { useSelector } from 'react-redux';
import clsx from 'clsx';

const SearchInput = ({ SearchHandler, placeholder, className }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <div className="relative">
      <input
        type="text"
        onChange={(event) => SearchHandler(event.target.value)}
        placeholder={placeholder}
        className={clsx(
          'rounded-[16px] p-[0_15px] text-[12px] font-[500] transition-colors duration-300 outline-none',
          {
            'bg-[#3a3a3a] text-white placeholder-gray-400': darkMode,
            'bg-[#F1F1F1] text-gray-800 placeholder-gray-500': !darkMode,
            'hover:bg-gray-700/50': darkMode,
            'hover:bg-gray-100': !darkMode,
          },
          className,
        )}
      />
      <div
        className={clsx(
          'absolute top-0 left-0 flex h-[48px] w-[48px] items-center justify-center rounded-[16px]',
          {
            'bg-primary': darkMode,
            'bg-primary/80 hover:bg-primary': !darkMode,
          },
        )}
      >
        <span
          className={clsx('h-[24px] w-[24px] bg-contain bg-center', {
            'brightness-100 invert-[1] filter': darkMode,
            'brightness-50 contrast-150 filter': !darkMode,
          })}
          style={{
            backgroundImage: `url(/src/assets/icons/light-search.svg)`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default SearchInput;
