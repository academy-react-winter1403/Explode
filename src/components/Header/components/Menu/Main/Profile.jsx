import profileImg from '../../../images/profile.png'
import { RxChevronDown } from "react-icons/rx";
const Profile = () => {
    return (
        <div className="h-[40px] flex items-center gap-[3px] cursor-pointer hidden">
            <RxChevronDown className="text-[20px]" />
            <img src={profileImg} alt="Username" className="w-[40px] h-[40px] rounded-[50%]" />
        </div>
    )
}
export { Profile }