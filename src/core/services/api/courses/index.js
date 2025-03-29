import http from '../../../axiosInstance'
import '../../../interceptor/interceptor.response'

export const getTopCourses = (urlParams) => {
    const URL = '/Home/GetCoursesTop'
    return http.get(URL, { params: urlParams })
}

export const getCoursesWithPagination = (urlParams) => {
    const URL = '/Home/GetCoursesWithPagination'
    return http.get(URL, { params: urlParams })
}

export const getCategories = () => {
    const URL = '/Home/GetTechnologies'
    return http.get(URL)
}

export const getLevels = () => {
    const URL = '/CourseLevel/GetAllCourseLevel'
    return http.get(URL)
}