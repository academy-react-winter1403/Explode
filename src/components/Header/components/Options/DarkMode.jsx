import React, { Fragment } from 'react'
import { AiOutlineMoon } from 'react-icons/ai';
const DarkMode = () => {
    return (
        <Fragment>
            <div className="w-[48px] h-[48px] bg-thirdly rounded-[50%] cursor-pointer flex items-center text-[#fff] justify-center text-[24px]">
                <AiOutlineMoon />
            </div>
        </Fragment>
    )
}
export { DarkMode }