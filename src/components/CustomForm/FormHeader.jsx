const FormHeader = ({ title, description, phoneNumberString }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-3xl font-semibold text-[#2F2F2F]">{title}</div>
      <p className="w-[360px] text-[16px] font-medium text-[#707070]">
        {description.split('{phone}')[0]}
        <span className="text-primary font-semibold">{phoneNumberString}</span>
        {description.split('{phone}')[1]}
      </p>
    </div>
  );
};
export default FormHeader;
