import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseComments, fetchCourseDetail } from './../../core/redux/courseSlice';
import SingleInfo from './SingleInfo';
import SingleDescription from './SingleDescription';
import SingleComments from './SingleComments';
import RelatedSection from './RelatedSection';
import { fetchBlogDetail } from '../../core/redux/blogSlice';

const SinglePage = () => {
    const { pathname: location } = useLocation();
    const blogSingle = location.includes('/blogs/single');
    const courseSingle = location.includes('/courses/single');
    const { id } = useParams();
    const dispatch = useDispatch();
    const courseDetail = useSelector((state) => state.courses.courseDetail);
    const courseComments = useSelector((state) => state.courses.courseComments);
    const blogComments = useSelector((state) => state.blogs.blogComments);
    const commentLoading = useSelector((state) => state.courses.commentLoading);
    const blogDetail = useSelector((state) => state.blogs.blogDetail);

    useEffect(() => {
        if (courseSingle) {
            dispatch(fetchCourseDetail(id));
            dispatch(fetchCourseComments(id));
        } else {
            dispatch(fetchBlogDetail(id));
        }
    }, [dispatch, id, courseSingle]);

    const detail = courseSingle ? courseDetail : blogDetail;
    const comments = courseSingle ? courseComments : blogComments;
    console.log(detail)
    return (
        <section className='max-w-[1360px] m-[80px_auto] max-[1460px]:p-[0_16px] '>
            <SingleInfo detail={detail} courseSingle={courseSingle} blogSingle={blogSingle} />
            <SingleDescription detail={detail} courseSingle={courseSingle} blogSingle={blogSingle} />
            <SingleComments comments={comments} loading={false} courseSingle={courseSingle} />
            <RelatedSection courseSingle={courseSingle} blogSingle={blogSingle} />
        </section>
    );
};

export default SinglePage;
