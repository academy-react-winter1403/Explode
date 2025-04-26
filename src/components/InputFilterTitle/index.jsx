import { useSelector } from "react-redux";

const InputFilterTitle = ({ imageSrc, titleText }) => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div className="mb-[10px] flex items-center gap-[8px]">
      <span
        className="flex h-[24px] w-[24px] bg-contain bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      ></span>
      <span className={` ${darkMode ? 'text-[#fff] ' : 'text - thirdly'} text-[16px] font-[500]`}>{titleText}</span>
    </div>
  );
};
export default InputFilterTitle;
