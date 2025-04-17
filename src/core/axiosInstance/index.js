import axios from 'axios';
import toast from 'react-hot-toast';
import { removeItem } from '../common/storage.services';

const instance = axios.create({
  baseURL: 'https://classapi.sepehracademy.ir/api',
  headers: { 'Content-Type': 'application/json' },
});
// اصلاح شده: اینترسپتور request باید request را return کند
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  console.log('Request interceptor', token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // اضافه کردن توکن به هدر در صورت وجود
  }

  return config;
});
const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error) {
    const { status, data } = error.response;
    switch (status) {
      case 400:
        console.error('Bad Request:', data);
        toast.error(data.ErrorMessage);
        break;
      case 401:
        console.error('Unauthorized:', data);
        localStorage.clear('token');
        toast.error('توکن احراز هویت باطل شده لطفا دوباره وارد شوید');
        break;
      case 404:
        console.error('Not Found:', data);
        toast.error(data.ErrorMessage);
        break;
      case 422:
        console.error('Some Thing Went Wrong:', data);
        toast.error(data.ErrorMessage);
        break;
      case 500:
        console.error('Server Error:', data);
        toast.error(data.ErrorMessage);
        break;
      default:
        console.error('Unhandled Error:', data);
        toast.error("This didn't work.");
    }
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;
