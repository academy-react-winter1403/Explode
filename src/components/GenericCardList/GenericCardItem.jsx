import { useSelector } from 'react-redux';
import IconSet from '../shared/IconSet';
//card for oursevice and our goals
const GenericCard = ({
  item,
  layout = 'row', // 'row' یا 'column'
  hasIcon = false,
  hasImage = false,
  borderActiveClass = 'border-primary border-solid',
  borderInactiveClass = 'border-[#DCDCDC]',
  cardClasses = '',
  titleClasses = '',
  descriptionClasses = '',
}) => {
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div
      className={`flex grow flex-wrap gap-2 ${darkMode && 'bg-thirdly shadow-[0_0_30px_#000] border-none' || 'bg-[#FCFCFC]'} ${layout === 'row' ? 'flex-row items-center' : 'flex-col justify-between'
        } rounded-[24px] border-[2px]  p-[20px] ${item.isActiveBorder ? borderActiveClass : borderInactiveClass
        } ${cardClasses}`}
    >
      {hasIcon && (
        <div
          className={`flex  h-[88px] w-[88px] items-center justify-center rounded-[50%] border-[2px] ${darkMode ? 'bg-thirdly' : 'bg-[#FCFCFC]'}  ${item.isActiveBorder ? borderActiveClass : borderInactiveClass
            }`}
        >
          <IconSet imageAddress={item.image} firstSize={40} secondSize={40} />
        </div>
      )}

      <div className={layout === 'row' ? 'ml-[15px]' : ''}>
        <h2 className={`text-[20px] font-[700] ${darkMode && 'text-[#fff]'} ${titleClasses}`}>
          {item.title}
        </h2>
        <p
          className={`text-[16px] font-[400] text-[#707070] ${darkMode && 'text-[#fff]'} ${descriptionClasses}`}
        >
          {item.description}
        </p>
      </div>

      {hasImage && (
        <img
          src={item.image}
          alt={item.title}
          className="mt-[15px] h-[236px] w-[260px] max-[700px]:m-[15px_auto_0_auto]"
        />
      )}
    </div>
  );
};

export default GenericCard;
