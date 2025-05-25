import CloseButton from '../../../../components/CloseButton';
import SearchFilterInput from './SearchFilterInput';
import Category from './Category';
import CourseLevel from './CourseLevel';
import Teacher from './Teacher';
import Price from './Price';
import FilterCalender from './FilterCalender';
import { useDispatch, useSelector } from 'react-redux';
import { setResponsiveFilter } from '../../../../redux/courseSlice';

const CourseFilter = () => {
  const responsiveFilter = useSelector(
    (state) => state.courses.responsiveFilter,
  );
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state) => state.darkMode)
  return (
    <div
      className={`mt-[60px] w-[298px] rounded-[32px] border-[2px] border-[#DCDCDC] p-[15px] max-[1050px]:w-[100%] ${darkMode ? 'max-[600px]:bg-thirdly' : 'max-[600px]:bg-[#fff]'} ${responsiveFilter ? 'max-[600px]:fixed' : 'max-[600px]:hidden'} max-[600px]:top-0 max-[600px]:right-0 max-[600px]:z-1000 max-[600px]:mt-0 max-[600px]:w-[100%] `}
    >
      <div className="mb-[25px] flex items-center justify-between">
        <h2 className={`${darkMode ? 'text-[#fff] ' : 'text-thirdly'} text-[24px] font-[700]`}>فیلتر</h2>
        <CloseButton
          onClick={() => dispatch(setResponsiveFilter(!responsiveFilter))}
          className={'max-[600px]:flex'}
        />
      </div>

      <SearchFilterInput darkMode={darkMode} />
      <Category darkMode={darkMode} />
      <CourseLevel darkMode={darkMode} />
      <Teacher darkMode={darkMode} />
      <Price darkMode={darkMode} />
      <FilterCalender darkMode={darkMode} />
    </div>
  );
};

export default CourseFilter;
