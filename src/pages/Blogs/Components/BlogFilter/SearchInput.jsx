import React, { useRef } from 'react'
import Title from '../../../../components/shared/filter-sections-title'
import { useDispatch } from 'react-redux'
import { fetchBlogs, setCurrentPage, setQuery } from '../../../../core/redux/blogSlice'

const SearchInput = () => {
    const dispatch = useDispatch()
    const filterTimeOutRef = useRef(null)
    
    const handleQuery = (data) => {
        console.log(filterTimeOutRef.current)
        // Debounce
        if (filterTimeOutRef.current) {
            clearInterval(filterTimeOutRef.current);
        }
        filterTimeOutRef.current = setTimeout(() => {
            dispatch(setQuery(data.trim()));
            dispatch(setCurrentPage(1));
            dispatch(fetchBlogs())
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
    )
}

export default SearchInput