import SortingItem from './SortingItem';

const SortingList = ({
  SortingOptionsButtonData,
  currentSorting,
  currentSortingType,
  onClick,
}) => {
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
