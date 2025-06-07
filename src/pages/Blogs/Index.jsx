import { Fragment, useEffect, useState } from 'react';
import BlogsPageTitle from './Components/BlogsPageTitle';
import BlogList from './Components/BlogList';
import BlogFilter from './Components/BlogFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogCategories, fetchBlogs } from '../../redux/blogSlice';
import { FaSpinner } from 'react-icons/fa';
const Blogs = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode)
  const [loading, setLoading] = useState(true)
  const fetchData = async () => {
    try {
      
      await dispatch(fetchBlogs());
      await dispatch(fetchBlogCategories());
      setLoading(false)
    }
    catch {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, []);
  
  if (loading) {
    return (
      <div className={` ${darkMode ? 'bg-thirdly' : 'bg-[#fff]'} flex flex-col items-center justify-center z-1000  fixed top-0 left-0 w-full h-full`}>
        <FaSpinner className={`animate-spin text-[60px] mb-[10px] ${darkMode && 'text-[#fff]'}`} />
        <p className={`font-bold text-[30px] ${darkMode && 'text-[#fff]'}`}>در حال دریافت اطلاعات ...</p>
      </div>
    );
  }
  return (
    <Fragment>
      <BlogsPageTitle />
      <section className="m-[0_auto] mb-[80px] flex max-w-[1360px] items-start justify-between max-[1460px]:p-[0_16px] max-[1050px]:flex-col max-[1050px]:gap-[40px]">
        <BlogFilter />
        <BlogList />
      </section>
    </Fragment>
  );
};
export default Blogs;
