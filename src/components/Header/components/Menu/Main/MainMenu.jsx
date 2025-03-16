import { Link } from "react-router"
import { Menu } from "./Menu"
import { Profile } from "./Profile"
import { CgMenuRight } from "react-icons/cg";
const MainMenu = ({ menuStatus, setMenuStatus }) => {
    return (
        <nav className="flex items-center gap-[10px]">

            {/* Menu Container */}
            <div className="p-[4px_24px_4px_4px] bg-thirdly rounded-[56px] flex gap-[32px] text-[#fff] items-center max-[800px]:pr-[4px]">

                {/* Main Menu */}
                <Menu />

                {/* Login/Register page link */}
                <Link className="bg-primary rounded-[56px] p-[8px_16px] ">ثبت نام یا ورود</Link>

                {/* Profile*/}
                <Profile />

            </div>

            {/* This part is for accessing the responsive menu (Click Icon)*/}
            <div onClick={() => setMenuStatus(!menuStatus)} className="hidden w-[56px] h-[56px] flex items-center justify-center bg-thirdly text-[#fff] text-[27px] rounded-[50%] cursor-pointer max-[800px]:flex"><CgMenuRight className="rotate-[180deg] " /></div>
        </nav>
    )
}
export { MainMenu }