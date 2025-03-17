const CustomInputField = ({ label, name, placeholder }) => {
  return (
    <div className="flex flex-col flex-nowrap gap-[8px]">
      <label htmlFor="name" className="font-semibold text-[#2F2F2F]">
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className="h-[48px] rounded-[24px] border-[1px] border-[#DCDCDC] bg-[#FCFCFC] px-[12px] text-sm font-medium outline-none"
      />
    </div>
  );
};
export default CustomInputField;
