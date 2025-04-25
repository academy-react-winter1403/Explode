const FormHeader = ({ title, description, phoneNumberString }) => {
  return (
    <div className="flex flex-col gap-2 md:gap-3">
      <h1 className="text-2xl font-semibold text-[#2F2F2F] sm:text-3xl lg:text-4xl">
        {title}
      </h1>
      <p className="w-full text-base font-medium text-[#707070] sm:w-[380px] md:text-lg">
        {description.split('{phone}')[0]}
        <span className="text-primary font-semibold">{phoneNumberString}</span>
        {description.split('{phone}')[1]}
      </p>
    </div>
  );
};

export default FormHeader;
