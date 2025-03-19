import { Link } from "react-router"
const ShowCourses = () => {
    return (
        <div className="max-w-[150px] max-[650px]:order-[2] max-[650px]:text-center">
            <div className="font-[500] text-[18px] mb-[25px]">همین حالا <br /> شروع کن به یادگیری</div>
            <Link to={'/courses'} className="p-[12px_16px] font-[500] text-[#fff] bg-thirdly rounded-[40px]">جدیدترین دوره ها</Link>
        </div>
    )
}

export { ShowCourses }