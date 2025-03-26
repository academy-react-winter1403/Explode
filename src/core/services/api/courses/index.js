import http from '../../../axiosInstance'
import '../../../interceptor/interceptor.response'

export const getCourseList = (urlParams) => {
    const URL = `/Home/GetCoursesTop`
    return http.get(URL, { params: urlParams })
}