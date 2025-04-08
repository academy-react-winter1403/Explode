import React from 'react';
import SearchInput from './search-input';
import Category from './category';
import Calender from './calender';

const BlogsFilter = ({
  setQuery,
  setCurrentPage,
  categories,
  setCategory,
  setLevelId,
  courseLevels,
  teachers,
  setTeacherId,
  setCostDown,
  setCostUp,
  setStartDate,
  setEndDate,
  responsiveFilter,
  setResponsiveFilter,
  setShowFilter,
}) => {
  return (
    <div
      className={`mt-[60px] rounded-[32px] border-[2px] border-[#DCDCDC] p-[15px] max-[1050px]:w-[100%] ${responsiveFilter ? 'max-[600px]:fixed' : 'max-[600px]:hidden'} max-[600px]:top-0 max-[600px]:right-0 max-[600px]:z-1000 max-[600px]:mt-0 max-[600px]:w-[100%] max-[600px]:bg-[#fff]`}
    >
      <div className="mb-[25px]">
        <div className="flex justify-between">
          <h2 className="text-thirdly text-[24px] font-[700]">فیلتر</h2>
          <button
            onClick={() => setShowFilter('hidden')}
            className="bg-red-200 md:hidden"
          >
            بستن
          </button>
        </div>
        <SearchInput />
        <Category />
        <Calender />
      </div>
    </div>
  );
};

export default BlogsFilter;
