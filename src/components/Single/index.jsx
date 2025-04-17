import React, { useEffect, useRef } from 'react';
import { useLocation, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseComments, fetchCourseDetail } from './../../core/redux/courseSlice';
import SingleInfo from './SingleInfo';
import SingleDescription from './SingleDescription';
import SingleComments from './SingleComments';
import RelatedSection from './RelatedSection';

const SinglePage = () => {
    const { pathname: location } = useLocation()
    const blogSingle = location.includes('/blogs/single')
    const courseSingle = location.includes('/courses/single')
    const loading = useSelector((state) => state.courses.loading)
    const commentLoading = useSelector((state) => state.courses.commentLoading)
    const dispatch = useDispatch()
    const { id } = useParams()
    const detail = useRef()
    const comments = useRef()
    if (courseSingle) {
        useEffect(() => {
            dispatch(fetchCourseDetail(id))
            dispatch(fetchCourseComments(id))
        }, [])
        detail.current = useSelector((state) => state.courses.courseDetail)
        comments.current = useSelector((state) => state.courses.courseComments)
        console.log(comments.current)
    }
    else {

    }
    return (
        <section className='max-w-[1360px] m-[80px_auto] max-[1460px]:p-[0_16px] '>
            <SingleInfo detail={detail.current} courseSingle={courseSingle} blogSingle={blogSingle} />
            <SingleDescription detail={detail.current} courseSingle={courseSingle} blogSingle={blogSingle} />
            <SingleComments comments={comments.current} loading={commentLoading} />
            <RelatedSection courseSingle={courseSingle} blogSingle={blogSingle} />
        </section>
    )
}

export default SinglePage
