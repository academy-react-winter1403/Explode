import http from '../../../axiosInstance'
import '../../../interceptor/interceptor.response'
export const getLandingReports = () => {
    const URL = '/Home/LandingReport'
    return http.get(URL)
}