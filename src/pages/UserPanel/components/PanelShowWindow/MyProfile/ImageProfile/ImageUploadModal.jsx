import { useState, useRef } from 'react';
import { addUserProfileImage } from '../../../../../../core/services/UserProfileInfo';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const ImageUploadModal = ({ isOpen, onClose, onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const { userProfile } = useSelector((state) => state.userProfile);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // اعتبارسنجی نوع فایل و حجم
      if (!file.type.match('image.*')) {
        setUploadError('فقط فایل‌های تصویری مجاز هستند');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        // 5MB
        setUploadError('حجم فایل نباید بیشتر از ۵ مگابایت باشد');
        return;
      }

      setSelectedImage(file);
      onImageSelect(file);
      setUploadError(null);

      // ایجاد پیش‌نمایش
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async () => {
    if (!selectedImage) return;

    setIsUploading(true);
    setUploadError(null);

    const formData = new FormData();

    // 1. اضافه کردن تصویر انتخاب شده
    formData.append('formFile', selectedImage);

    // 2. اضافه کردن تمام فیلدهای userProfile
    for (const key in userProfile) {
      if (userProfile[key] !== null && userProfile[key] !== undefined) {
        // برای فیلدهای فایل (اگر وجود دارد)
        if (
          userProfile[key] instanceof File ||
          userProfile[key] instanceof Blob
        ) {
          formData.append(key, userProfile[key]);
        } else {
          // برای فیلدهای معمولی (تبدیل به رشته برای اطمینان)
          formData.append(key, String(userProfile[key]));
        }
      }
    }

    try {
      const res = await addUserProfileImage(formData);
      if (res.success) {
        toast.success('عملیات آپلود عکس با موفقیت انجام شد');
        setIsUploading(false);
        onClose();
      } else {
        throw new Error(res.message || 'خطا در آپلود تصویر');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadError(error.message);
      toast.error('خطا در آپلود تصویر');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-2xl bg-white/30 shadow-2xl backdrop-blur-md transition-all duration-300">
        {/* Header */}
        <div className="bg-primary flex items-center justify-between rounded-t-2xl p-4 shadow-md">
          <h2 className="text-xl font-bold text-white">آپلود تصویر پروفایل</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 focus:outline-none"
            disabled={isUploading}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Preview"
                className="h-64 w-64 rounded-lg border-2 border-gray-300 object-cover"
              />
            ) : (
              <div className="flex h-64 w-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300">
                <span className="text-gray-500">پیش‌نمایش تصویر</span>
              </div>
            )}

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />

            <button
              onClick={handleUploadClick}
              className="rounded bg-blue-500 px-4 py-2 font-[600] text-white transition hover:bg-blue-600"
              disabled={isUploading}
            >
              انتخاب تصویر
            </button>

            {uploadError && (
              <div className="text-sm text-red-500">{uploadError}</div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-3 rounded-b-lg bg-gray-100 p-4">
          <button
            onClick={onClose}
            className="rounded bg-gray-300 px-4 py-2 font-[600] text-gray-700 transition hover:bg-gray-400"
            disabled={isUploading}
          >
            انصراف
          </button>
          <button
            onClick={handleSubmit}
            disabled={!selectedImage || isUploading}
            className={`rounded px-4 py-2 font-[600] text-white transition ${
              selectedImage && !isUploading
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'cursor-not-allowed bg-gray-400'
            }`}
          >
            {isUploading ? 'در حال آپلود...' : 'تایید و آپلود'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
