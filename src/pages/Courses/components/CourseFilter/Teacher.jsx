import React from 'react';
import DropDownList from '../../../../components/DropDownList';
import useCourseStore from '../../../../Hooks/useCourseStore';

const Teacher = () => {
  const { setCurrentPage, teachers, setTeacherId } = useCourseStore();
  const handleTeachers = (data) => {
    setTeacherId(data);
    setCurrentPage(1);
  };
  return (
    <DropDownList
      imageSrc={'/src/assets/icons/teachers.svg'}
      titleText={'اساتید'}
      handleFunction={handleTeachers}
      defaultOptionText={'استاد مورد نظر را انتخاب کنید'}
    >
      {teachers.map((item, index) => (
        <option key={index} value={item.teacherId}>
          {item.fullName}
        </option>
      ))}
    </DropDownList>
  );
};

export default Teacher;
