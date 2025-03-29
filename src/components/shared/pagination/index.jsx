import ReactPaginate from 'react-paginate'
const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
    return (
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
    )
}
export default Pagination