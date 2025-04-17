import InputFilterTitle from '../../../../components/InputFilterTitle';
import SearchInput from '../../../../components/SearchInput';
import useCourseStore from '../../../../Hooks/useCourseStore';

const SearchFilterInput = () => {
  const { setQuery, setCurrentPage } = useCourseStore();
  let filterTimeOut;
  const handleQuery = (data) => {
    // Debounce
    clearInterval(filterTimeOut);
    filterTimeOut = setTimeout(() => {
      setQuery(data.trim());
      setCurrentPage(1);
    }, 1000);
  };

  return (
    <div className="mb-[20px]">
      <InputFilterTitle
        imageSrc={'/src/assets/icons/search.svg'}
        titleText={'جستجو'}
      />

      <SearchInput
        SearchHandler={handleQuery}
        placeholder="دوره مورد نظر را جستجو کنید..."
        className="h-[48px] w-[100%]"
      />
    </div>
  );
};
export default SearchFilterInput;
