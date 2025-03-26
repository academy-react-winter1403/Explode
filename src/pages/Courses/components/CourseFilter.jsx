import React, { useState } from 'react'

const CourseFilter = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
   const [level, setLevel] = useState('');
   const [instructor, setInstructor] = useState('');
   const [priceRange, setPriceRange] = useState([10000, 1000000]);
   const [dateRange, setDateRange] = useState('');
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <h2 className="mb-4 text-lg font-semibold">فیلتر</h2>

      {/* جستجو */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="دوره مورد نظر را جستجو کنید..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border p-2"
        />
      </div>

      {/* دسته بندی */}
      <div className="mb-4">
        <select
          className="w-full rounded-md border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">دسته مورد نظر را انتخاب کنید</option>
          <option value="programming">برنامه‌نویسی</option>
          <option value="design">طراحی</option>
        </select>
      </div>

      {/* سطح آموزشی */}
      <div className="mb-4">
        <select
          className="w-full rounded-md border p-2"
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">سطح مورد نظر را انتخاب کنید</option>
          <option value="beginner">مبتدی</option>
          <option value="intermediate">متوسط</option>
          <option value="advanced">پیشرفته</option>
        </select>
      </div>

      {/* اساتید */}
      <div className="mb-4">
        <select
          className="w-full rounded-md border p-2"
          value={instructor}
          onChange={(e) => setInstructor(e.target.value)}
        >
          <option value="">استاد مورد نظر را انتخاب کنید</option>
          <option value="teacher1">استاد ۱</option>
          <option value="teacher2">استاد ۲</option>
        </select>
      </div>

      {/* قیمت */}
      <div className="mb-4">
        <label className="mb-2 block">
          قیمت: {priceRange[0]} تا {priceRange[1]}
        </label>
        <input
          type="range"
          min="10000"
          max="1000000"
          value={priceRange[0]}
          onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
          className="w-full"
        />
        <input
          type="range"
          min="10000"
          max="1000000"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
          className="w-full"
        />
      </div>

      {/* تاریخ برگزاری */}
      <div className="mb-4">
        <input
          type="date"
          value={dateRange}
          onChange={(e) => setDateRange(e.target.value)}
          className="w-full rounded-md border p-2"
        />
      </div>
    </div>
  );
};

export default CourseFilter;