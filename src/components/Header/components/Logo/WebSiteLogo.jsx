import academyTitleImg from '../../../../assets/img/title.svg'
import academyLogoImg from '../../../../assets/img/logo.svg'
const WebSiteLogo = ({ logoTileStatus, customStyle }) => {
    return (
        <div className={`flex items-center ${customStyle}`} >
            <span className={`w-[42px] h-[40px] bg-center bg-contain bg-no-repeat`} style={{ backgroundImage: `url(${academyLogoImg})` }}></span>
            <span className={`w-[150px] h-[38px] relative top-[7px] bg-no-repeat bg-center bg-contain ${logoTileStatus}`} style={{ backgroundImage: `url(${academyTitleImg})` }}></span>
        </div>
    )
}
export { WebSiteLogo }