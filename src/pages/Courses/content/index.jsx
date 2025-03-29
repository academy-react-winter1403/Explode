import React, { useEffect, useState } from 'react'
import CourseList from './course-list'
import CourseFilter from './course-filter'
import { getCategories, getCoursesWithPagination, getLevels } from '../../../core/services/api/courses'
import { getAllTeachers } from '../../../core/services/api/teachers'

const Content = () => {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalCourses, setTotalCourses] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorting, setSorting] = useState("Active");
    const [sortingType, setSortingType] = useState("DESC")
    const [query, setQuery] = useState(null)
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(null)
    const [courseLevels, setCourseLevels] = useState([])
    const [levelId, setLevelId] = useState(null)
    const [teacherId, setTeacherId] = useState(null)
    const [teachers, setTeachers] = useState([])
    const [costDown, setCostDown] = useState(0)
    const [costUp, setCostUp] = useState(2000000000)
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [responsiveFilter, setResponsiveFilter] = useState(false)
    const [responsiveSorting, setResponsiveSorting] = useState(false)
    const categoryCount = 1
    let perPage = 12
    const getAllCourses = async (
        currentPage,
        sorting,
        sortingType,
        query,
        category,
        levelId,
        teacherId,
        costDown,
        costUp,
        startDate,
        endDate
    ) => {
        const params = {
            RowsOfPage: perPage,
            PageNumber: currentPage,
            SortingCol: sorting,
            SortType: sortingType,
            Query: query ? query : null,
            TechCount: category ? categoryCount : null,
            ListTech: category ? category : null,
            courseLevelId: levelId ? levelId : null,
            TeacherId: teacherId ? teacherId : null,
            CostDown: costDown,
            CostUp: costUp,
            StartDate: startDate ? startDate : null,
            EndDate: endDate ? endDate : null
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

    const getCourseCategories = async () => {
        try {
            const result = await getCategories()
            setCategories(result)
        }
        catch {
            return false
        }
    }

    const getCourseLevels = async () => {
        try {
            const result = await getLevels()
            setCourseLevels(result)
        }
        catch {
            return false
        }
    }

    const getTeachers = async () => {
        try {
            const result = await getAllTeachers()
            setTeachers(result)
        }
        catch {
            return false
        }
    }

    useEffect(() => {
        getCourseCategories()
        getCourseLevels()
        getTeachers()
    }, [])

    useEffect(() => {
        getAllCourses(
            currentPage,
            sorting,
            sortingType,
            query,
            category,
            levelId,
            teacherId,
            costDown,
            costUp,
            startDate,
            endDate
        )
    }, [currentPage,
        sorting,
        sortingType,
        query,
        category,
        levelId,
        teacherId,
        costDown,
        costUp,
        endDate
    ])

    return (
        <section className='max-w-[1360px] flex justify-between items-start m-[0_auto] mb-[80px] max-[1460px]:p-[0_16px] max-[1050px]:flex-col max-[1050px]:gap-[40px]'>
            <CourseFilter{
                ...{
                    setQuery,
                    setCurrentPage,
                    categories,
                    setCategory,
                    courseLevels,
                    setLevelId,
                    teachers,
                    setTeacherId,
                    setCostDown,
                    setCostUp,
                    setStartDate,
                    setEndDate,
                    responsiveFilter,
                    setResponsiveFilter
                }
            }
            />

            <CourseList{
                ...{
                    loading,
                    courses,
                    totalCourses,
                    currentPage,
                    setCurrentPage,
                    perPage,
                    sorting,
                    setSorting,
                    setSortingType,
                    sortingType,
                    responsiveFilter,
                    setResponsiveFilter,
                    responsiveSorting,
                    setResponsiveSorting
                }
            }
            />
        </section>
    )
}
export default Content