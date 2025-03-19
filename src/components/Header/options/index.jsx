import DarkMode from "./DarkMode"
import Notifications from "./Notifications"
const Options = () => {
    return (
        <div className="w-[200px] h-[100%] flex flex-row-reverse items-center gap-[10px] max-[870px]:hidden ">
            <DarkMode />
            <Notifications />
        </div>
    )
}
export default Options