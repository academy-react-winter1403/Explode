import DropDownList from '../../../../components/shared/drop-down-list';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, setCurrentPage, setTeacherId } from '../../../../core/redux/courseSlice';


const Teacher = () => {
  const teachers = useSelector((state) => state.courses.teachers)
  const dispatch = useDispatch()
  const handleTeachers = (data) => {
    dispatch(setTeacherId(data))
    dispatch(setCurrentPage(1))
    dispatch(fetchCourses())
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
