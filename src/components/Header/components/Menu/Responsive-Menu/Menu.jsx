import { NavLink } from "react-router"
const Menu = () => {
    return (
        <ul className="text-[#fff] w-[100%] font-bold">
            <li className="mb-[10px] border-b-[1px] p-[10px_0]"><NavLink className="block w-[100%]">خانه</NavLink></li>
            <li className="mb-[10px] border-b-[1px] p-[10px_0]"><NavLink className="block w-[100%]">دوره ها</NavLink></li>
            <li className="mb-[10px] border-b-[1px] p-[10px_0]"><NavLink className="block w-[100%]">بلاگ ها</NavLink></li>
            <li className="mb-[10px] border-b-[1px] p-[10px_0]"><NavLink className="block w-[100%]">درباره ما</NavLink></li>
            <li className="mb-[10px] border-b-[1px] p-[10px_0]"><NavLink className="block w-[100%]">ارتباط ما</NavLink></li>
        </ul>
    )
}
export { Menu }