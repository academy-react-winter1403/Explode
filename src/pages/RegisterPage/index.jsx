import { useState } from 'react';

import FormImageBanner from '../../components/FormImageBanner';
import { useNavigate } from 'react-router';
import RegisterStep1 from './components/RegisterStep1Form';
import RegisterStep2 from './components/RegisterStep2Form';
import RegisterStep3 from './components/RegisterStep3Form';
import FormStepNavigation from '../../components/formStepNavigation';

const RegisterPage = () => {
  const [userEnterNumber, setUserEnterNumber] = useState('');
  const navigate = useNavigate();
  const steps = [
    { id: 2, label: 'واردکردن اطلاعات شخصی' },
    { id: 1, label: 'تایید کد ارسال شده' },
    { id: 0, label: 'واردکردن شماره همراه' },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <RegisterStep1
            setCurrentStep={setCurrentStep}
            setUserEnterNumber={setUserEnterNumber}
          />
        );
      case 1:
        return (
          <RegisterStep2
            setCurrentStep={setCurrentStep}
            userEnterNumber={userEnterNumber}
          />
        );
      case 2:
        return (
          <RegisterStep3
            setCurrentStep={setCurrentStep}
            userEnterNumber={userEnterNumber}
          />
        );
      default:
        return navigate('/');
    }
  };

  return (
    <div className="mx-auto mt-8 flex h-[700px] w-[1440px] flex-row-reverse gap-8">
      <FormImageBanner />
      <div className="flex h-[100%] flex-col gap-16 pt-4">
        <FormStepNavigation
          steps={steps}
          currentStep={currentStep}
          key={currentStep}
        />
        {renderForm()}
      </div>
    </div>
  );
};

export default RegisterPage;
