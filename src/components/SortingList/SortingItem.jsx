const SortingItem = ({ item, currentSorting, currentSortingType, onClick }) => {
  const isActive =
    currentSorting === item.value &&
    (item.type ? currentSortingType === item.type : true);

  const activeClasses = 'border-[#FF5353] text-[#FF5353]';
  const inactiveClasses = 'border-thirdly text-thirdly';

  return (
    <li
      onClick={() => onClick(item.value, item.type)}
      className={`cursor-pointer rounded-[34px] border px-4 py-2 text-lg font-medium ${isActive ? activeClasses : inactiveClasses} `}
    >
      {item.label}
    </li>
  );
};
export default SortingItem;
