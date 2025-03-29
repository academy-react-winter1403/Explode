import { useState } from 'react';
import LoginStep1Form from './components/LoginStep1Form';
import LoginStep2Form from './components/LoginStep2Form';
import { useNavigate } from 'react-router';
import FormImageBanner from '../../components/FormImageBanner';
import FormStepNavigation from '../../components/formStepNavigation';

const LoginPage = () => {
  const navigate = useNavigate();
  const steps = [
    { id: 1, label: 'تایید کد ارسال شده دو مرحله‌ای' },
    { id: 0, label: 'واردکردن شماره همراه' },
  ];
  const [userEnterNumber, setUserEnterNumber] = useState('');
  const [currentStep, setCurrentStep] = useState(0);

  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <LoginStep1Form
            setCurrentStep={setCurrentStep}
            setUserEnterNumber={setUserEnterNumber}
          />
        );
      case 1:
        return (
          <LoginStep2Form
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
      <div className="flex h-[100%] flex-col gap-8 pt-4">
        <FormStepNavigation steps={steps} currentStep={currentStep} />
        {renderForm()}
      </div>
    </div>
  );
};

export default LoginPage;
