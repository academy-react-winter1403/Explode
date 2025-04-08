import React, { Fragment, useState } from 'react';
import Page_Title from './page_title';
import BlogsFilter from './Content/blogs-filter';
import BlogList from './Content/blog-list';
// import Sorting from '../Courses/content/course-list/sorting-list';

const Courses = ({ sorting }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState(null);
  const [ShowFilter, setShowFilter] = useState('hidden');
  const [ShowSort, setShowSort] = useState('hidden');

  return (
    <Fragment>
      <Page_Title />
      <div className="flex justify-evenly">
        <div
          className={`w-[70%]  px-5 md:block md:w-[30%] ${ShowFilter}`}
        >
          <BlogsFilter setShowFilter={setShowFilter} />
        </div>

        <div className="w-[70%] ">
          <ul className="flex justify-between md:hidden">
            <li
              onClick={() => setShowFilter('absolute z-10 bg-white')}
              className="w-20 cursor-pointer rounded-2xl bg-black px-3 py-2 text-center text-white"
            >
              فیلتر
            </li>
            <li
              onClick={() =>
                setShowSort('flex z-10 bg-white w-full justify-center')
              }
              className="w-20 cursor-pointer rounded-2xl bg-black px-3 py-2 text-center text-white"
            >
              ترتیب
            </li>
          </ul>

          <ul
            className={`md:flex flex-wrap justify-center gap-[10px] max-[600px]:p-[20px_30px] ${ShowSort}`}
          >
            <li
              onClick={() => handleSortingChange('Active', 'DESC')}
              className={`p-[7px_16px] ${sorting == 'Active' ? 'border-[#FF5353] text-[#FF5353]' : 'border-thirdly text-thirdly'} cursor-pointer rounded-[34px] border-[1px] text-[18px] font-[500]`}
            >
              جدیدترین
            </li>
            <li
              onClick={() => handleSortingChange('likeCount', 'DESC')}
              className={`p-[7px_16px] ${sorting == 'likeCount' ? 'border-[#FF5353] text-[#FF5353]' : 'border-thirdly text-thirdly'} cursor-pointer rounded-[34px] border-[1px] text-[18px] font-[500]`}
            >
              محبوب ترین
            </li>

            <button className='md:hidden' onClick={()=>setShowSort('hidden')}>close</button>
          </ul>

          <div className="mt-10">
            <BlogList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Courses;
