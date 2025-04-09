import PropTypes from 'prop-types';
import SortingItem from './SortingItem';
import { SortingOptionsButtonData } from './SortingOptionsButtonData';

const SortingList = ({ currentSorting, currentSortingType, onClick }) => {
  return (
    <ul className="flex flex-wrap items-center gap-2 max-[600px]:px-[30px] max-[600px]:py-5">
      {SortingOptionsButtonData.map((item) => (
        <SortingItem
          key={item.id}
          item={item}
          currentSorting={currentSorting}
          currentSortingType={currentSortingType}
          onClick={onClick}
        />
      ))}
    </ul>
  );
};

export default SortingList;
