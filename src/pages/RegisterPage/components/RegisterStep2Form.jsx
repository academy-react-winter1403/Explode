import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';

import {
  UserRegisterAcceptVerifyMessage,
  UserRegisterSendVerifyMessage,
} from '../../../core/services/auth';
import toast from 'react-hot-toast';
import { step2Schema } from '../../../core/validation';

const RegisterStep2 = ({ setCurrentStep, userEnterNumber }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fields = [
    {
      name: 'verifyCode',
      label: 'کد تایید',
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
      title="تایید کد ارسال شده"
      description="لطفا کد ارسال شده به شماره همراه {phone} را وارد کنید"
      phoneNumberString={userEnterNumber}
      initialValues={{ verifyCode: '' }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      goHomeLink={false}
      showLoginLink={false}
      validationSchema={step2Schema}
      resetVerifyCode={true}
      reSetVerifyCodeFunction={reSetVerifyCodeFunction}
      buttonTitle="تایید"
      backTo="/register"
      hideLoginOrRegisterLink={true}
      setCurrentStep={setCurrentStep}
    />
  );
};

export default RegisterStep2;
