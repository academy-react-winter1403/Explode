import React from 'react';
import Sorting from '../../../../components/Sorting';
import Blogs from './Blogs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs, setCurrentPage } from '../../../../redux/blogSlice';
import Pagination from '../../../../components/Pagination';

const BlogList = () => {
  const totalBlogs = useSelector((state) => state.blogs.totalBlogs);
  const pageCount = Math.ceil(totalBlogs / 8);
  const currentPage = useSelector((state) => state.blogs.currentPage);
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    dispatch(setCurrentPage(data.selected + 1));
    dispatch(fetchBlogs());
  };
  return (
    <div className="w-[1031px] max-[1050px]:w-[100%]">
      <Sorting />
      <Blogs />
      <Pagination
        pageCount={pageCount}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </div>
  );
};

export default BlogList;
