import React from 'react';
import InputFilterTitle from '../../../../components/InputFilterTitle';
import { useDispatch } from 'react-redux';
import {
  fetchCourses,
  setCurrentPage,
  setEndDate,
  setStartDate,
} from '../../../../redux/courseSlice';
import Calender from '../../../../components/Calender';

const FilterCalender = () => {
  const dispatch = useDispatch();
  const handleStartDate = (date) => {
    dispatch(setStartDate(date));
  };
  const handleEndtDate = (date) => {
    dispatch(setEndDate(date));
    dispatch(setCurrentPage(1));
    dispatch(fetchCourses());
  };
  return (
    <div className="mb-[20px]">
      <InputFilterTitle
        imageSrc={'/src/assets/icons/calender.svg'}
        titleText={'تاریخ برگزاری - اتمام'}
      />
      <Calender
        handleStartDate={handleStartDate}
        handleEndtDate={handleEndtDate}
      />
    </div>
  );
};
export default FilterCalender;
