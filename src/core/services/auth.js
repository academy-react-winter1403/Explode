import instance from '../axiosInstance';

export const UserRegisterSendVerifyMessage = () => {
  instance.post('/Sign/SendVerifyMessage');
};
