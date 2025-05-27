import { useSelector } from 'react-redux';
import clsx from 'clsx';

const Calender = ({ handleStartDate, handleEndtDate }) => {
  const { darkMode } = useSelector((state) => state.darkMode);

  return (
    <div
      className={clsx(
        'flex h-[48px] items-center gap-[10px] rounded-[16px] p-[0_16px] text-[11px] font-[500] transition-colors duration-300',
        {
          'bg-[#3a3a3a] text-white': darkMode,
          'bg-[#F1F1F1] text-[#707070]': !darkMode,
        },
      )}
    >
      <input
        onChange={(event) => handleStartDate(event.target.value)}
        type="date"
        className={clsx(
          'w-[50%] rounded-[8px] px-1 py-[2px] text-[11px] font-[500] outline-none',
          {
            'bg-[#4a4a4a] text-white': darkMode,
            'bg-white text-black': !darkMode,
          },
        )}
      />
      <span className="mx-[4px] text-gray-400">-</span>
      <input
        onChange={(event) => handleEndtDate(event.target.value)}
        type="date"
        className={clsx(
          'w-[50%] rounded-[8px] px-1 py-[2px] text-[11px] font-[500] outline-none',
          {
            'bg-[#4a4a4a] text-white': darkMode,
            'bg-white text-black': !darkMode,
          },
        )}
      />
    </div>
  );
};

export default Calender;
