import instance from '../axiosInstance';
import { toast } from 'react-hot-toast';
const onSuccessResponse = (response) => {
  return response;
};

const onErrorResponse = (error) => {
  if (error.response) {
    const { status, massage } = error.response;
    switch (status) {
      case 400:
        console.error('Bad Request:', massage);
        toast.error("This didn't work.");
        break;
      case 401:
        console.error('Unauthorized:', massage);
        toast.error("This didn't work.");
        break;
      case 404:
        console.error('Not Found:', massage);
        toast.error("This didn't work.");
        break;
      case 500:
        console.error('Server Error:', massage);
        toast.error("This didn't work.");
        break;
      default:
        console.error('Unhandled Error:', massage);
        toast.error("This didn't work.");
    }
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccessResponse, onErrorResponse);
