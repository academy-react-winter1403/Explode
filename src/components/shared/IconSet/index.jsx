import clsx from 'clsx';

const IconSet = ({ imageAddress, firstSize = 24, secondSize = 24, className }) => {
  return (
    <span
      style={{
        backgroundImage: `url(${imageAddress})`,
        width: `${firstSize}px`,
        height: `${secondSize}px`,
      }}
      className={clsx('bg-cover bg-center bg-no-repeat', className)}
    ></span>
  );
};
export default IconSet;
