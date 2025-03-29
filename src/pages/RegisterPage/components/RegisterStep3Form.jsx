import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';

import { UserRegisterLogin } from '../../../core/services/auth';
import toast from 'react-hot-toast';
import { step3Schema } from '../../../core/validation';

const RegisterStep3 = ({ setCurrentStep, userEnterNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fields = [
    { name: 'gmail', label: 'ایمیل', placeholder: 'ایمیل خود را وارد کنید' },
    {
      name: 'password',
      label: 'رمز عبور',
      placeholder: 'رمز عبور خود را وارد کنید',
      type: 'password',
    },
  ];
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UserRegisterLogin({
      ...values,
      phoneNumber: userEnterNumber,
    });
    if (res?.success) {
      toast.success('شما با موفقیت وارد شدید');
      setIsLoading(false);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <CustomForm
      title="وارد کردن اطلاعات شخصی"
      description="لطفا اطلاعات اولیه خواسته شده را وارد کنید"
      initialValues={{ gmail: '', password: '' }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      goHomeLink={false}
      showLoginLink={false}
      validationSchema={step3Schema}
      resetVerifyCode={false}
      buttonTitle="تایید"
    />
  );
};

export default RegisterStep3;
