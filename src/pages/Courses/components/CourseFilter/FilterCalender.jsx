import React from 'react';
import InputFilterTitle from '../../../../components/InputFilterTitle';
import useCourseStore from '../../../../Hooks/useCourseStore';
import Calender from '../../../../components/Calender';

const FilterCalender = () => {
  const { setStartDate, setEndDate, setCurrentPage } = useCourseStore();
  const handleStartDate = (date) => {
    setStartDate(date);
  };
  const handleEndtDate = (date) => {
    setEndDate(date);
    setCurrentPage(1);
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
