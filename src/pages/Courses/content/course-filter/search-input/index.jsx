import Title from "../../../../../components/shared/filter-sections-title"

const SearchInput = ({ setQuery, setCurrentPage }) => {
    let filterTimeOut;
    const handleQuery = (data) => {
        // Debounce
        clearInterval(filterTimeOut)
        filterTimeOut = setTimeout(() => {
            setQuery(data.trim())
            setCurrentPage(1)
        }, 1000);
    }

    return (
        <div className="mb-[20px]">
            <Title imageSrc={'/src/assets/icons/search.svg'} titleText={'جستجو'} />

            <div className='relative'>
                <input type="text" onChange={(event) => handleQuery(event.target.value)} placeholder='دوره مورد نظر را جستجو کنید...' className='text-[#707070] w-[100%] h-[48px] text-[12px] font-[500] outline-hidden p-[0_15px] bg-[#F1F1F1] rounded-[16px]' />
                <div className='absolute w-[48px] h-[48px] bg-primary left-0 flex items-center justify-center top-0 rounded-[16px]'>
                    <span className='bg-contain bg-center w-[24px] h-[24px]' style={{ backgroundImage: `url(/src/assets/icons/light-search.svg)` }}></span>
                </div>
            </div>
        </div>
    )
}
export default SearchInput