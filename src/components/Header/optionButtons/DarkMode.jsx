import { useDispatch, useSelector } from "react-redux"
import IconSet from "../../shared/IconSet"
import { setDarkMode } from "../../../redux/darkMode"
const DarkMode = () => {
    const dispatch = useDispatch()
    const { darkMode } = useSelector((state) => state.darkMode)
    const handleDarkMode = () => {
        dispatch(setDarkMode(!darkMode))
    }
    return (
        <div onClick={handleDarkMode} className={` ${darkMode && 'border-[#fff] border-[1px]'} bg-thirdly flex items-center justify-center w-[48px] h-[48px] rounded-[50%] cursor-pointer`}>
            <IconSet imageAddress={'/src/assets/icons/dark.svg'} />
        </div>
    )
}
export default DarkMode