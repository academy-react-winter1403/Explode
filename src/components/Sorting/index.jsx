import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CloseButton from '../CloseButton';
import IconSet from '../shared/IconSet';
import {
  fetchCourses,
  setCurrentPage,
  setResponsiveFilter,
  setResponsiveSorting,
  setSorting,
  setSortingType,
} from '../../redux/courseSlice';
import { SortingOptionsButtonData } from '../../pages/Courses/components/CourseList/SortingOptionsButtonData';
import { BlogsSortingOptionsButtonData } from './../../pages/Blogs/Components/BlogList/SortingOptionsButtonsData';
import {
  fetchBlogs,
  setCurrentPage as blogSetCurrentPage,
  setSorting as blogSetSorting,
  setSortingType as blogSetSortingType,
} from '../../redux/blogSlice';

const Sorting = () => {
  const { pathname: location } = useLocation();
  const sortingButtons =
    location == '/courses'
      ? SortingOptionsButtonData
      : BlogsSortingOptionsButtonData;
  const dispatch = useDispatch();
  let sorting =
    location == '/courses'
      ? useSelector((state) => state.courses.sorting)
      : useSelector((state) => state.blogs.sorting);
  let sortingType =
    location == '/courses'
      ? useSelector((state) => state.courses.sortingType)
      : useSelector((state) => state.blogs.sortingType);
  const responsiveSorting = useSelector(
    (state) => state.courses.responsiveSorting,
  );
  const responsiveFilter = useSelector(
    (state) => state.courses.responsiveFilter,
  );
  const handleClick = (data) => {
    if (location == '/courses') {
      dispatch(setSorting(data[0]));
      dispatch(setSortingType(data[1]));
      dispatch(setCurrentPage(1));
      dispatch(fetchCourses());
    } else {
      dispatch(blogSetSorting(data[0]));
      dispatch(blogSetSortingType(data[1]));
      dispatch(blogSetCurrentPage(1));
      dispatch(fetchBlogs());
    }
  };

  return (
    <div className="mb-[20px] flex h-[40px] items-center gap-[20px]">
      {/* Mobile Sorting */}
      <div className="flex items-center max-[600px]:w-[100%] max-[600px]:justify-between">
        <span className="text-thirdly text-[20px] font-[700] max-[600px]:hidden">
          ترتیب
        </span>
        <span
          onClick={() => dispatch(setResponsiveFilter(!responsiveFilter))}
          className="bg-thirdly hidden cursor-pointer gap-[10px] rounded-[40px] p-[12px_16px] text-[16px] font-[500] text-[#fff] max-[600px]:flex"
        >
          <IconSet
            imageAddress={'/src/assets/icons/filter.svg'}
            firstSize={24}
            secondSize={24}
          />
          فیلتر
        </span>
        <span
          onClick={() => dispatch(setResponsiveSorting(!responsiveSorting))}
          className="bg-thirdly hidden cursor-pointer gap-[10px] rounded-[40px] p-[12px_16px] text-[16px] font-[500] text-[#fff] max-[600px]:flex"
        >
          <IconSet
            imageAddress={'/src/assets/icons/sorting.svg'}
            firstSize={24}
            secondSize={24}
          />
          ترتیب
        </span>
      </div>

      {/* Sorting List */}
      <nav
        className={`${responsiveSorting ? 'z-1000 max-[600px]:fixed max-[600px]:top-0 max-[600px]:left-0 max-[600px]:flex max-[600px]:w-[100%] max-[600px]:flex-col max-[600px]:bg-[#fff]' : 'max-[600px]:hidden'}`}
      >
        <div className="hidden max-[600px]:flex max-[600px]:justify-between max-[600px]:p-[10px]">
          <span className="text-thirdly text-[20px] font-[700] max-[600px]:flex">
            ترتیب
          </span>
          <CloseButton
            className={'max-[600px]:flex'}
            onClick={() => dispatch(setResponsiveSorting(!responsiveSorting))}
          />
        </div>
        <ul className="flex flex-wrap gap-[10px] max-[600px]:p-[20px]">
          {sortingButtons.map((item) => (
            <li
              key={item.id}
              onClick={() => handleClick([item.sorting, item.sortingType])}
              className={`border-[1px] p-[7px_16px] ${sorting == item.sorting && sortingType == item.sortingType ? 'border-[1px] border-[#FF5353] text-[#FF5353]' : 'border-thirdly text-thirdly'} cursor-pointer rounded-[34px] text-[18px] font-[500]`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sorting;
