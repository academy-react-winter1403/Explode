import academyTitleImg from '../../images/title.svg'
import academyLogoImg from '../../images/logo.svg'
const WebSiteLogo = ({ logoTileStatus, customStyle }) => {
    return (
        <div className={`flex items-center ${customStyle}`}>
            <img className='w-[42px] h-[40px]' src={academyLogoImg} alt="Bahr Academy" />
            <img className={`w-[150px] h-[38px] relative top-[7px]  ${logoTileStatus}`} src={academyTitleImg} alt="Bahr Academy" />
        </div>
    )
}
export { WebSiteLogo }