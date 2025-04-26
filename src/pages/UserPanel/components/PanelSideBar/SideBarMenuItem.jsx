import { useSelector } from 'react-redux';
import IconSet from '../../../../components/shared/IconSet';
import clsx from 'clsx';

const SideBarMenuItem = ({ item, handlerFunction }) => {
  const { panelState } = useSelector((state) => state.userpanel);
  return (
    <div
      onClick={handlerFunction}
      className={clsx(
        'flex items-center gap-2 px-1 py-3 text-[18px] font-[500] text-white transition-all duration-300',
        {
          'border-primary text-primary bg-primary/10 shadow-primary/20 hover:shadow-primary/30 transform rounded-[16px] border-2 shadow-lg hover:scale-[1.02]':
            item.value === panelState,
        },
      )}
    >
      <IconSet
        firstSize={24}
        secondSize={24}
        imageAddress={item.iconAddress}
        className={clsx('mt-1 filter', {
          'brightness-0 hue-rotate-[200deg] invert-[.5] saturate-[5] sepia-[1]':
            item.value === panelState,
        })}
        aria-hidden="true"
      />
      {item.label}
    </div>
  );
};
export default SideBarMenuItem;
