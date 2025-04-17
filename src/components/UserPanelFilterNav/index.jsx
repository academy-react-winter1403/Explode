import Calender from '../Calender';
import InputFilterTitle from '../InputFilterTitle';
import SearchInput from '../SearchInput';
import SortingList from '../SortingList';

const UserPanelFilterNav = ({
  SearchHandler,
  handleStartDate,
  handleEndtDate,
  haveSortingButtons = false,
  sorting,
  sortingType,
  handleSortingChange,
  SortingOptionsButtonData,
}) => {
  return (
    <div className="flex gap-6">
      {' '}
      <div className="flex flex-col">
        {' '}
        <InputFilterTitle
          imageSrc={'/src/assets/icons/search.svg'}
          titleText={'جستجو'}
        />
        <SearchInput
          placeholder="دوره ی مورد نظر را جست و جو کنید..."
          SearchHandler={SearchHandler}
          className="h-[48px] w-[258px]"
        />
      </div>
      <div className="mb-[20px]">
        <InputFilterTitle
          imageSrc={'/src/assets/icons/calender.svg'}
          titleText={'تاریخ برگزاری - اتمام'}
        />
        <Calender
          handleStartDate={handleStartDate}
          handleEndtDate={handleEndtDate}
        />
      </div>
      {haveSortingButtons && (
        <>
          {' '}
          <span className="text-thirdly my-auto text-xl font-bold max-[600px]:hidden">
            ترتیب
          </span>
          <SortingList
            currentSorting={sorting}
            currentSortingType={sortingType}
            onClick={handleSortingChange}
            SortingOptionsButtonData={SortingOptionsButtonData}
          />
        </>
      )}
    </div>
  );
};
export default UserPanelFilterNav;
