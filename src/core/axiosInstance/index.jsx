import axios from 'axios';
import toast from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://classapi.sepehracademy.ir/api',
  headers: { 'Content-Type': 'application/json' },
});

const onSuccess = (response) => {
  return response.data;
};

const onError = (error) => {
  if (error) {
    const { status, data } = error.response;
    console.log(error.response);
    console.log(error.response.data.ErrorMessage[0]);
    switch (status) {
      case 400:
        console.error('Bad Request:', data);
        toast.error(data.ErrorMessage);
        break;
      case 401:
        console.error('Unauthorized:', data);
        toast.error(data.ErrorMessage);
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
