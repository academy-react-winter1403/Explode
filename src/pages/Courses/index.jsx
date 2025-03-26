import React from 'react';

import CourseFilter from './components/CourseFilter';
import CoursesComponent from './components/CoursesComponent';

const Courses = () => {
  return (
    <div className="relative mr-0 bg-white p-6 text-center font-sans text-black sm:mr-6 sm:p-8 md:mr-10 md:p-10 lg:mr-14 lg:p-12 xl:p-16 dark:bg-[#041124] dark:text-white">
      <h1 className="mb-2 text-2xl font-bold sm:mb-3 sm:text-3xl md:mb-4 md:text-4xl lg:mb-12 lg:text-5xl">
        شروع ماجراجویی جدید
      </h1>
      <p className="text-sm leading-relaxed break-words text-gray-500 sm:text-base md:text-lg lg:text-xl dark:text-white">
        یک شروع قوی برای یادگیری یک مسئله <br />
        جدید میتونه تو پیشترفت کمک کنه
      </p>
      <div className="flex">
        <div className="w-1/4 border-2-400">
          <CourseFilter />
        </div>
        <div className="w-3/4 border-2-400">
          <CoursesComponent />
        </div>
      </div>
    </div>
  );
};
export default Courses;
