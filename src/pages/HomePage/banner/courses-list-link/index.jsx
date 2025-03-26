import { Link } from "react-router"
const NewCoursesLink = () => {
    return (
        <div className="w-[295px] flex flex-col items-center max-[662px]:order-2">
            <p className="text-[18px] font-[500] text-thirdly mb-[20px]">
                همین حالا <br /> شروع کن یاد بگیری
            </p>
            <Link to={'/courses'} className=" p-[12px_16px] bg-thirdly text-[#FCFCFC] text-[16px] font-[500] rounded-[40px]">جدیدترین دوره ها</Link>
        </div>
    )
}
export default NewCoursesLink