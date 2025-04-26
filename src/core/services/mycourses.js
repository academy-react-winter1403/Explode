import instance from '../axiosInstance';
//userPannel
export const getMyCoursesWithPagination = async (urlParams) => {
  try {
    const response = await instance.get('/SharePanel/GetMyCourses', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getMyFavoriteCourses = async (urlParams) => {
  try {
    const response = await instance.get('/SharePanel/GetMyFavoriteCourses', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
