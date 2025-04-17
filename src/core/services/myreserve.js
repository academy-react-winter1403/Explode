import instance from '../axiosInstance';
//userPannel
export const getMyReservesWithPagination = async ({ urlParams }) => {
  try {
    const response = await instance.get('/SharePanel/GetMyCoursesReserve', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
