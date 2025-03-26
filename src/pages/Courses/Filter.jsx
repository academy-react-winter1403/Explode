import { Checkbox, Collapse } from 'antd';
import { useEffect, useState } from 'react';
import { AccordionTab } from './CoursesComponents/FilterAccordion/Accordion';
import { PricePicker } from './CoursesComponents/FilterPricePicker/PricePicker';
import { GetCoursesCategory } from '../../core/services/api/Courses/CoursesCategory/GetCoursesCategory';
import { GetCoursesLevels } from '../../core/services/api/Courses/CoursesCategory/GetCoursesLevels';
import { GetCoursesTeachers } from '../../core/services/api/Courses/CoursesCategory/GetCoursesTeachers';

const Filter = ({
  categorySelResult,
  searchTerm,
  setSearchTerm,
  selectedOptionId,
  setSelectedOptionId,
  levelsOptionId,
  setLevelsOptionId,
  teachersOptionId,
  setTeacherOptionId,
  priceRange,
  setPriceRange,
}) => {
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [teacher, setTeacher] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLevelDropdownOpen, setIsLevelDropdownOpen] = useState(false);
  const [isTeacherDropdownOpen, setIsTeacherDropdownOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [levels, setLevels] = useState([]);
  const [teachers, setTeachers] = useState([]);

  // console.log(searchTerm);
  const { Panel } = Collapse;

  const handleSearch = () => {
    const filters = {
      searchTerm,
      category,
      level,
      teacher,
    };
    // console.log("Searching with filters:", filters);
    setIsModalOpen(false);
  };

  const toggleModal = () => {
    if (isModalOpen) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsModalOpen(false);
      }, 300);
    } else {
      setIsModalOpen(true);
      setTimeout(() => {
        setIsAnimating(true);
      }, 10);
    }
  };

  const handleCategorySelect = (selectedCategory) => {
    setCategory(selectedCategory);
    setIsCategoryDropdownOpen(false);
  };

  const handleLevelSelect = (selectedLevel) => {
    setLevel(selectedLevel);
    setIsLevelDropdownOpen(false);
  };

  const handleTeacherSelect = (selectedTeacher) => {
    setTeacher(selectedTeacher);
    setIsTeacherDropdownOpen(false);
  };

  const GetCategory = async () => {
    try {
      const res = await GetCoursesCategory();
      // console.log(res);
      setCategories(res);
    } catch (error) {
      // console.log(error);
    }
  };

  const GetLevel = async () => {
    try {
      const res = await GetCoursesLevels();
      // console.log(res);
      setLevels(res);
    } catch (error) {
      // console.log(error);
    }
  };

  const GetTeacher = async () => {
    try {
      const res = await GetCoursesTeachers();
      // console.log(res);
      setTeachers(res);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    GetCategory();
    GetLevel();
    GetTeacher();
  }, []);

  const catOptions = [
    'طراحی سایت',
    'برنامه‌نویسی',
    'طراحی سایت',
    'برنامه‌نویسی',
  ];

  const handleSelectionChange = (optionId) => {
    // console.log(optionId);
    setSelectedOptionId((prev) => {
      const selectedId = prev.includes(optionId)
        ? prev.filter((item) => item !== optionId)
        : [...prev, optionId];

      return selectedId;
    });
    // console.log("Selected options:", selectedOptionId);
  };
  // categorySelResult(selectedOptionId);

  const handleLevelChange = (optionId) => {
    // console.log(optionId);
    setLevelsOptionId(optionId);
    // console.log("Selected options:", selectedOptionId);
    // Insert API call logic here
  };

  const handleTeacherChange = (optionId) => {
    // console.log(optionId);
    // setTeacherOptionId((prev) => {
    //   const selectedId = prev.includes(optionId)
    //     ? prev.filter((item) => item !== optionId)
    //     : [...prev, optionId];

    //   return selectedId;
    // });
    setTeacherOptionId(optionId);
    // console.log("Selected options:", selectedOptionId);
    // Insert API call logic here
  };

  return (
    <div className="absolute right-12 flex w-[128px] lg:relative lg:right-0 lg:w-[20rem]">
      {/* Button to show filters only on small screens */}
      <div className="mb-4 lg:hidden">
        <button
          onClick={toggleModal}
          className="flex gap-2 rounded-full bg-black px-4 py-3 text-white"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.85746 10.5061C4.36901 8.6456 2.59564 6.59915 1.62734 5.44867C1.3276 5.09253 1.22938 4.8319 1.17033 4.3728C0.968111 2.8008 0.867011 2.0148 1.32795 1.5074C1.7889 1 2.60404 1 4.23433 1H15.7657C17.396 1 18.2111 1 18.672 1.5074C19.133 2.0148 19.0319 2.8008 18.8297 4.37281C18.7706 4.83191 18.6724 5.09254 18.3726 5.44867C17.403 6.60062 15.6261 8.6507 13.1326 10.5135C12.907 10.6821 12.7583 10.9567 12.7307 11.2614C12.4837 13.992 12.2559 15.4876 12.1141 16.2442C11.8853 17.4657 10.1532 18.2006 9.226 18.8563C8.6741 19.2466 8.0043 18.782 7.93278 18.1778C7.79643 17.0261 7.53961 14.6864 7.25927 11.2614C7.23409 10.9539 7.08486 10.6761 6.85746 10.5061Z"
              stroke="#FCFCFC"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          فیلتر
        </button>
      </div>

      {/* Filter form hidden on small screens */}
      <div className="mt-20 hidden h-fit w-72 rounded-3xl border-2 bg-white p-4 text-right lg:block dark:bg-[#041124]">
        <h2 className="mb-4 text-xl font-semibold dark:text-white">فیلتر</h2>

        {/* Search */}
        <div className="flex flex-row gap-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="#2F2F2F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="#2F2F2F"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
          <label className="mb-2 block text-gray-700 dark:text-white">
            جستجو{' '}
          </label>
        </div>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full rounded-lg bg-slate-200 py-2 pr-4 pl-12 text-right text-sm text-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="فیلتر مورد نظر را جستجو کنید..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute left-0 h-full w-10 rounded-xl bg-[#3772FF] text-blue-600"
            onClick={handleSearch}
          >
            <div className="flex items-center justify-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="#FEFDFF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="#FEFDFF"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Category Dropdown */}
        <div className="relative mb-4">
          <div className="flex flex-row gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.1075 5.57624C11.3692 6.02707 11.5 6.25248 11.5 6.5C11.5 6.74752 11.3692 6.97293 11.1075 7.42376L9.85804 9.57624C9.59636 10.0271 9.46551 10.2525 9.25 10.3762C9.03449 10.5 8.7728 10.5 8.24943 10.5H5.75057C5.2272 10.5 4.96551 10.5 4.75 10.3762C4.53449 10.2525 4.40364 10.0271 4.14196 9.57624L2.89253 7.42376C2.63084 6.97293 2.5 6.74752 2.5 6.5C2.5 6.25248 2.63084 6.02707 2.89253 5.57624L4.14196 3.42376C4.40364 2.97293 4.53449 2.74752 4.75 2.62376C4.96551 2.5 5.2272 2.5 5.75057 2.5H8.24943C8.7728 2.5 9.03449 2.5 9.25 2.62376C9.46551 2.74752 9.59636 2.97293 9.85804 3.42376L11.1075 5.57624Z"
                stroke="#2F2F2F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5H18.2494C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z"
                stroke="#2F2F2F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5H8.24943C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z"
                stroke="#2F2F2F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="mb-2 block text-gray-700 dark:text-white">
              دسته بندی
            </label>
          </div>
          <AccordionTab
            options={categories}
            onSelectionChange={(optionId) => handleSelectionChange(optionId)}
            labelTitle={'دسته'}
          />
        </div>

        {/* Level Dropdown */}
        <div className="relative mb-4">
          <div className="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.64298 3.14559L6.93816 3.93362C4.31272 5.14719 3 5.75397 3 6.75C3 7.74603 4.31272 8.35281 6.93817 9.56638L8.64298 10.3544C10.2952 11.1181 11.1214 11.5 12 11.5C12.8786 11.5 13.7048 11.1181 15.357 10.3544L17.0618 9.56638C19.6873 8.35281 21 7.74603 21 6.75C21 5.75397 19.6873 5.14719 17.0618 3.93362L15.357 3.14559C13.7048 2.38186 12.8786 2 12 2C11.1214 2 10.2952 2.38186 8.64298 3.14559Z"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.788 11.0972C20.9293 11.2959 21 11.5031 21 11.7309C21 12.7127 19.6873 13.3109 17.0618 14.5072L15.357 15.284C13.7048 16.0368 12.8786 16.4133 12 16.4133C11.1214 16.4133 10.2952 16.0368 8.64298 15.284L6.93817 14.5072C4.31272 13.3109 3 12.7127 3 11.7309C3 11.5031 3.07067 11.2959 3.212 11.0972"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.3767 16.2661C20.7922 16.5971 21 16.927 21 17.3176C21 18.2995 19.6873 18.8976 17.0618 20.0939L15.357 20.8707C13.7048 21.6236 12.8786 22 12 22C11.1214 22 10.2952 21.6236 8.64298 20.8707L6.93817 20.0939C4.31272 18.8976 3 18.2995 3 17.3176C3 16.927 3.20778 16.5971 3.62334 16.2661"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="mb-2 block text-gray-700 dark:text-white">
              سطح آموزشی
            </label>
          </div>
          <AccordionTab
            options={levels}
            onSelectionChange={(optionId) => handleLevelChange(optionId)}
            labelTitle={'سطح'}
          />
        </div>

        {/* Teachers Dropdown */}
        <div className="relative mb-4">
          <div className="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2H16C17.8856 2 18.8284 2 19.4142 2.58579C20 3.17157 20 4.11438 20 6V12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16H9"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 6.5H16"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 17V13C2 12.0572 2 11.5858 2.29289 11.2929C2.58579 11 3.05719 11 4 11H6M2 17H6M2 17V22M6 11V17M6 11H9H12M6 17V22"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6.5C6 7.60457 5.10457 8.5 4 8.5C2.89543 8.5 2 7.60457 2 6.5C2 5.39543 2.89543 4.5 4 4.5C5.10457 4.5 6 5.39543 6 6.5Z"
                stroke="#272727"
                strokeWidth="1.5"
              />
            </svg>

            <label className="mb-2 block text-gray-700 dark:text-white">
              اساتید
            </label>
          </div>
          <AccordionTab
            options={teachers}
            onSelectionChange={(optionId) => handleTeacherChange(optionId)}
            labelTitle={'اساتید'}
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <div className="flex gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19.5C10.6675 20.1224 8.91707 20.5 7 20.5C5.93408 20.5 4.91969 20.3833 4 20.1726C2.41828 19.8103 2 18.8796 2 17.386V6.61397C2 5.62914 3.04003 4.95273 4 5.1726C4.91969 5.38325 5.93408 5.5 7 5.5C8.91707 5.5 10.6675 5.12236 12 4.5C13.3325 3.87764 15.0829 3.5 17 3.5C18.0659 3.5 19.0803 3.61675 20 3.8274C21.5817 4.18968 22 5.12036 22 6.61397V17.386C22 18.3709 20.96 19.0473 20 18.8274C19.0803 18.6167 18.0659 18.5 17 18.5C15.0829 18.5 13.3325 18.8776 12 19.5Z"
                stroke="#272727"
                strokeWidth="1.5"
              />
              <path
                d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                stroke="#272727"
                strokeWidth="1.5"
              />
              <path
                d="M5.5 13V13.009"
                stroke="#272727"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 10.9922V11.0012"
                stroke="#272727"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <label className="mb-2 block text-gray-700 dark:text-white">
              قیمت
            </label>
          </div>
          <PricePicker priceRange={priceRange} setPriceRange={setPriceRange} />
        </div>

        {/* Event Dates */}
        {/* <div className="mb-4">
          <div className="flex flex-row gap-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 2V4M6 2V4"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 8H21"
                stroke="#272727"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <label className="text-gray-700 mb-2 block dark:text-white">
              تاریخ برگزاری - اتمام
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-3 bg-gray-200 py-2 px-4 rounded-lg">
            ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
          </p>
        </div> */}
      </div>

      {/* Modal for filters */}
      {isModalOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-end justify-center bg-black"
          onClick={toggleModal}
        >
          <div
            className={`flex w-full flex-col rounded-t-3xl bg-white px-8 pt-4 pb-8 transition-transform duration-300 dark:bg-[#041124] ${
              isAnimating ? 'translate-y-0' : 'translate-y-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-center">
              <div className="mb-6 h-2 w-16 rounded-3xl bg-gray-300"></div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="mb-4 text-xl font-semibold dark:text-white">
                فیلتر
              </h2>

              {/* Button to close modal */}
              <button
                className="mb-2 rounded-full border border-[#FF5353] px-4 py-2 text-red-500"
                onClick={toggleModal}
              >
                ✕ بستن
              </button>
            </div>
            {/* Search */}
            <div className="mb-4 flex flex-row gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L22 22"
                  stroke="#2F2F2F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                  stroke="#2F2F2F"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
              <label className="text-gray-700 dark:text-white">جستجو</label>
            </div>
            <div className="relative mb-4">
              <input
                type="text"
                className="w-full rounded-lg bg-slate-200 py-2 pr-4 pl-12 text-right text-sm text-gray-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="بلاگ مورد نظر را جستجو کنید..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                className="absolute left-0 h-full w-10 rounded-xl bg-[#3772FF] text-blue-600"
                onClick={handleSearch}
              >
                <div className="flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 17.5L22 22"
                      stroke="#FEFDFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                      stroke="#FEFDFF"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {/* Category Dropdown */}
            <div className="relative mb-4">
              <div className="flex flex-row gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1075 5.57624C11.3692 6.02707 11.5 6.25248 11.5 6.5C11.5 6.74752 11.3692 6.97293 11.1075 7.42376L9.85804 9.57624C9.59636 10.0271 9.46551 10.2525 9.25 10.3762C9.03449 10.5 8.7728 10.5 8.24943 10.5H5.75057C5.2272 10.5 4.96551 10.5 4.75 10.3762C4.53449 10.2525 4.40364 10.0271 4.14196 9.57624L2.89253 7.42376C2.63084 6.97293 2.5 6.74752 2.5 6.5C2.5 6.25248 2.63084 6.02707 2.89253 5.57624L4.14196 3.42376C4.40364 2.97293 4.53449 2.74752 4.75 2.62376C4.96551 2.5 5.2272 2.5 5.75057 2.5H8.24943C8.7728 2.5 9.03449 2.5 9.25 2.62376C9.46551 2.74752 9.59636 2.97293 9.85804 3.42376L11.1075 5.57624Z"
                    stroke="#2F2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.1075 11.5762C21.3692 12.0271 21.5 12.2525 21.5 12.5C21.5 12.7475 21.3692 12.9729 21.1075 13.4238L19.858 15.5762C19.5964 16.0271 19.4655 16.2525 19.25 16.3762C19.0345 16.5 18.7728 16.5 18.2494 16.5H15.7506C15.2272 16.5 14.9655 16.5 14.75 16.3762C14.5345 16.2525 14.4036 16.0271 14.142 15.5762L12.8925 13.4238C12.6308 12.9729 12.5 12.7475 12.5 12.5C12.5 12.2525 12.6308 12.0271 12.8925 11.5762L14.142 9.42376C14.4036 8.97293 14.5345 8.74752 14.75 8.62376C14.9655 8.5 15.2272 8.5 15.7506 8.5H18.2494C18.7728 8.5 19.0345 8.5 19.25 8.62376C19.4655 8.74752 19.5964 8.97293 19.858 9.42376L21.1075 11.5762Z"
                    stroke="#2F2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.1075 16.5762C11.3692 17.0271 11.5 17.2525 11.5 17.5C11.5 17.7475 11.3692 17.9729 11.1075 18.4238L9.85804 20.5762C9.59636 21.0271 9.46551 21.2525 9.25 21.3762C9.03449 21.5 8.7728 21.5 8.24943 21.5H5.75057C5.2272 21.5 4.96551 21.5 4.75 21.3762C4.53449 21.2525 4.40364 21.0271 4.14196 20.5762L2.89253 18.4238C2.63084 17.9729 2.5 17.7475 2.5 17.5C2.5 17.2525 2.63084 17.0271 2.89253 16.5762L4.14196 14.4238C4.40364 13.9729 4.53449 13.7475 4.75 13.6238C4.96551 13.5 5.2272 13.5 5.75057 13.5H8.24943C8.7728 13.5 9.03449 13.5 9.25 13.6238C9.46551 13.7475 9.59636 13.9729 9.85804 14.4238L11.1075 16.5762Z"
                    stroke="#2F2F2F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <label className="mb-2 block text-gray-700 dark:text-white">
                  دسته بندی
                </label>
              </div>
              <AccordionTab
                options={categories}
                onSelectionChange={(optionId) =>
                  handleSelectionChange(optionId)
                }
                labelTitle={'دسته'}
              />
            </div>

            {/* Level Dropdown */}
            <div className="relative mb-4">
              <label className="mb-2 block text-gray-700 dark:text-white">
                سطح آموزشی
              </label>
              <AccordionTab
                options={levels}
                onSelectionChange={(optionId) => handleLevelChange(optionId)}
                labelTitle={'سطح'}
              />
            </div>

            {/* Teachers Dropdown */}
            <div className="relative mb-4">
              <label className="mb-2 block text-gray-700 dark:text-white">
                اساتید
              </label>

              <AccordionTab
                options={teachers}
                onSelectionChange={(optionId) => handleTeacherChange(optionId)}
                labelTitle={'اساتید'}
              />
            </div>
            {/* Price */}
            <div className="mb-4">
              <label className="mb-2 block text-gray-700 dark:text-white">
                قیمت
              </label>
              <PricePicker
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />{' '}
            </div>

            {/* Event Dates */}
            <div className="mb-0">
              <div className="flex flex-row gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 13H16M8 13H8.00898M13 17H8M16 17H15.991"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 2V4M6 2V4"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 8H21"
                    stroke="#272727"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <label className="text-gray-700 dark:text-white">
                  تاریخ برگزاری - اتمام
                </label>
              </div>
              <p className="mt-3 rounded-lg border border-gray-300 bg-slate-200 px-4 py-2 text-sm text-gray-500">
                ۲۹ اردیبهشت ۱۴۰۳ - ۵ خرداد ۱۴۰۳
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { Filter };
