import http from '../../../axiosInstance'
import '../../../interceptor/interceptor.response'

export const getBlogsList = (urlParams) => {
    const URL = '/News'
    return http.get(URL, { params: urlParams })
}