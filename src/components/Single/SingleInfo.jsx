import React from 'react';
import { ValidURL } from './../../utils/ValidUrl';

const SingleInfo = ({ detail, blogSingle, courseSingle }) => {
  const imageAddress =
    courseSingle && ValidURL(detail.imageAddress)
      ? detail.imageAddress
      : blogSingle && ValidURL(detail.currentImageAddressTumb)
        ? detail.currentImageAddressTumb
        : false;
  return (
    <div className="justift-between flex items-start gap-[10px]">
      {/* Course Image */}
      <div className="flex h-[424px] w-[642px] items-center justify-center overflow-hidden">
        <img
          className="rounded-[32px]"
          src={
            imageAddress ? imageAddress : '/src/assets/img/not-set-image.jpg'
          }
          alt={detail.title}
        />
      </div>

      {/* Course Info */}
      <div className="w-[642px]">
        <h2 className="text-[32px] font-[700]">{detail.title}</h2>
      </div>
    </div>
  );
};

export default SingleInfo;
