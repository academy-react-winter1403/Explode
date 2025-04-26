import clsx from 'clsx';
import { useSelector } from 'react-redux';

const PageTitle = ({ title, size = 32, className }) => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div
      className={clsx(
        ' mx-auto text-center font-[700]',
        `text-[${size}px] ${darkMode ? 'text-[#fff]' : 'text-thirdly'} `,
        className,
      )}
    >
      {title}
    </div>
  );
};
export default PageTitle;
