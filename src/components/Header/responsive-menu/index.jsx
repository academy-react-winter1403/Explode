import React from 'react'
import Header from './header'
import Menu from './menu'
import Footer from './Footer'
const ResponsiveMenu = ({ menuStatus, setMenuStatus }) => {
    return (
        <section className={`${menuStatus ? "fixed z-1000 bg-thirdly top-0 left-0 w-full h-full flex flex-col p-[16px]  justify-between" : "hidden"}`}>
            <Header menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
            <Menu />
            <Footer />
        </section>
    )
}
export default ResponsiveMenu