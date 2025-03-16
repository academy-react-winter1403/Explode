import academyTitleImg from '../images/title.svg'
import academyLogoImg from '../images/logo.svg'
const HeaderLogo = () => {
    return (
        <div className="flex items-center">
            <img className='w-[42px] h-[40px]' src={academyLogoImg} alt="Bahr Academy" />
            <img className='w-[189px] h-[38px] relative top-[7px]' src={academyTitleImg} alt="Bahr Academy" />
        </div>
    )
}
export { HeaderLogo }