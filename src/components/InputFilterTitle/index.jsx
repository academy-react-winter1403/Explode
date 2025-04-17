const InputFilterTitle = ({ imageSrc, titleText }) => {
  return (
    <div className="mb-[10px] flex items-center gap-[8px]">
      <span
        className="flex h-[24px] w-[24px] bg-contain bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></span>
      <span className="text-[16px] font-[500]">{titleText}</span>
    </div>
  );
};
export default InputFilterTitle;
