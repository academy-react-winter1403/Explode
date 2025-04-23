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
