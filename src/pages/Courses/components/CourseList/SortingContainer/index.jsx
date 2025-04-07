import { useState } from 'react';
import IconSet from '../../../../../components/shared/IconSet';
import MobileToggleButtons from './MobileToggleButton';
import SortingItem from './SortingItem';
import SortingList from './SortingList';
import SortingMobilePanel from './SortingMobilePannel';
import useCourseStore from '../../../../../Hooks/useCourseStore';

const SortingContainer = ({ handleSortingChange, sorting, sortingType }) => {
  const [responsiveSorting, setResponsiveSorting] = useState(false);
  const { responsiveFilter, setResponsiveFilter } = useCourseStore();
  return (
    <div className="mb-5 flex h-10 items-center gap-4">
      <span className="text-thirdly text-xl font-bold max-[600px]:hidden">
        ترتیب
      </span>

      <MobileToggleButtons
        onFilterClick={() => setResponsiveFilter(!responsiveFilter)}
        onSortingClick={() => setResponsiveSorting(!responsiveSorting)}
      />

      <SortingMobilePanel
        isSortingActive={responsiveSorting}
        onClose={() => setResponsiveSorting(false)}
      >
        <SortingList
          currentSorting={sorting}
          currentSortingType={sortingType}
          onClick={handleSortingChange}
        />
      </SortingMobilePanel>
    </div>
  );
};
export default SortingContainer;
