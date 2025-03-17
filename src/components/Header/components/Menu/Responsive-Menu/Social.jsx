import { Link } from "react-router"
import { FaInstagram, FaTelegramPlane, FaYoutube, FaTwitter } from "react-icons/fa";
const Social = ({ customStyle }) => {

    return (
        <div className={customStyle}>
            <Link><FaTwitter /></Link>
            <Link><FaYoutube /></Link>
            <Link><FaTelegramPlane /></Link>
            <Link><FaInstagram /></Link>
        </div>
    )
}
export { Social }