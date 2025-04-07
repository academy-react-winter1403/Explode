import { useState } from 'react';
import FormStepNavigation from './components/formStepNavigation';
import Button from '../../components/shared/Button';
import { Link } from 'react-router-dom';
import IconSet from '../../components/shared/iconSet';
import CustomInputField from '../../components/shared/CustomInputField';
import homeIcon from '../../assets/icons/home-04.png';

const RegisterPage = () => {
  const steps = [
    { id: 2, label: 'واردکردن اطلاعات شخصی' },
    { id: 1, label: 'تایید کد ارسال شده' },
    { id: 0, label: 'واردکردن شماره همراه' },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const onclickHandler = () => {
    console.log('click');
    setCurrentStep(1);
  };
  return (
    <div className="mx-auto flex h-[850px] w-[1440px] flex-row-reverse gap-8">
      <div className="bg-secondary h-[100%] w-[748px] rounded-[32px]"></div>
      <div className="flex h-[100%] flex-col gap-16 pt-4">
        <FormStepNavigation steps={steps} currentStep={currentStep} />
        <div className="flex h-[100%] flex-col gap-8">
          <div className="flex flex-col gap-2">
            {' '}
            <div className="text-3xl font-semibold text-[#2F2F2F]">
              خوش اومدی!
            </div>
            <p className="w-[360px] text-[16px] font-medium text-[#707070]">
              لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود
            </p>
          </div>
          <div className="flex w-[398px] flex-col gap-[24px]">
            <CustomInputField />
            <Button
              className={'mt-3 w-[397px]'}
              onClick={onclickHandler}
              disabled={false}
              isLoading={false}
            >
              ارسال کد تایید
            </Button>
            <div className="flex justify-center gap-1">
              <span className="font-semibold">حساب کاربری دارید؟</span>

              <span className="text-primary cursor-pointer font-semibold">
                ورود به حساب کاربری
              </span>
            </div>
            <div className="text-primary mx-auto mt-4 h-[40px] w-[141px] cursor-pointer rounded-[34px] border border-[#DCDCDC] text-center leading-8 font-medium">
              <IconSet imageAddress={homeIcon} size={24} />
              صفحه اصلی
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterPage;
