import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import CloseButton from '../CloseButton'
import IconSet from '../shared/IconSet'
import { fetchCourses, setCurrentPage, setResponsiveFilter, setResponsiveSorting, setSorting, setSortingType } from '../../core/redux/courseSlice'
import { SortingOptionsButtonData } from '../../pages/Courses/components/CourseList/SortingOptionsButtonData';
import { BlogsSortingOptionsButtonData } from './../../pages/Blogs/Components/BlogList/SortingOptionsButtonsData';
import { fetchBlogs, setCurrentPage as blogSetCurrentPage, setSorting as blogSetSorting, setSortingType as blogSetSortingType } from '../../core/redux/blogSlice'


const Sorting = () => {
    const { pathname: location } = useLocation()
    const sortingButtons = location == '/courses' ? SortingOptionsButtonData : BlogsSortingOptionsButtonData
    const dispatch = useDispatch()
    let sorting = location == '/courses' ? useSelector((state) => state.courses.sorting) : useSelector((state) => state.blogs.sorting)
    let sortingType = location == '/courses' ? useSelector((state) => state.courses.sortingType) : useSelector((state) => state.blogs.sortingType)
    const responsiveSorting = useSelector((state) => state.courses.responsiveSorting)
    const responsiveFilter = useSelector((state) => state.courses.responsiveFilter)
    const handleClick = (data) => {
        if (location == '/courses') {
            dispatch(setSorting(data[0]))
            dispatch(setSortingType(data[1]))
            dispatch(setCurrentPage(1))
            dispatch(fetchCourses())
        }
        else {
            dispatch(blogSetSorting(data[0]))
            dispatch(blogSetSortingType(data[1]))
            dispatch(blogSetCurrentPage(1))
            dispatch(fetchBlogs())
        }
    }

    return (
        <div className='flex items-center gap-[20px] mb-[20px] h-[40px] '>
            {/* Mobile Sorting */}
            <div className='flex items-center max-[600px]:w-[100%] max-[600px]:justify-between'>
                <span className='font-[700] text-thirdly text-[20px] max-[600px]:hidden'>ترتیب</span>
                <span onClick={() => dispatch(setResponsiveFilter(!responsiveFilter))} className='hidden max-[600px]:flex bg-thirdly p-[12px_16px] rounded-[40px] cursor-pointer gap-[10px] text-[#fff] font-[500] text-[16px]'><IconSet imageAddress={'/src/assets/icons/filter.svg'} firstSize={24} secondSize={24} />فیلتر</span>
                <span onClick={() => dispatch(setResponsiveSorting(!responsiveSorting))} className='hidden max-[600px]:flex bg-thirdly p-[12px_16px] rounded-[40px] cursor-pointer gap-[10px] text-[#fff] font-[500] text-[16px]'><IconSet imageAddress={'/src/assets/icons/sorting.svg'} firstSize={24} secondSize={24} />ترتیب</span>
            </div>

            {/* Sorting List */}
            <nav className={`${responsiveSorting ? "z-1000 max-[600px]:fixed max-[600px]:flex-col max-[600px]:top-0 max-[600px]:left-0 max-[600px]:w-[100%] max-[600px]:flex max-[600px]:bg-[#fff]" : "max-[600px]:hidden"}`}>
                <div className='hidden max-[600px]:flex max-[600px]:justify-between max-[600px]:p-[10px]'>
                    <span className='font-[700] text-thirdly text-[20px] max-[600px]:flex'>ترتیب</span>
                    <CloseButton className={'max-[600px]:flex'} onClick={() => dispatch(setResponsiveSorting(!responsiveSorting))} />
                </div>
                <ul className='flex gap-[10px] max-[600px]:p-[20px] flex-wrap'>
                    {
                        sortingButtons.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => handleClick([item.sorting, item.sortingType])}
                                className={`p-[7px_16px] border-[1px] ${sorting == item.sorting && sortingType == item.sortingType ? "border-[#FF5353] text-[#FF5353] border-[1px]" : "border-thirdly text-thirdly"} rounded-[34px] cursor-pointer text-[18px] font-[500]`}
                            >{item.label}</li>
                        ))
                    }
                </ul>
            </nav>

        </div>
    )
}

export default Sorting