const CustomInputField = () => {
  return (
    <div className="flex flex-col flex-nowrap gap-[8px]">
      <label className="font-semibold text-[#2F2F2F]">شماره همراه</label>
      <input
        type="text"
        placeholder="شماره همراه خود را وارد کنید"
        className="h-[48px] rounded-[24px] border-[1px] border-[#DCDCDC] bg-[#FCFCFC] px-[12px] text-sm font-medium outline-none"
      />
    </div>
  );
};
export default CustomInputField;
