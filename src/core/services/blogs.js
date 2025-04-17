import instance from '../axiosInstance';

export const getBlogsList = async (urlParams) => {
  try {
    const response = await instance.get('/News', { params: urlParams });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getMyFavoriteBlogs = async (urlParams) => {
  try {
    const response = await instance.get('/SharePanel/GetMyFavoriteNews', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
