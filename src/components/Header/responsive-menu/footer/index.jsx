import React from 'react'
import IconSet from '../../../shared/IconSet/index';
import { Link } from 'react-router';
const Footer = () => {
    const socialsLinks = [
        { address: '/', icon: '/src/assets/icons/instagram.svg' },
        { address: '/', icon: '/src/assets/icons/telegram.svg' },
        { address: '/', icon: '/src/assets/icons/youtube.svg' },
        { address: '/', icon: '/src/assets/icons/twitter.svg' },
    ]
    return (
        <footer className='flex items-center gap-[20px] justify-center'>
            {
                socialsLinks.map((link, index) => (
                    <Link key={index} to={link.address} className='w-[24px] h-[24px] flex items-center justify-center'><IconSet imageAddress={link.icon} /></Link>
                ))
            }
        </footer>
    )
}
export default Footer