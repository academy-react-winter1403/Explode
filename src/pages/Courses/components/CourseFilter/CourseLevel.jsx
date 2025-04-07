import React from 'react';
import DropDownList from '../../../../components/shared/drop-down-list';
import useCourseStore from '../../../../Hooks/useCourseStore';

const CourseLevel = () => {
  const { setLevelId, courseLevels, setCurrentPage } = useCourseStore();
  const handleLevels = (data) => {
    setLevelId(data);
    setCurrentPage(1);
  };
  return (
    <DropDownList
      imageSrc={'/src/assets/icons/course-level.svg'}
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
