import React from 'react'
import CoursList from './components/CoursList';

const Courses = () => {
 return (
    <div className="bg-white text-black dark:text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mr-0 sm:mr-6 md:mr-10 lg:mr-14 text-center font-sans relative dark:bg-[#041124]">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-12">
        شروع ماجراجویی جدید
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed break-words dark:text-white">
        یک شروع قوی برای یادگیری یک مسئله <br />
        جدید میتونه تو پیشترفت کمک کنه
         </p>
         <CoursList/>
          </div>
  
  );
};
export default Courses