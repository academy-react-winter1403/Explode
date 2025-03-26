import React from 'react'
import { Link } from 'react-router'
const Menu = () => {
    const menuLinks = [
        { address: '/', title: 'خانه' },
        { address: '/courses', title: 'دوره ها' },
        { address: '/blogs', title: 'بلاگ ها' },
        { address: '/about-us', title: 'درباره ما' },
        { address: '/contact-us', title: 'ارتباط ما' },
    ]

    return (
        <nav className='w-full'>
            <ul className='text-[#FCFCFC] font-[700] text-[32px] flex flex-col gap-[20px]'>
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