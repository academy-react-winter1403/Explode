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
    setEndDate
}) => {

    return (
        <div className='w-[298px] mt-[60px] border-[2px] border-[#DCDCDC] rounded-[32px] p-[15px]'>
            <h2 className='text-[24px] font-[700] text-thirdly mb-[25px]'>فیلتر</h2>
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