import Title from '../../../../components/FilterSectionsTitle';
import useCourseStore from '../../../../Hooks/useCourseStore';

const SearchInput = () => {
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
      <Title imageSrc={'/src/assets/icons/search.svg'} titleText={'جستجو'} />

      <div className="relative">
        <input
          type="text"
          onChange={(event) => handleQuery(event.target.value)}
          placeholder="دوره مورد نظر را جستجو کنید..."
          className="h-[48px] w-[100%] rounded-[16px] bg-[#F1F1F1] p-[0_15px] text-[12px] font-[500] text-[#707070] outline-hidden"
        />
        <div className="bg-primary absolute top-0 left-0 flex h-[48px] w-[48px] items-center justify-center rounded-[16px]">
          <span
            className="h-[24px] w-[24px] bg-contain bg-center"
            style={{
              backgroundImage: `url(/src/assets/icons/light-search.svg)`,
            }}
          ></span>
        </div>
      </div>
    </div>
  );
};
export default SearchInput;
