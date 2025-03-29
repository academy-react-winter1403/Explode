import React from 'react';
import { formatTime } from '../../utils/TimeFormatter';

const ResendCodeButton = ({
  resetVerifyCode,
  isTimerActive,
  counter,
  handleResendCode,
  className = '',
}) => {
  if (!resetVerifyCode) return null;

  return isTimerActive ? (
    <span
      className={`text-primary w-[190px] cursor-not-allowed rounded-[40px] bg-[#F6F6F6] px-4 py-2 text-[14px] font-semibold ${className}`}
      aria-disabled="true"
    >
      ارسال مجدد کد تایید {formatTime(counter)}
    </span>
  ) : (
    <button
      type="button"
      onClick={handleResendCode}
      className={`text-primary w-[190px] cursor-pointer text-right text-[14px] font-semibold ${className}`}
      aria-label="ارسال مجدد کد تایید"
    >
      ارسال مجدد کد تایید
    </button>
  );
};

export default ResendCodeButton;
