import { useDispatch } from 'react-redux';
import InputFilterTitle from '../../../../components/InputFilterTitle';
import SearchInput from '../../../../components/SearchInput';
import {
  fetchCourses,
  setCurrentPage,
  setQuery,
} from '../../../../redux/courseSlice';

const SearchFilterInput = () => {
  const dispatch = useDispatch();

  let filterTimeOut;
  const handleQuery = (data) => {
    // Debounce
    clearInterval(filterTimeOut);
    filterTimeOut = setTimeout(() => {
      dispatch(setQuery(data.trim()));
      dispatch(setCurrentPage(1));
      dispatch(fetchCourses());
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
