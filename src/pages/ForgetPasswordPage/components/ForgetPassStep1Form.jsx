import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';
import toast from 'react-hot-toast';
import { UserForgetPassSendLink } from '../../../core/services/auth';
import { emailSchema } from '../../../core/validation';

const ForgetPassStep1Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fullUrl = window.location.href;
  const fields = [
    {
      name: 'email',
      label: 'ایمیل',
      placeholder: 'ایمیل خود را وارد کنید',
    },
  ];
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UserForgetPassSendLink({
      ...values,
      baseUrl: fullUrl,
    });
    if (res?.success) {
      toast.success('لینک فراموشی برای شما ارسال شد');
      setIsLoading(false);
    } else {
      toast.error(res.message);
      setIsLoading(false);
    }
  };
  return (
    <CustomForm
      title="فراموشی رمزعبور!"
      description="اگر رمزعبور خود را فراموش کرده‌اید ایمیل خود را وارد کنید تا لینک صفحه تغییر رمزعبور برای شما ارسال شود"
      initialValues={{ email: '' }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      goHomeLink={true}
      showLoginLink={false}
      hideLoginOrRegisterLink={true}
      validationSchema={emailSchema}
      resetVerifyCode={false}
      buttonTitle="ارسال لینک"
    />
  );
};

export default ForgetPassStep1Form;
