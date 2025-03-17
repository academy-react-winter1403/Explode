import { Fragment } from 'react'
import darkModeIcon from '../../../../assets/img/dark.png'
const DarkMode = () => {
    return (
        <Fragment>
            <div className="w-[48px] h-[48px] bg-thirdly rounded-[50%] cursor-pointer flex items-center text-[#fff] justify-center text-[24px]">
                <span className=" bg-no-repeat bg-center w-[100%] h-[100%]" style={{ backgroundImage: `url(${darkModeIcon})` }}></span>
            </div>
        </Fragment >
    )
}
export { DarkMode }