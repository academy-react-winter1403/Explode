import { useDispatch, useSelector } from 'react-redux';
import DropDownList from '../../../../components/DropDownList';
import {
  fetchCourses,
  setCategory,
  setCurrentPage,
} from '../../../../redux/courseSlice';

const Category = ({darkMode}) => {
  const categories = useSelector((state) => state.courses.courseCategories);
  const dispatch = useDispatch();
  const handleCategory = (data) => {
    dispatch(setCategory(data));
    dispatch(setCurrentPage(1));
    dispatch(fetchCourses());
  };
  return (
    <DropDownList
      imageSrc={`${darkMode ? '/src/assets/icons/category-light.png' : '/src/assets/icons/category.svg'}`}
      titleText={'دسته بندی'}
      handleFunction={handleCategory}
      defaultOptionText={'دسته مورد نظر را انتخاب کنید'}
    >
      {categories.map((item, index) => (
        <option key={index} value={item.id}>
          {item.techName}
        </option>
      ))}
    </DropDownList>
  );
};
export default Category;
