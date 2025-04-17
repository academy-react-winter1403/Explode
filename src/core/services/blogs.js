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


export const getBlogsCategories = async () => {
  try {
    const response = await instance.get('/News/GetListNewsCategory');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getBlogById = async (blogId) => {
  try {
    const response = await instance.get(`/News/${blogId}`);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}