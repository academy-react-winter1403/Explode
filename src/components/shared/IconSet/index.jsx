import clsx from 'clsx';

const IconSet = ({ imageAddress, size = 24, className }) => {
  return (
    <span
      style={{
        backgroundImage: `url(${imageAddress})`,
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={clsx('bg-cover bg-center bg-no-repeat', className)}
    ></span>
  );
};
export default IconSet;
