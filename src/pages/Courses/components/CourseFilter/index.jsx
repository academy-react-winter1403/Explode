import CloseButton from '../../../../components/CloseButton';
import SearchFilterInput from './SearchFilterInput';
import Category from './Category';
import CourseLevel from './CourseLevel';
import Teacher from './Teacher';
import Price from './Price';
import FilterCalender from './FilterCalender';
import useCourseStore from '../../../../Hooks/useCourseStore';

const CourseFilter = () => {
  const { responsiveFilter, setResponsiveFilter } = useCourseStore();

  return (
    <div
      className={`mt-[60px] w-[298px] rounded-[32px] border-[2px] border-[#DCDCDC] p-[15px] max-[1050px]:w-[100%] ${responsiveFilter ? 'max-[600px]:fixed' : 'max-[600px]:hidden'} max-[600px]:top-0 max-[600px]:right-0 max-[600px]:z-1000 max-[600px]:mt-0 max-[600px]:w-[100%] max-[600px]:bg-[#fff]`}
    >
      <div className="mb-[25px] flex items-center justify-between">
        <h2 className="text-thirdly text-[24px] font-[700]">فیلتر</h2>
        <CloseButton onClick={() => setResponsiveFilter(!responsiveFilter)} />
      </div>

      <SearchFilterInput />
      <Category />
      <CourseLevel />
      <Teacher />
      <Price />
      <FilterCalender />
    </div>
  );
};

export default CourseFilter;
