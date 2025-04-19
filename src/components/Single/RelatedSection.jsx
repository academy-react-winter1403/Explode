import React, { Fragment, useEffect } from 'react'
import ProductCards from '../cards'
import { useDispatch, useSelector } from 'react-redux'

import { fetchRelatedCourses } from './../../core/redux/courseSlice';
import { fetchRelatedBlogs } from '../../core/redux/blogSlice';

const RelatedSection = ({ courseSingle, teacherId, title, categoryId }) => {
    const dispatch = useDispatch()
    let relatedCourses = useSelector((state) => state.courses.relatedCourses)
    let relatedBlogs = useSelector((state) => state.blogs.relatedBlogs)
    const courseSingleLoading = useSelector((state) => state.courses.loading);
    const blogSingleLoading = useSelector((state) => state.blogs.loading);
    relatedCourses = relatedCourses.length > 0 && relatedCourses.filter((course) => course.title !== title)
    relatedBlogs = relatedBlogs.news?.length > 0 && relatedBlogs.news.filter((blog) => blog.title !== title)
    useEffect(() => {
        if (teacherId) {
            dispatch(fetchRelatedCourses(teacherId))
        }
    }, [teacherId])

    useEffect(() => {
        if (categoryId) {
            dispatch(fetchRelatedBlogs(categoryId))
        }
    }, [categoryId])

    return (
        <div className='mt-[30px] '>
            <h2 className='text-[20px]  font-[700] text-[#707070] mb-[20px]'>{courseSingle ? 'دوره های مرتبط' : 'بلاگ های مرتبط'}</h2>
            <div className='flex flex-wrap flex items-center justify-between max-[680px]:justify-center'>
                {courseSingle ? (
                    <Fragment>
                        {
                            courseSingleLoading ? 'loading' : relatedCourses?.length > 0 ?
                                relatedCourses.slice(0, 4).map((item) => (
                                    <ProductCards
                                        key={item.courseId}
                                        isCourse={true}
                                        title={item.title}
                                        date={item.date}
                                        author={item.teacherName}
                                        courseCategory={Array.isArray(item?.techs) && item.techs.length > 0 ? item.techs[0] : ''}
                                        courseLevel={item.courseLevelName}
                                        price={item.cost}
                                        linkAddress={`/courses/single/${item.courseId}`}
                                        image={item.tumbImageAddress}
                                        width={321}
                                    />
                                ))
                                : <div className='bg-[#FF5353] text-[#fff] font-bold p-[10px] text-center rounded-[10px] w-[100%]'>دوره ی مرتبطی یافت نشد</div>
                        }


                    </Fragment>
                ) : (
                    <Fragment>

                        {
                            blogSingleLoading ? 'loading' : relatedBlogs?.length > 0 ? relatedBlogs.slice(0, 4).map((item) => (
                                <ProductCards
                                    key={item.id}
                                    isBlog={true}
                                    title={item.title}
                                    views={item.currentView}
                                    linkAddress={`/blogs/single/${item.id}`}
                                    image={item.currentImageAddressTumb}
                                />
                            ))
                                : <div className='bg-[#FF5353] text-[#fff] font-bold p-[10px] text-center rounded-[10px] w-[100%]'> مطالب مرتبطی یافت نشد</div>
                        }



                    </Fragment>

                )}




            </div>
        </div>
    )
}

export default RelatedSection