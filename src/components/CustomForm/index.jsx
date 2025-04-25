import React, { useEffect } from 'react';
import Button from '../shared/Button';
import { Link } from 'react-router-dom';
import IconSet from '../shared/IconSet';
import CustomInputField from '../shared/CustomInputField';
import { Field, Form, Formik } from 'formik';
import { useTimer } from '../../utils/Timer';
import FormHeader from './FormHeader';
import RememberMeSection from './RememberMeSection ';
import ResendCodeButton from './ResetCodeButton';
import AuthToggleLink from './AuthToggleLink ';
import NavigationButton from './NavigationButton';

const CustomForm = ({
  title,
  phoneNumberString = '',
  description,
  fields,
  onSubmit,
  goHomeLink,
  showLoginLink,
  initialValues,
  isLoading,
  validationSchema,
  resetVerifyCode,
  buttonTitle,
  setCurrentStep,
  reSetVerifyCodeFunction = () => console.log('no func'),
  hideNavigation = false,
  hideLoginOrRegisterLink = false,
  rememberMe = false,
}) => {
  const { counter, isTimerActive, startTimer } = useTimer(60);
  useEffect(() => {
    startTimer();
  }, []);

  const handleResendCode = () => {
    if (!isTimerActive) {
      startTimer();
      reSetVerifyCodeFunction();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isValid }) => (
        <Form>
          <div className="mx-[16px] flex h-full flex-col gap-6 md:gap-8">
            <FormHeader
              title={title}
              description={description}
              phoneNumberString={phoneNumberString}
            />
            <div className="flex w-full flex-col gap-1 sm:gap-4 md:w-[398px]">
              {fields.map((field, index) => (
                <CustomInputField
                  key={index}
                  name={field.name}
                  label={field.label}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                />
              ))}
              <RememberMeSection rememberMe={rememberMe} />
              <ResendCodeButton
                resetVerifyCode={resetVerifyCode}
                isTimerActive={isTimerActive}
                counter={counter}
                handleResendCode={handleResendCode}
              />
              <Button
                className={'mt-2 w-full sm:mt-3 sm:w-[397px]'}
                type="submit"
                disabled={!isValid}
                isLoading={isLoading}
              >
                {buttonTitle}
              </Button>
              <AuthToggleLink
                showLoginLink={showLoginLink}
                hideLoginOrRegisterLink={hideLoginOrRegisterLink}
              />
              <NavigationButton
                setCurrentStep={setCurrentStep}
                hideNavigation={hideNavigation}
                goHomeLink={goHomeLink}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
