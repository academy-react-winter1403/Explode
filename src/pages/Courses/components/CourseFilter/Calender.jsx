import React from 'react';
import Title from '../../../../components/shared/filter-sections-title';
import { useDispatch } from 'react-redux';
import { fetchCourses, setCurrentPage, setEndDate, setStartDate } from '../../../../core/redux/courseSlice';


const Calender = () => {
  const dispatch = useDispatch()
  const handleStartDate = (date) => {
    dispatch(setStartDate(date))
  };
  const handleEndtDate = (date) => {
    dispatch(setEndDate(date))
    dispatch(setCurrentPage(1))
    dispatch(fetchCourses())
  };
  return (
    <div >
      <Title
        imageSrc={'/src/assets/icons/calender.svg'}
        titleText={'تاریخ برگزاری - اتمام'}
      />
      <div className="flex h-[48px] items-center gap-[10px] rounded-[16px] bg-[#F1F1F1] p-[0_16px] text-[11px] font-[500] text-[#707070]">
        <input
          onChange={(event) => handleStartDate(event.target.value)}
          type="date"
          className="w-[50%] outline-hidden"
        />{' '}
        -{' '}
        <input
          onChange={(event) => handleEndtDate(event.target.value)}
          className="w-[50%] outline-hidden"
          type="date"
          name=""
          id=""
        />
      </div>
    </div>
  );
};
export default Calender;
