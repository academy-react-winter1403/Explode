import React, { useEffect, useState } from 'react'
import CourseList from './course-list'
import CourseFilter from './course-filter'
import { getCoursesWithPagination } from '../../../core/services/api/courses'

const Content = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const getAllCourses = async () => {
        const params = {
            RowsOfPage: 6
        }
        try {
            const { courseFilterDtos: result } = await getCoursesWithPagination(params)
            setCourses(result)
            setLoading(false)
        }
        catch {
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllCourses()
    }, [])

    return (
        <section className='max-w-[1360px] flex justify-between items-start m-[0_auto] mb-[80px] max-[1460px]:p-[0_16px]'>
            <CourseFilter />
            <CourseList loading={loading} courses={courses} setCourses={setCourses} />
        </section>
    )
}

export default Content