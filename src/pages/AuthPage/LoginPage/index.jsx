import { useState } from 'react';
import LoginStep1Form from './components/LoginStep1Form';
import LoginStep2Form from './components/LoginStep2Form';
import { Link, useNavigate } from 'react-router';
import FormImageBanner from '../../../components/FormImageBanner';
import FormStepNavigation from '../../../components/formStepNavigation';
import Logo from '../../../components/shared/Logo';
import NavigationButton from '../../../components/CustomForm/NavigationButton';
import homeIcon from '../../../assets/icons/home-04.png';
import IconSet from '../../../components/shared/IconSet';
const LoginPage = () => {
  const navigate = useNavigate();
  const steps = [
    { id: 1, label: 'تایید کد ارسال شده دو مرحله‌ای' },
    { id: 0, label: 'واردکردن شماره همراه' },
  ];
  const [userEnterNumber, setUserEnterNumber] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [password, setPassword] = useState('');
  const renderForm = () => {
    switch (currentStep) {
      case 0:
        return (
          <LoginStep1Form
            setCurrentStep={setCurrentStep}
            setUserEnterNumber={setUserEnterNumber}
            setPassword={setPassword}
          />
        );
      case 1:
        return (
          <LoginStep2Form
            setCurrentStep={setCurrentStep}
            userEnterNumber={userEnterNumber}
            password={password}
          />
        );
      default:
        return navigate('/');
    }
  };

  return (
    <>
      {' '}
      <div className="flex items-center justify-between px-[16px] pt-[8px] sm:hidden">
        <div>
          {' '}
          <Logo />
        </div>
        <div>
          {' '}
          <Link to="/" className="nav-button">
            <IconSet imageAddress={homeIcon} size={24} />
            <span>صفحه اصلی</span>
          </Link>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-h-[800px] max-w-[1360px] flex-row-reverse gap-4">
        <FormImageBanner />
        <div className="mx-auto flex h-[100%] flex-col gap-2 pt-4">
          <FormStepNavigation steps={steps} currentStep={currentStep} />
          {renderForm()}
        </div>
      </div>
    </>
  );
};

export default LoginPage;
