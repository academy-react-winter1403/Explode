import React from 'react';
import DropDownList from '../../../../components/DropDownList';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCourses,
  setCurrentPage,
  setLevelId,
} from '../../../../redux/courseSlice';

const CourseLevel = ({darkMode}) => {
  const dispatch = useDispatch();
  const courseLevels = useSelector((state) => state.courses.courseLevels);
  const handleLevels = (data) => {
    dispatch(setLevelId(data));
    dispatch(setCurrentPage(1));
    dispatch(fetchCourses());
  };
  return (
    <DropDownList
      imageSrc={`${darkMode ? '/src/assets/icons/course-level-light.png' : '/src/assets/icons/course-level.svg'}`}
      titleText={'سطح آموزشی'}
      handleFunction={handleLevels}
      defaultOptionText={'سطح مورد نظر را انتخاب کنید'}
    >
      {courseLevels.map((item, index) => (
        <option key={index} value={item.id}>
          {item.levelName}
        </option>
      ))}
    </DropDownList>
  );
};

export default CourseLevel;
