import clsx from 'clsx';

const PageTitle = ({ title, size = 32, className }) => {
  return (
    <div
      className={clsx(
        'text-thirdly mx-auto text-center font-[700]',
        `text-[${size}px]`,
        className,
      )}
    >
      {title}
    </div>
  );
};
export default PageTitle;
