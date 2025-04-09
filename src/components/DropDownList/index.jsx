import Title from '../FilterSectionsTitle';

const DropDownList = ({
  imageSrc,
  titleText,
  handleFunction,
  children,
  defaultOptionText,
}) => {
  return (
    <div className="relative mb-[20px]">
      <Title imageSrc={imageSrc} titleText={titleText} />
      <span
        className="absolute top-[50px] left-[15px] flex h-[20px] w-[20px] bg-contain bg-center"
        style={{ backgroundImage: `url(/src/assets/icons/arrow-down.svg)` }}
      ></span>
      <select
        onChange={(event) => {
          handleFunction(event.target.value);
        }}
        className="h-[48px] w-[100%] cursor-pointer appearance-none rounded-[16px] bg-[#F1F1F1] p-[0_16px] text-[12px] font-[500] text-[#707070] outline-hidden"
      >
        <option value="">{defaultOptionText}</option>

        {children}
      </select>
    </div>
  );
};
export default DropDownList;
