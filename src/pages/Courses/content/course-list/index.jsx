import React, { useState } from 'react'
import Cards from '../../../../components/shared/cards'
import CardsSkeleton from '../../../skeleton/cards-skeleton'
import ReactPaginate from 'react-paginate';
const CourseList = ({
    loading,
    courses,
    totalCourses,
    setCurrentPage,
    perPage,
    currentPage,
    sorting,
    setSorting,
    sortingType,
    setSortingType
}) => {
    const pageCount = Math.ceil(totalCourses / perPage)
    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1)
    }
    const handleSortingChange = (sorting, sortingType) => {
        setSorting(sorting)
        setSortingType(sortingType)
        setCurrentPage(1)
    }
    return (
        <div className='w-[1031px] '>
            {/* Sorting List */}
            <div className='mb-[20px] h-[40px] flex items-center gap-[15px]'>
                <span className='font-[700] text-[20px] text-thirdly'>ترتیب</span>
                <ul className='flex items-center gap-[10px] '>
                    <li onClick={() => handleSortingChange("Active", "DESC")} className={`p-[7px_16px] ${sorting == "Active" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>جدیدترین</li>
                    <li onClick={() => handleSortingChange("likeCount", "DESC")} className={`p-[7px_16px] ${sorting == "likeCount" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>محبوب ترین</li>
                    <li onClick={() => handleSortingChange("cost", "DESC")} className={`p-[7px_16px] ${sorting == "cost" && sortingType == "DESC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>گران ترین</li>
                    <li onClick={() => handleSortingChange("cost", "ASC")} className={`p-[7px_16px] ${sorting === "cost" && sortingType == "ASC" ? "border-[#FF5353] text-[#FF5353]" : "border-thirdly text-thirdly"} border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]`}>ارزان ترین</li>
                </ul>
            </div>

            {/* Course List */}
            <div className='flex justify-between flex-wrap gap-[20px]'>
                {
                    loading ? Array(perPage).fill(0).map((_, index) => (<CardsSkeleton key={index} width={322} height={293} />)) : courses.map((item, index) => (
                        <Cards
                            isCourse={true}
                            key={index}
                            width={322}
                            title={item.title}
                            author={item.teacherName}
                            courseLevel={item.levelName}
                            courseCategory={item.technologyList.split(',')[0]}
                            price={item.cost}
                            image={item.tumbImageAddress}
                        />
                    ))
                }
            </div>

            {/* Pagination */}
            <div className='flex justify-center mt-[50px]'>
                {<ReactPaginate
                    pageCount={pageCount}
                    breakLabel={null}
                    activeLinkClassName={'bg-primary text-[#FEFDFF] p-[11px_18px] rounded-[8px]'}
                    className={`flex ${pageCount <= 1 && "hidden" || null} text-thirdly flex-row-reverse gap-[20px] h-[48px] bg-[#EFEFEF] items-center rounded-[16px] p-[0_20px] text-[16px] font-[700]`}
                    previousLabel={currentPage > 1 ? <span className={'w-[24px] flex h-[24px] bg-center bg-contain bg-no-repeat cursor-pointer'} style={{ backgroundImage: `url('/src/assets/icons/leftArrow.svg')` }}></span> : null}
                    nextLabel={currentPage < pageCount ? <span className={'w-[24px] flex h-[24px] bg-center bg-contain bg-no-repeat cursor-pointer'} style={{ backgroundImage: `url('/src/assets/icons/rightArrow.svg')` }}></span> : null}
                    pageClassName={'cursor-pointer select-none'}
                    onPageChange={handlePageClick}
                    forcePage={currentPage - 1}
                />}
            </div>

        </div>
    )
}

export default CourseList