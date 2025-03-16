import { NavLink } from "react-router";
const Menu = () => {
    return (
        <ul className="flex gap-[32px] max-[800px]:hidden">
            <li><NavLink>خانه</NavLink></li>
            <li><NavLink>دوره ها</NavLink></li>
            <li><NavLink>بلاگ ها</NavLink></li>
            <li><NavLink>درباره ما</NavLink></li>
        </ul>
    )
}
export { Menu }