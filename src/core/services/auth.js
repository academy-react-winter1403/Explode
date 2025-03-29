import instance from '../axiosInstance';

export const UserRegisterSendVerifyMessage = async (phoneNumber) => {
  try {
    const response = await instance.post(
      '/Sign/SendVerifyMessage',
      phoneNumber,
    );
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const UserRegisterAcceptVerifyMessage = async (obj) => {
  try {
    const response = await instance.post('/Sign/VerifyMessage', obj);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const UserRegisterLogin = async (obj) => {
  try {
    const response = await instance.post('/Sign/Register', obj);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
export const UserLogin = async (obj) => {
  try {
    const response = await instance.post('/Sign/Login', obj);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const UserForgetPassSendLink = async (obj) => {
  try {
    const response = await instance.post('/Sign/ForgetPassword', obj);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const verifyResetToken = async (id) => {
  try {
    const response = await instance.get('/Sign/Reset/' + id);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};

export const ResetPassword = async (obj) => {
  try {
    const response = await instance.post('/Sign/Reset', obj);
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
};
