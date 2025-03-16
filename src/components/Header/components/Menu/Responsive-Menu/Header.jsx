import React from 'react'
import { CgClose } from "react-icons/cg";
import { HeaderLogo } from "../../Logo/HeaderLogo";
const Header = ({ menuStatus, setMenuStatus }) => {
    return (
        <div className="flex items-center justify-between mb-15px">
            {/* Menu Logo */}
            <HeaderLogo />

            {/* Close Menu Icon */}
            <CgClose onClick={() => setMenuStatus(!menuStatus)} className="text-[40px] text-[#FCFCFC] cursor-pointer" />
        </div>
    )
}
export { Header }