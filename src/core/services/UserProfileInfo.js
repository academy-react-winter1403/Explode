import instance from '../axiosInstance';

export const getUserProfileInfo = async () => {
  try {
    const response = await instance.get('/SharePanel/GetProfileInfo');
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
export const editUserProfileInfo = async (Obj) => {
  try {
    const response = await instance.put('/SharePanel/UpdateProfileInfo', Obj);
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const addUserProfileImage = async (formData) => {
  try {
    const response = await instance.post(
      '/SharePanel/AddProfileImage',
      formData,
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getUserAllCourses = async (urlParams) => {
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

export const deleteUserProfileInfo = async (formData) => {
  console.log('imageId', formData);
  try {
    const response = await instance.delete('/SharePanel/DeleteProfileImage', {
      data: formData,
    });
    return response;
  } catch (error) {
    console.error('Error deleting profile image:', error);
    throw new Error('حذف تصویر با خطا مواجه شد');
  }
};
export const postUserCurrentIImage = async (imageId) => {
  try {
    const response = await instance.post(
      '/SharePanel/SelectProfileImage',
      imageId,
    );
    return response;
  } catch (error) {
    console.error('Error deleting profile image:', error);
    throw new Error('حذف تصویر با خطا مواجه شد');
  }
};
