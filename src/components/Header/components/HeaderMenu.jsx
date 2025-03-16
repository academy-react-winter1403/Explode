import { Link } from "react-router";
const HeaderMenu = () => {
    return (
        <nav className="p-[4px_24px_4px_4px] bg-[#2F2F2F] rounded-[56px] flex gap-[32px] text-[#fff] items-center">
            <ul className="flex gap-[32px]">
                <li><Link>خانه</Link></li>
                <li><Link>دوره ها</Link></li>
                <li><Link>بلاگ ها</Link></li>
                <li><Link>درباره ما</Link></li>
            </ul>
            <Link className="bg-[#3772FF] rounded-[56px] p-[8px_16px]">ثبت نام یا ورود</Link>
        </nav>
    )
}
export { HeaderMenu }