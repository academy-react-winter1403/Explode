import React, { useEffect, useState } from 'react'
import CourseList from './course-list'
import CourseFilter from './course-filter'
import { getCoursesWithPagination } from '../../../core/services/api/courses'

const Content = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalCourses, setTotalCourses] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    let perPage = 12
    const getAllCourses = async (page, perPage) => {
        const params = {
            RowsOfPage: perPage,
            PageNumber: page
        }
        try {
            setLoading(true)
            const { courseFilterDtos: result, totalCount: coursesCount } = await getCoursesWithPagination(params)
            setCourses(result)
            setTotalCourses(coursesCount)
            setLoading(false)
        }
        catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllCourses(currentPage, perPage)
    }, [currentPage])

    return (
        <section className='max-w-[1360px] flex justify-between items-start m-[0_auto] mb-[80px] max-[1460px]:p-[0_16px]'>
            <CourseFilter />
            <CourseList
                loading={loading}
                courses={courses}
                totalCourses={totalCourses}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                perPage={perPage}
            />
        </section>
    )
}
export default Content