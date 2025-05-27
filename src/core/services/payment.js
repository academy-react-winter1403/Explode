import instance from '../axiosInstance';

export const addUserPayment = async (data) => {
  try {
    const response = await instance.post('/CoursePayment/StudentAddPeyment', {
      data,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
