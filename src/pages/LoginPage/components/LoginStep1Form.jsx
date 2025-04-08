import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';
import { UserLogin } from '../../../core/services/auth';
import toast from 'react-hot-toast';
import { emailOrPhoneSchema } from '../../../core/validation';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../../core/redux/authSlice';
const LoginStep1Form = ({ setCurrentStep, setUserEnterNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const fields = [
    {
      name: 'phoneOrGmail',
      label: 'شماره همراه یا ایمیل',
      placeholder: 'شماره همراه یا ایمیل خود را وارد کنید',
    },
    {
      name: 'password',
      label: 'رمز عبور',
      placeholder: 'رمز عبور خود را وارد کنید',
      type: 'password',
    },
  ];
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UserLogin(values);
    if (res?.success) {
      toast.success('شما با موفقیت وارد شدید');
      setIsLoading(false);
      setUserEnterNumber(res.phoneNumber);
      console.log({
        userId: res.id,
        userPhoneNumber: res.phoneNumber,
        token: res.token,
      });
      dispatch(
        setCredentials({
          token: res.token,
        }),
      );
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      toast.error(res.message);
      setIsLoading(false);
    }
  };
  return (
    <CustomForm
      title="خوش برگشتی!"
      description="لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری را وارد کنید"
      initialValues={{ phoneOrGmail: '', password: '', rememberMe: false }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      goHomeLink={true}
      showLoginLink={false}
      validationSchema={emailOrPhoneSchema}
      resetVerifyCode={false}
      buttonTitle="ورود به حساب"
      rememberMe={true}
    />
  );
};

export default LoginStep1Form;
