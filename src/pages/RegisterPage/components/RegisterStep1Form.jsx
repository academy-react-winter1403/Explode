import React, { useState } from 'react';
import CustomForm from '../../../components/CustomForm';
import { UserRegisterSendVerifyMessage } from '../../../core/services/auth';
import toast from 'react-hot-toast';
import { step1Schema } from '../../../core/validation';

const RegisterStep1 = ({
  setCurrentStep,
  setUserEnterNumber,
  userEnterNumber,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const fields = [
    {
      name: 'phoneNumber',
      label: 'شماره همراه',
      placeholder: 'شماره همراه خود را وارد کنید',
    },
  ];
  const onSubmit = async (values) => {
    setIsLoading(true);
    const res = await UserRegisterSendVerifyMessage(values);
    if (res?.success) {
      setUserEnterNumber(values.phoneNumber);
      toast.success('شماره شما با موفقیت ثبت شد');
      setIsLoading(false);
      setCurrentStep((prevStep) => prevStep + 1);
    }
    setIsLoading(false);
  };
  return (
    <CustomForm
      title="خوش اومدی!"
      description="لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود"
      initialValues={{ phoneNumber: '' }}
      fields={fields}
      onSubmit={onSubmit}
      isLoading={isLoading}
      goHomeLink={true}
      showLoginLink={true}
      userEnterNumber={userEnterNumber}
      validationSchema={step1Schema}
      resetVerifyCode={false}
      buttonTitle="ارسال کد تایید"
      setCurrentStep={setCurrentStep}
    />
  );
};

export default RegisterStep1;
