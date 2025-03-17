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
        'button-primary',
        {
          'cursor-not-allowed bg-gray-300 text-gray-500': disabled || isLoading,
          'bg-primary cursor-pointer': !disabled && !isLoading,
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
