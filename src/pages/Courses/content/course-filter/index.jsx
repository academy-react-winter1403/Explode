import IconSet from "../../../../components/shared/IconSet";
import Calender from "./calender";
import Category from "./category";
import CourseLevel from "./course-level";
import Price from "./price";
import SearchInput from "./search-input";
import Teachers from "./teachers";

const CourseFilter = ({
    setQuery,
    setCurrentPage,
    categories,
    setCategory,
    setLevelId,
    courseLevels,
    teachers,
    setTeacherId,
    setCostDown,
    setCostUp,
    setStartDate,
    setEndDate,
    responsiveFilter,
    setResponsiveFilter
}) => {

    return (
        <div className={`w-[298px] mt-[60px] border-[2px] border-[#DCDCDC] rounded-[32px] p-[15px] max-[1050px]:w-[100%] max-[600px]:${responsiveFilter ? 'fixed' : 'hidden'} max-[600px]:top-[0] max-[600px]:mt-0 max-[600px]:bg-[#fff] max-[600px]:right-0 max-[600px]:z-1000`}>
            <div className="mb-[25px] flex items-center justify-between">
                <h2 className='text-[24px] font-[700] text-thirdly '>فیلتر</h2>
                <div onClick={() => setResponsiveFilter(!responsiveFilter)} className="flex items-center gap-[15px] p-[7px_16px] border-[#FF5353] border-[2px] rounded-[34px] text-[18px] text-[#FF5353] font-[500] cursor-pointer hidden max-[600px]:flex">
                    <IconSet imageAddress={'/src/assets/icons/red-close.svg'} firstSize={24} secondSize={24} />
                    بستن
                </div>
            </div>
            <SearchInput
                setQuery={setQuery}
                setCurrentPage={setCurrentPage}
            />

            <Category
                categories={categories}
                setCategory={setCategory}
                setCurrentPage={setCurrentPage}
            />

            <CourseLevel
                setLevelId={setLevelId}
                courseLevels={courseLevels}
                setCurrentPage={setCurrentPage}
            />

            <Teachers
                setCurrentPage={setCurrentPage}
                teachers={teachers}
                setTeacherId={setTeacherId}
            />

            <Price
                setCostDown={setCostDown}
                setCostUp={setCostUp}
                setCurrentPage={setCurrentPage}
            />

            <Calender
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setCurrentPage={setCurrentPage}
            />

        </div>
    )
}
export default CourseFilter