import IconSet from '../../../../components/shared/IconSet';

const ProgressItem = ({
  item,
  index,
  currentStep,
  handleMarkerClick,

  iconSize = 90,
}) => {
  return (
    <div
      key={index}
      className="absolute flex cursor-pointer justify-center"
      style={{ left: item.position }}
      onClick={() => handleMarkerClick(index)}
    >
      <div
        className={`flex h-[24px] w-[24px] items-center rounded-full border-5 bg-white transition-all duration-500 ${
          index <= currentStep ? 'border-primary' : 'border-[#D9D9D9]'
        }`}
      ></div>

      <IconSet
        imageAddress={item.image}
        firstSize={iconSize}
        secondSize={iconSize}
        className={'absolute top-[-100px]'}
      />
    </div>
  );
};

export default ProgressItem;
