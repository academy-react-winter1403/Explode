import IconSet from '../../../../../../components/shared/IconSet';
import addIcon from '../../../../../../assets/icons/addphoto.png';
import lady from '../../../../../../assets/img/Lady.png';
import { useState } from 'react';
import ImageUploadModal from './ImageUploadModal';

const Photos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photos, setPhotos] = useState([lady, lady]);
  const [showOptions, setShowOptions] = useState(false);
  const handleImageSelect = (newImage) => {
    setPhotos([...photos, newImage]);
  };
  return (
    <div className="flex flex-col flex-nowrap gap-4">
      {/* دکمه افزودن عکس */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-primary Center text-secondry flex h-[48px] w-[179px] cursor-pointer gap-2 rounded-[40px] font-[600]"
      >
        <IconSet firstSize={24} secondSize={24} imageAddress={addIcon} />
        اضافه کردن عکس
      </div>

      {/* مودال آپلود عکس */}
      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onImageSelect={handleImageSelect}
      />

      {/* گالری عکس‌ها */}
      <div className="flex flex-row flex-wrap gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="relative flex">
            <IconSet
              firstSize={189}
              secondSize={189}
              imageAddress={photo}
              className="rounded-[16px]"
            />
            <div
              className="absolute top-2 right-2 flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full"
              onClick={() => setShowOptions(true)}
            >
              {showOptions && (
                <div className="bg-red absolute h-[40px] w-[40px]"></div>
              )}
              <div className="bg-red absolute h-[40px] w-[40px]"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
