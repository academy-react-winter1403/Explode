import { NavLink } from "react-router";
const Menu = ({ children, menuResponsiveStatus = '', customStyle }) => {
    return (
        <ul className={`flex gap-[32px] max-[800px]:${menuResponsiveStatus} ${customStyle}`}>
            <li><NavLink>خانه</NavLink></li>
            <li><NavLink>دوره ها</NavLink></li>
            <li><NavLink>بلاگ ها</NavLink></li>
            <li><NavLink>درباره ما</NavLink></li>
            {children}
        </ul>
    )
}
export { Menu }