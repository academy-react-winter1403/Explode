import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addIcon from '../../../../../../assets/icons/addphoto.png';
import ImageUploadModal from './ImageUploadModal';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import {
  deleteUserProfileInfo,
  postUserCurrentIImage,
} from '../../../../../../core/services/UserProfileInfo';
import toast from 'react-hot-toast';
import { updateProfilePicture } from '../../../../../../redux/userProfileSlice';
const Photos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [showOptionsIndex, setShowOptionsIndex] = useState(null);
  const { userProfile, isLoading } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userProfile?.userImage) {
      console.log(userProfile);
      setPhotos(
        userProfile.userImage.map((img) => ({
          id: img.id,
          url: img.puctureAddress,
          alt: img.pictureName,
        })),
      );
    }
  }, [userProfile]);

  const handleImageSelect = (newImage) => {
    const newPhoto = {
      id: Date.now(), // ID موقت تا زمانی که از سرور پاسخ بگیریم
      url: URL.createObjectURL(newImage),
      alt: newImage.name,
    };

    setPhotos((prev) => [...prev, newPhoto]);
  };

  const handleactiveImage = async (photo) => {
    console.log(photo);
    const formData = new FormData();
    formData.append('ImageId', photo.id);

    const res = await postUserCurrentIImage(formData);

    if (res.success) {
      // آپدیت state با عکس جدید
      const updatedPhotos = photos.map((photo) => ({
        ...photo,
        isMain: photo.id === photo.id ? true : false,
      }));
      dispatch(updateProfilePicture(photo.url));

      setPhotos(updatedPhotos);
      toast.success('عکس پروفایل با موفقیت تغییر کرد');
    }

    setShowOptionsIndex(null);
  };

  const handleDeletePhoto = async (photoId) => {
    const formData = new FormData();
    formData.append('DeleteEntityId', photoId);

    const res = await deleteUserProfileInfo(formData);

    if (res.success) {
      setPhotos((prev) => prev.filter((photo) => photo.id !== photoId));
      toast.success('عکس با موفقیت حذف شد');
    }
    setShowOptionsIndex(null);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <Skeleton width={179} height={48} />
        <div className="flex flex-wrap gap-6">
          {[1, 2].map((_, index) => (
            <Skeleton
              key={index}
              width={189}
              height={189}
              className="rounded-[16px]"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-nowrap gap-4">
      {/* دکمه افزودن عکس */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-primary text-secondry flex h-[48px] w-[179px] cursor-pointer items-center justify-center gap-2 rounded-[40px] font-[600]"
      >
        <img src={addIcon} alt="افزودن عکس" width={24} height={24} />
        اضافه کردن عکس
      </button>

      {/* مودال آپلود عکس */}
      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onImageSelect={handleImageSelect}
      />

      {/* گالری عکس‌ها */}
      <div className="flex max-h-[630px] flex-row flex-wrap gap-6 overflow-y-scroll">
        {photos.length > 0 ? (
          photos.map((photo, index) => (
            <div key={photo.id} className="relative">
              <img
                src={photo.url}
                alt={photo.alt || `عکس پروفایل ${index + 1}`}
                className="h-[189px] w-[189px] rounded-[16px] object-cover"
                onError={(e) => {
                  e.target.src = 'مسیر-عکس-پیشفرض'; // اگر عکس لود نشد
                }}
              />
              {userProfile?.currentPictureAddress === photo.url && (
                <span className="absolute bottom-2 left-2 rounded-full bg-blue-500 px-2 py-1 text-xs font-semibold text-white">
                  تصویر پروفایل اصلی
                </span>
              )}

              {/* منوی اکشن‌ها */}
              <div
                className="absolute top-2 right-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-black/50"
                onClick={() =>
                  setShowOptionsIndex(showOptionsIndex === index ? null : index)
                }
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>

                {showOptionsIndex === index && (
                  <div className="absolute top-10 right-0 z-10 w-32 rounded-md bg-white shadow-lg">
                    <button
                      onClick={() => handleactiveImage(photo)}
                      className="block w-full px-4 py-2 text-right text-sm hover:bg-gray-100"
                    >
                      انتخاب عکس
                    </button>
                    <button
                      onClick={() => handleDeletePhoto(photo.id)}
                      className="block w-full px-4 py-2 text-right text-sm text-red-600 hover:bg-gray-100"
                    >
                      حذف عکس
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">هیچ عکسی وجود ندارد</p>
        )}
      </div>
    </div>
  );
};

export default Photos;
