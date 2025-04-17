import ReactPaginate from 'react-paginate';
const Pagination = ({ handlePageClick, pageCount, currentPage }) => {
  return (
    <div className="mt-[50px] flex justify-center">
      {
        <ReactPaginate
          pageCount={pageCount}
          breakLabel={null}
          activeLinkClassName={
            'bg-primary text-[#FEFDFF] p-[11px_18px] rounded-[8px]'
          }
          className={`flex ${(pageCount <= 1 && 'hidden') || null} text-thirdly h-[48px] flex-row-reverse items-center gap-[20px] rounded-[16px] bg-[#EFEFEF] p-[0_20px] text-[16px] font-[700]`}
          previousLabel={
            currentPage > 1 ? (
              <span
                className={
                  'flex h-[24px] w-[24px] cursor-pointer bg-contain bg-center bg-no-repeat'
                }
                style={{
                  backgroundImage: `url('/src/assets/icons/leftArrow.svg')`,
                }}
              ></span>
            ) : null
          }
          nextLabel={
            currentPage < pageCount ? (
              <span
                className={
                  'flex h-[24px] w-[24px] cursor-pointer bg-contain bg-center bg-no-repeat'
                }
                style={{
                  backgroundImage: `url('/src/assets/icons/rightArrow.svg')`,
                }}
              ></span>
            ) : null
          }
          pageClassName={'cursor-pointer select-none'}
          onPageChange={handlePageClick}
          forcePage={currentPage - 1}
        />
      }
    </div>
  );
};
export default Pagination;
