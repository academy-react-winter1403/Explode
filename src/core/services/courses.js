import instance from '../axiosInstance';

export const getTopCourses = async (urlParams) => {
  try {
    const response = await instance.get('/Home/GetCoursesTop', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCoursesWithPagination = async (urlParams) => {
  try {
    const response = await instance.get('/Home/GetCoursesWithPagination', {
      params: urlParams,
    });
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await instance.get('/Home/GetTechnologies');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getLevels = async () => {
  try {
    const response = await instance.get('/CourseLevel/GetAllCourseLevel');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
