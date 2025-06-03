import React, { useEffect } from 'react';
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
import {  fetchBlogComments, fetchBlogDetail, setBlogId } from '../../redux/blogSlice';

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

  useEffect(() => {
    window.scroll(0, 0);
    if (courseSingle && id) {
      dispatch(fetchCourseDetail(id));
      dispatch(setCourseId(id))
      dispatch(fetchCourseComments())
    } else {
      console.log('first')
      dispatch(fetchBlogDetail(id));
      dispatch(setBlogId(id))
      dispatch(fetchBlogComments())
    }
  }, [courseSingle, id]);

  const detail = courseSingle ? courseDetail : blogDetail;
  const comments = courseSingle ? courseComments : blogComments;
  const { darkMode } = useSelector((state) => state.darkMode)
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
