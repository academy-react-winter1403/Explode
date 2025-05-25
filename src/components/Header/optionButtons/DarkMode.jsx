import { useSelector } from "react-redux"
import IconSet from "../../shared/IconSet"
import useToggleDarkMode from "../../../Hooks/useToggleDarkMode"
const DarkMode = () => {
    const { darkMode } = useSelector((state) => state.darkMode)
    const toggleDarkMode = useToggleDarkMode()
    return (
        <div onClick={() => toggleDarkMode(darkMode)} className={` ${darkMode && 'border-[#fff] border-[1px]'} bg-thirdly flex items-center justify-center w-[48px] h-[48px] rounded-[50%] cursor-pointer`}>
            <IconSet imageAddress={'/src/assets/icons/dark.svg'} />
        </div>
    )
}
export default DarkMode 