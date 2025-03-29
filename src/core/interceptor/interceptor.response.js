// import instance from '../axiosInstance';
// import { toast } from 'react-hot-toast';
// const onSuccessResponse = (response) => {
//   console.log('response');
//   return response.data;
// };

// const onErrorResponse = (error) => {
//   if (error) {
//     const { StatusCode, ErrorMessage } = error.response;
//     switch (status) {
//       case 400:
//         console.error('Bad Request:', ErrorMessage);
//         toast.error("This didn't work.");
//         break;
//       case 401:
//         console.error('Unauthorized:', ErrorMessage);
//         toast.error("This didn't work.");
//         break;
//       case 404:
//         console.error('Not Found:', ErrorMessage);
//         toast.error("This didn't work.");
//         break;
//       case 500:
//         console.error('Server Error:', ErrorMessage);
//         toast.error("This didn't work.");
//         break;
//       default:
//         console.error('Unhandled Error:', ErrorMessage);
//         toast.error("This didn't work.");
//     }
//   }

//   return Promise.reject(error);
// };

// instance.interceptors.response.use(onSuccessResponse, onErrorResponse);
