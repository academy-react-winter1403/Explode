import { DarkMode } from './DarkMode';
import { HeaderNotifications } from './HeaderNotifications';
const HeaderOptions = () => {
    return (
        <div className="flex items-center gap-[10px] flex-row-reverse max-[800px]:hidden">
            <DarkMode />
            <HeaderNotifications />
        </div>
    )
}
export { HeaderOptions }