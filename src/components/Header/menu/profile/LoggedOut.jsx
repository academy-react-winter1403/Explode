import React from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '/src/assets/img/profile.png'; // اضافه کردن تصویر پیشفرض

const LoggedOut = ({ arrowShow = true }) => {
  const { userProfile, isloading } = useSelector((state) => state.userProfile);

  // تصویر پروفایل یا تصویر پیشفرض
  const profileImage =
    userProfile?.currentPictureAddress || (defaultAvatar && !isloading);

  return (
    <div className="relative flex cursor-pointer items-center gap-2">
      {/* تصویر پروفایل با مدیریت خطا */}
      <div className="relative h-10 w-10">
        <img
          src={profileImage}
          alt="پروفایل کاربر"
          className="h-full w-full rounded-full object-cover"
          onError={(e) => {
            e.target.src = defaultAvatar;
          }}
        />
      </div>

      {/* آیکون arrow - فقط در صورت نیاز */}
      {arrowShow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
  );
};

export default LoggedOut;
