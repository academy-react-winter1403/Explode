import { NavLink } from "react-router";
const Menu = ({ children, customStyle }) => {
    return (
        <ul className={customStyle}>
            <li><NavLink>خانه</NavLink></li>
            <li><NavLink>دوره ها</NavLink></li>
            <li><NavLink>بلاگ ها</NavLink></li>
            <li><NavLink>درباره ما</NavLink></li>
            {children}
        </ul>
    )
}
export { Menu }