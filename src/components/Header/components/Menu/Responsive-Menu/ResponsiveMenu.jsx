import { Header } from "./Header"
import { Menu } from "./Menu"
import { Social } from "./Social"
const ResponsiveMenu = ({ menuStatus, setMenuStatus }) => {
    return (
        <nav className={menuStatus ? "fixed flex flex-col justify-between w-[100%] h-[100%] bg-thirdly left-[0] top-[0] z-[1000] p-[20px_10px] min-[800px]:hidden" : "hidden"}>
            <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
            <Menu />
            <Social customStyle={"border-t-[1px] border-[#fff] pt-[15px] flex gap-[10px] items-center justify-center text-[#fff] text-[25px]"} />
        </nav>
    )
}
export { ResponsiveMenu }