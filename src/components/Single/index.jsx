import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCourseComments,
  fetchCourseDetail,
  setCourseId,
} from './../../redux/courseSlice';
import SingleInfo from './SingleInfo';
import SingleDescription from './SingleDescription';
import SingleComments from './SingleComments';
import RelatedSection from './RelatedSection';
import { fetchBlogComments, fetchBlogDetail, setBlogId } from '../../redux/blogSlice';
import { FaSpinner } from 'react-icons/fa';

const SinglePage = () => {
  const { pathname: location } = useLocation();
  const blogSingle = location.includes('/blogs/single');
  const courseSingle = location.includes('/courses/single');
  const { id } = useParams();
  const dispatch = useDispatch();
  const courseDetail = useSelector((state) => state.courses.courseDetail);
  const courseComments = useSelector((state) => state.courses.courseComments);
  const blogComments = useSelector((state) => state.blogs.blogComments);
  const blogDetail = useSelector((state) => state.blogs.blogDetail);
  const [loading, setLoading] = useState(true)
  const { darkMode } = useSelector((state) => state.darkMode)
  const fetchData = async () => {
    try {
      window.scroll(0, 0);
      if (courseSingle && id) {
        setLoading(true)
        await dispatch(fetchCourseDetail(id));
        await dispatch(setCourseId(id))
        await dispatch(fetchCourseComments())
        setLoading(false)
      } else {
        setLoading(true)
        await dispatch(fetchBlogDetail(id));
        await dispatch(setBlogId(id))
        await dispatch(fetchBlogComments())
        setLoading(false)
      }
    }
    catch {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [courseSingle, id]);

  const detail = courseSingle ? courseDetail : blogDetail;
  const comments = courseSingle ? courseComments : blogComments;

  if (loading) {
    return (
      <div className={` ${darkMode ? 'bg-thirdly' : 'bg-[#fff]'} flex flex-col items-center justify-center z-1000  fixed top-0 left-0 w-full h-full`}>
        <FaSpinner className={`animate-spin text-[60px] mb-[10px] ${darkMode && 'text-[#fff]'}`} />
        <p className={`font-bold text-[30px] ${darkMode && 'text-[#fff]'}`}>در حال دریافت اطلاعات ...</p>
      </div>
    );
  }
  return (
    <section className={` m-[80px_auto] max-w-[1360px] max-[1460px]:p-[0_16px]`}>
      <SingleInfo
        detail={detail}
        courseSingle={courseSingle}
        blogSingle={blogSingle}
      />
      <SingleDescription
        detail={detail}
        courseSingle={courseSingle}
        blogSingle={blogSingle}
      />
      <SingleComments
        singleId={id}
        title={detail?.title}
        comments={comments}
        courseSingle={courseSingle}
        userId={blogSingle && detail?.userId}
      />
      <RelatedSection
        teacherId={detail?.teacherId}
        courseSingle={courseSingle}
        title={detail?.title}
        categoryId={detail?.newsCatregoryId}
      />
    </section>
  );
};

export default SinglePage;
