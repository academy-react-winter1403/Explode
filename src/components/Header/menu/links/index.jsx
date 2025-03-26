import { NavLink } from "react-router"
const MenuLinks = () => {
    const menuLinks = [
        { address: '/', title: 'خانه' },
        { address: '/courses', title: 'دوره ها' },
        { address: '/blogs', title: 'بلاگ ها' },
        { address: '/about-us', title: 'درباره ما' },
    ]
    const activeLink = "relative flex items-center justify-center after:bottom-[-4px] after:bg-[#FCFCFC] after:absolute after:w-[4px] after:h-[4px] after:rounded-[50%]"
    return (
        <nav className="max-[880px]:hidden">
            <ul className="flex text-[#FCFCFC] gap-[24px] font-[500] text-[16px]">
                {
                    menuLinks.map((link, index) => (
                        <li key={index}><NavLink className={({ isActive }) => isActive ? activeLink : ""} to={link.address}>{link.title}</NavLink></li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default MenuLinks