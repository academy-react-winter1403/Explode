import React from 'react'
import { Link } from 'react-router'
const Menu = () => {
    const menuLinks = [
        { address: '/', title: 'خانه' },
        { address: '/courses', title: 'دوره ها' },
        { address: '/blogs', title: 'بلاگ ها' },
        { address: '/teachers', title: 'اساتید' },
        { address: '/about-us', title: 'درباره ما' },
        { address: '/contact-us', title: 'ارتباط ما' },
        { address: '/our-services', title: 'خدمات ما' },
    ]
    return (
        <nav className="max-[1210px]:w-[100%] max-[1210px]:mb-[50px]">
            <ul className=' font-[600] text-[18px] flex gap-[50px] text-thirdly flex-wrap justify-center'>
                {
                    menuLinks.map((link, index) => (
                        <li key={index}><Link to={link.address} className='border-b-[1px] border-[#FFFFFF] w-full block'>{link.title}</Link></li>
                    ))
                }
            </ul>
        </nav>
    )
}
export default Menu