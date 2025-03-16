import { Link } from "react-router"
import { FaInstagram, FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";
const Social = () => {
    return (
        <div className="border-t-[1px] border-[#fff] pt-[15px] flex gap-[10px] items-center justify-center text-[#fff] text-[25px]">
            <Link><FaTwitter /></Link>
            <Link><FaYoutube /></Link>
            <Link><FaTelegramPlane /></Link>
            <Link><FaInstagram /></Link>
        </div>
    )
}
export { Social }