import instance from '../axiosInstance';

export const getUserCountReports = async () => {
  try {
    const response = await instance.get('/Home/LandingReport');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const getTeacherCountReports = async () => {
  try {
    const response = await instance.get('/Home/GetTeachers');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
