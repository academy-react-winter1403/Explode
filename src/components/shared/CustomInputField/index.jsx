import { Field, ErrorMessage } from 'formik';
const CustomInputField = ({ label, name, placeholder, type = 'text' }) => {
  return (
    <div className="flex flex-col flex-nowrap gap-[8px]">
      <label htmlFor="name" className="font-semibold text-[#2F2F2F]">
        {label}
      </label>
      <Field
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-[48px] rounded-[24px] border-[1px] border-[#DCDCDC] bg-[#FCFCFC] px-[12px] text-sm font-medium outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-500"
      />
    </div>
  );
};
export default CustomInputField;
