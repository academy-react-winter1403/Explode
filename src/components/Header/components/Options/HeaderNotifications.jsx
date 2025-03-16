import React, { Fragment } from 'react'
import { CiBellOn } from "react-icons/ci";
const HeaderNotifications = () => {
    return (
        <Fragment>
            <div className=" flex  items-center justify-center border-[1px] border-[#DCDCDC] w-[48px] h-[48px] rounded-[50%] cursor-pointer relative">
                <CiBellOn className="text-thirdly text-[27px]" />
                <div className="bg-[#FF5E5E] w-[16px] h-[16px] absolute flex items-center justify-center text-[#fff] rounded-[50%] text-[10px] top-[32px] right-[0px]">2</div>
            </div>
        </Fragment>
    )
}
export { HeaderNotifications }