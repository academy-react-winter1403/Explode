import IconSet from "../../../../../components/shared/IconSet"

const SortingList = ({ handleSortingChange, sorting, sortingType, responsiveFilter, setResponsiveFilter, responsiveSorting, setResponsiveSorting }) => {
    return (
        <div className='mb-[20px] h-[40px] flex items-center gap-[15px]'>
            <div className="max-[600px]:flex max-[600px]:items-center max-[600px]:justify-between max-[600px]:w-[100%]">
                <span className='font-[700] text-[20px] text-thirdly max-[600px]:hidden'>ترتیب</span>
                <div onClick={() => setResponsiveFilter(!responsiveFilter)} className="hidden max-[600px]:flex bg-thirdly p-[12px_16px] rounded-[40px] gap-[10px] font-[500] text-[16px] text-[#FCFCFC] cursor-pointer">
                    <IconSet imageAddress={'/src/assets/icons/filter.svg'} firstSize={24} secondSize={24} />
                    فیلتر
                </div>
                <div onClick={() => setResponsiveSorting(!responsiveSorting)} className="hidden max-[600px]:flex bg-thirdly p-[12px_16px] rounded-[40px] gap-[10px] font-[500] text-[16px] text-[#FCFCFC] cursor-pointer">
                    <IconSet imageAddress={'/src/assets/icons/sorting.svg'} firstSize={24} secondSize={24} />
                    ترتیب
                </div>
            </div>

            <div className={`${responsiveSorting ? 'max-[600px]:fixed' : 'max-[600px]:hidden'}  max-[600px]:bg-[#fff] max-[600px]:z-1000 max-[600px]:top-0 max-[600px]:right-[0] max-[600px]:w-[100%] `}>
                <div className="hidden max-[600px]:flex mb-[20px] items-center justify-between w-[100%] max-[600px]:p-[20px_30px]">
                    <span className='font-[700] text-[20px] text-thirdly'>ترتیب</span>
                    <div onClick={() => setResponsiveSorting(!responsiveSorting)} className="flex items-center gap-[15px] p-[7px_16px] border-[#FF5353] border-[2px] rounded-[34px] text-[18px] text-[#FF5353] font-[500] cursor-pointer ">
                        <IconSet imageAddress={'/src/assets/icons/red-close.svg'} firstSize={24} secondSize={24} />
                        بستن
                    </div>
                </div>
                <ul className='flex items-center gap-[10px] flex-wrap max-[600px]:p-[20px_30px]'>
                    <li onClick={() => handleSortingChange("Active", "DESC")} className={`p-[7px_16px] ${sorting == "Active" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>جدیدترین</li>
                    <li onClick={() => handleSortingChange("likeCount", "DESC")} className={`p-[7px_16px] ${sorting == "likeCount" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>محبوب ترین</li>
                    <li onClick={() => handleSortingChange("cost", "DESC")} className={`p-[7px_16px] ${sorting == "cost" && sortingType == "DESC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>گران ترین</li>
                    <li onClick={() => handleSortingChange("cost", "ASC")} className={`p-[7px_16px] ${sorting === "cost" && sortingType == "ASC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>ارزان ترین</li>
                </ul>
            </div>

        </div>
    )
}
export default SortingList