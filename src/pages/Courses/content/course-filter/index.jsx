import React from 'react'

const CourseFilter = ({ setQuery, setCurrentPage }) => {
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
        <div className='w-[298px] mt-[60px] border-[2px] border-[#DCDCDC] rounded-[32px] p-[15px]'>
            <h2 className='text-[24px] font-[700] text-thirdly mb-[25px]'>فیلتر</h2>

            <div>
                <div className='flex items-center gap-[10px] mb-[10px]'>
                    <span className='bg-center bg-contain w-[24px] h-[24px] flex' style={{ backgroundImage: `url(/src/assets/icons/search.svg)` }}></span>
                    <span className='text-[16px] font-[500]'>جستجو</span>
                </div>

                <div className='relative'>
                    <input type="text" onChange={(event) => handleQuery(event.target.value)} placeholder='دوره مورد نظر را جستجو کنید...' className='text-[#707070] w-[100%] h-[48px] text-[12px] font-[500] outline-hidden p-[0_15px] bg-[#F1F1F1] rounded-[16px]' />
                    <div className='absolute w-[48px] h-[48px] bg-primary left-0 flex items-center justify-center top-0 rounded-[16px]'>
                        <span className='bg-contain bg-center w-[24px] h-[24px]' style={{ backgroundImage: `url(/src/assets/icons/light-search.svg)` }}></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CourseFilter