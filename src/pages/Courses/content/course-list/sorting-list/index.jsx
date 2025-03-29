const SortingList = ({handleSortingChange, sorting, sortingType}) => {
    return (
        <div className='mb-[20px] h-[40px] flex items-center gap-[15px]'>
            <span className='font-[700] text-[20px] text-thirdly'>ترتیب</span>
            <ul className='flex items-center gap-[10px] '>
                <li onClick={() => handleSortingChange("Active", "DESC")} className={`p-[7px_16px] ${sorting == "Active" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>جدیدترین</li>
                <li onClick={() => handleSortingChange("likeCount", "DESC")} className={`p-[7px_16px] ${sorting == "likeCount" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>محبوب ترین</li>
                <li onClick={() => handleSortingChange("cost", "DESC")} className={`p-[7px_16px] ${sorting == "cost" && sortingType == "DESC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>گران ترین</li>
                <li onClick={() => handleSortingChange("cost", "ASC")} className={`p-[7px_16px] ${sorting === "cost" && sortingType == "ASC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>ارزان ترین</li>
            </ul>
        </div>
    )
}
export default SortingList