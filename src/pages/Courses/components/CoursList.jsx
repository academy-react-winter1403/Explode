import React, { useState } from 'react'


const CoursList = () => {
    const [activeList, setactiveList] = useState();
    function handleCoursListClick(sort) {
        setactiveList(sort)
    }
    return (
      <div className="mr-8 mb-6 flex flex-col items-center">
        <div className="mb-4 hidden justify-start space-x-4 md:flex">
          <p className="p-2 text-lg font-bold ">
            ترتیب
          </p>
          <button
            onClick={() => handleCoursListClick('جدیدترین')}
            className={`h-10 rounded-full border border-transparent px-4 py-2 ${
              activeList === 'جدیدترین'
                ? 'text-white'
                : 'border-gray-600 bg-white text-gray-800 hover:border-red-500 hover:text-red-500'
            }`}
          >
            جدیدترین
          </button>
          <button
            onClick={() => handleCoursListClick('محبوب‌ترین')}
            className={`h-10 rounded-full border border-transparent px-4 py-2 ${
              activeList === 'محبوب‌ترین'
                ? 'bg-red-500 text-white'
                : 'border-gray-600 bg-white text-gray-800 hover:border-red-500 hover:text-red-500'
            }`}
          >
            محبوب‌ترین
          </button>
          <button
            onClick={() => handleCoursListClick('گران‌ترین')}
            className={`h-10 rounded-full border border-transparent px-4 py-2 ${
              activeList === 'گران‌ترین'
                ? 'bg-red-500 text-white'
                : 'border-gray-600 bg-white text-gray-800 hover:border-red-500 hover:text-red-500'
            }`}
          >
            گران‌ترین
          </button>
          <button
            onClick={() => handleCoursListClick('ارزان‌ترین')}
            className={`h-10 rounded-full border border-transparent px-4 py-2 ${
              activeList === 'ارزان‌ترین'
                ? 'bg-red-500 text-white'
                : 'border-gray-600 bg-white text-gray-800 hover:border-red-500 hover:text-red-500'
            }`}
          >
            ارزان‌ترین
          </button>
        </div>
      </div>
    );
}

export default CoursList