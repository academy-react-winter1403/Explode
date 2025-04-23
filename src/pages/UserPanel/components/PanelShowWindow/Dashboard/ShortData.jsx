import IconSet from '../../../../../components/shared/IconSet';

const ShortData = ({ img, title, titleValue }) => {
  return (
    <div className="flex h-[60px] flex-row flex-nowrap gap-2">
      <span className="mt-1 mt-[10px] h-[60px] w-[40px]">
        <IconSet imageAddress={img} firstSize={40} secondSize={40} />
      </span>
      <div className="Center flex h-full w-[50%] flex-col">
        <span className="ml-auto text-[14px] font-[500] text-[#707070]">
          {title}
        </span>
        <span className="line- w-full text-[16px] font-[600] whitespace-nowrap">
          {titleValue}
        </span>
      </div>
    </div>
  );
};
export default ShortData;
