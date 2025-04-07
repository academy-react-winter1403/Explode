import IconSet from '../shared/IconSet';
//card for oursevice and our goals
const GenericCard = ({
  item,
  layout = 'row', // 'row' یا 'column'
  hasIcon = false,
  hasImage = false,
  borderActiveClass = 'border-primary',
  borderInactiveClass = 'border-[#DCDCDC]',
  cardClasses = '',
  titleClasses = '',
  descriptionClasses = '',
}) => {
  return (
    <div
      className={`flex ${
        layout === 'row' ? 'flex-row items-center' : 'flex-col justify-between'
      } rounded-[24px] border-[2px] bg-[#FCFCFC] p-[20px] ${
        item.isActiveBorder ? borderActiveClass : borderInactiveClass
      } ${cardClasses}`}
    >
      {hasIcon && (
        <div
          className={`flex h-[88px] w-[88px] items-center justify-center rounded-[50%] border-[2px] bg-[#FCFCFC] ${
            item.isActiveBorder ? borderActiveClass : borderInactiveClass
          }`}
        >
          <IconSet imageAddress={item.image} firstSize={40} secondSize={40} />
        </div>
      )}

      <div className={layout === 'row' ? 'ml-[15px]' : ''}>
        <h2 className={`text-[20px] font-[700] ${titleClasses}`}>
          {item.title}
        </h2>
        <p
          className={`text-[16px] font-[400] text-[#707070] ${descriptionClasses}`}
        >
          {item.description}
        </p>
      </div>

      {hasImage && (
        <img
          src={item.image}
          alt={item.title}
          className="mt-[15px] h-[236px] w-[260px]"
        />
      )}
    </div>
  );
};

export default GenericCard;
