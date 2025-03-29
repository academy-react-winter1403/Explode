import { Field } from 'formik';
import { Link } from 'react-router-dom';
import React from 'react';

const RememberMeSection = ({ rememberMe }) => {
  if (!rememberMe) return null;

  return (
    <div className="mt-4 flex items-center justify-between">
      <div className="flex items-center">
        <Field
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label
          htmlFor="rememberMe"
          className="mr-2 cursor-pointer text-sm font-medium text-gray-700"
        >
          مرا به خاطر بسپار
        </label>
      </div>
      <Link
        to="/forgot-password"
        className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
      >
        رمز عبور را فراموش کرده‌اید؟
      </Link>
    </div>
  );
};

export default RememberMeSection;
