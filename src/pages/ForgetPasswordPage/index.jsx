import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import FormImageBanner from '../../components/FormImageBanner';
import FormStepNavigation from '../../components/formStepNavigation';
import ForgetPassStep1Form from './components/ForgetPassStep1Form';
import ForgetPassStep2Form from './components/ForgetPassStep2Form';

const steps = [
  { id: 1, label: 'تایید کد ارسال شده دو مرحله‌ای' },
  { id: 0, label: 'واردکردن ایمیل' },
];

const ForgetPassPage = () => {
  const navigate = useNavigate();
  const { configValue } = useParams();
  const [currentStep, setCurrentStep] = useState(configValue ? 1 : 0);
  const renderFormStep = () => {
    const formSteps = {
      0: <ForgetPassStep1Form />,
      1: <ForgetPassStep2Form setCurrentStep={setCurrentStep} />,
    };

    return formSteps[currentStep] ?? navigate('/');
  };

  return (
    <div className="mx-auto mt-8 flex h-[700px] w-[1440px] flex-row-reverse gap-8">
      <FormImageBanner />
      <div className="flex h-full flex-col gap-16 pt-4">
        <FormStepNavigation steps={steps} currentStep={currentStep} />
        {renderFormStep()}
      </div>
    </div>
  );
};

export default ForgetPassPage;
