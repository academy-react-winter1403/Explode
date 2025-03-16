import { FaSpinner } from 'react-icons/fa';
import clsx from 'clsx';
const Button = ({
  children,
  type = 'button',
  onClick,
  disabled,
  className,
  isLoading,
  loadingText = 'پردازش ...',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        'button-primary flex items-center justify-center gap-2 rounded px-4 py-2',
        {
          'cursor-not-allowed bg-gray-300 text-gray-500': disabled || isLoading,
          'cursor-pointer bg-[#FF5A5A]': !disabled && !isLoading,
        },
        className,
      )}
      aria-busy={isLoading}
    >
      {isLoading ? (
        <div className="Center flex gap-2">
          <FaSpinner className="animate-spin" />
          {loadingText}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
