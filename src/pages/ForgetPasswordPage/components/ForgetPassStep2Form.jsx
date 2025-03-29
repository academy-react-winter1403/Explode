import React, { useEffect, useState } from 'react';
import CustomForm from '../../../components/CustomForm';
import { verifyResetToken, ResetPassword } from '../../../core/services/auth';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { NewPasswordSetSchema } from '../../../core/validation';

const fields = [
  {
    name: 'newPassword',
    label: 'رمزعبور جدید',
    placeholder: 'رمزعبور جدید خود را وارد کنید',
    type: 'password', // اضافه کردن نوع فیلد
  },
  {
    name: 'newPasswordConfirm',
    label: 'تکرار رمزعبور جدید',
    placeholder: 'رمزعبور جدید خود را مجدداً وارد کنید',
    type: 'password', // اضافه کردن نوع فیلد
  },
];

const ForgetPassStep2Form = ({ setCurrentStep }) => {
  const { configValue: resetToken } = useParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tokenChecked, setTokenChecked] = useState(false);
  const [userId, setUserId] = useState(0);
  useEffect(() => {
    const validateToken = async () => {
      try {
        setIsLoading(true);
        const { id, success } = await verifyResetToken(resetToken);
        setUserId(id);
        setIsValid(success);
      } catch (error) {
        console.error('Token validation error:', error);
        setIsValid(false);
        toast.error('خطا در بررسی اعتبار لینک');
      } finally {
        setIsLoading(false);
        setTokenChecked(true);
      }
    };

    if (resetToken) {
      validateToken();
    } else {
      setIsValid(false);
      setTokenChecked(true);
    }
  }, [resetToken]);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const { success } = await ResetPassword({
        userId: userId,
        newPassword: values.newPassword,
        resetValue: resetToken,
      });

      if (success) {
        toast.success('رمز عبور شما با موفقیت تغییر یافت');
        navigate('/login'); // هدایت به صفحه لاگین پس از تغییر رمز
      }
    } catch (error) {
      console.error('Password reset error:', error);
      toast.error('خطا در ارتباط با سرور');
    } finally {
      setIsLoading(false);
    }
  };

  if (!tokenChecked) {
    return <div className="py-8 text-center">در حال بررسی لینک...</div>;
  }

  if (!isValid) {
    return (
      <div className="py-8 text-center text-red-500">
        لینک نامعتبر یا منقضی شده است. لطفاً درخواست لینک جدید دهید.
      </div>
    );
  }

  return (
    <CustomForm
      title="رمزعبور جدید!"
      description="رمزعبور جدید خود را وارد کنید"
      initialValues={{ newPassword: '', newPasswordConfirm: '' }}
      fields={fields}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      hideLoginOrRegisterLink={true}
      setCurrentStep={setCurrentStep}
      validationSchema={NewPasswordSetSchema}
      buttonTitle="تایید رمزعبور"
      goHomeLink={false}
      showLoginLink={false}
    />
  );
};

export default ForgetPassStep2Form;
