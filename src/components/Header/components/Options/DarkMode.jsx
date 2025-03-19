import { Fragment } from 'react'
import darkModeIcon from '/src/assets/icons/dark.png'
import IconSet from '../../../shared/IconSet'

const DarkMode = () => {
    return (
        <Fragment>
            <div className="w-[48px] h-[48px] bg-thirdly rounded-[50%] cursor-pointer flex items-center text-[#fff] justify-center text-[24px]">
                <IconSet imageAddress={darkModeIcon} firstSize={20} secondSize={20}/>
            </div>
        </Fragment >
    )
}
export { DarkMode }