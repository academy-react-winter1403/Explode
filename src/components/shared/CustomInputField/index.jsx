import clsx from 'clsx';
import { Field, ErrorMessage } from 'formik';

const CustomInputField = ({
  label,
  name,
  placeholder,
  type = 'text',
  haveLabel = true,
  className,
  disable = false,
}) => {
  return (
    <div className={clsx('flex flex-col gap-2 sm:gap-2.5', className)}>
      {haveLabel && (
        <label className="text-sm font-semibold text-[#2F2F2F] sm:text-base">
          {label}
        </label>
      )}

      <Field
        type={type}
        name={name}
        disabled={disable}
        placeholder={placeholder}
        className={clsx(
          'h-12 rounded-3xl border border-[#DCDCDC] bg-[#FCFCFC] px-3 text-sm font-medium outline-none',
          'focus:border-primary focus:ring-primary focus:ring-1',
          'sm:h-[52px] sm:px-4 sm:text-base',
          'md:h-14 md:rounded-[28px]',
          { 'cursor-not-allowed bg-gray-400 text-gray-500': disable == true },
        )}
      />
      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-xs text-red-500 sm:text-sm"
      />
    </div>
  );
};

export default CustomInputField;
