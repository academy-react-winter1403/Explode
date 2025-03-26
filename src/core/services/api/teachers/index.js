import http from '../../../axiosInstance'
import '../../../interceptor/interceptor.response'

export const getAllTeachers = () => {
    const URL = '/Home/GetTeachers'
    return http.get(URL)
}