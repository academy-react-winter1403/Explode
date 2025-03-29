import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';
import {
  UserRegisterAcceptVerifyMessage,
  UserRegisterSendVerifyMessage,
} from '../../../core/services/auth';
import toast from 'react-hot-toast';
import { step2Schema } from '../../../core/validation';

const LoginStep2Form = ({ setCurrentStep, userEnterNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fields = [
    {
      name: 'verifyCode',
      label: 'کد دو مرحله ای',
      placeholder: 'کد تایید خود را وارد کنید',
    },
  ];
  const reSetVerifyCodeFunction = async () => {
    const res = await UserRegisterSendVerifyMessage({
      phoneNumber: userEnterNumber,
    });
    console.log(res);
  };
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UserRegisterAcceptVerifyMessage({
      ...values,
      phoneNumber: userEnterNumber,
    });
    if (res?.success) {
      toast.success('کد تایید شما با موفقیت ثبت شد');
      setIsLoading(false);
      setCurrentStep((prevStep) => prevStep + 1);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <CustomForm
      title="تایید کد دو مرحله‌ای!"
      description="کد دومرحله‌ای به شماره همراه شما ارسال شد لطفا کد را وارد کنید"
      initialValues={{ verifyCode: '' }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      setCurrentStep={setCurrentStep}
      goHomeLink={false}
      hideLoginOrRegisterLink={true}
      showLoginLink={false}
      validationSchema={step2Schema}
      resetVerifyCode={true}
      reSetVerifyCodeFunction={reSetVerifyCodeFunction}
      buttonTitle="ورود به حساب"
    />
  );
};

export default LoginStep2Form;
