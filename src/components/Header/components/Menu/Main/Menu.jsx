import { NavLink } from "react-router";
const Menu = ({ children, customStyle }) => {
    const activeLink = "flex relative justify-center after:w-[4px] after:h-[4px] after:bg-[#fff] after:absolute after:bottom-[-5px] after:rounded-[50%]"
    return (
        <ul className={customStyle}>
            <li><NavLink to={'/'} className={({ isActive }) => isActive ? activeLink : ''}>خانه</NavLink></li>
            <li><NavLink to={'/course'} className={({ isActive }) => isActive ? activeLink : ''}>دوره ها</NavLink></li>
            <li><NavLink to={'/blogs'} className={({ isActive }) => isActive ? activeLink : ''}>بلاگ ها</NavLink></li>
            <li><NavLink to={'/about-us'} className={({ isActive }) => isActive ? activeLink : ''}>درباره ما</NavLink></li>
            {children}
        </ul>
    )
}
export { Menu }