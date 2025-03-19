import academyTitleImg from '/src/assets/img/title.svg'
import academyLogoImg from '/src/assets/img/logo.svg'
import IconSet from './../../../shared/IconSet/index';
const WebSiteLogo = ({ logoTileStatus, customStyle }) => {
    return (
        <div className={`flex items-center ${customStyle}`} >
            <IconSet imageAddress={academyLogoImg} firstSize={42} secondSize={40} />
            <IconSet imageAddress={academyTitleImg} firstSize={170} secondSize={38} className={`relative top-[7px] ${logoTileStatus}`} />
        </div>
    )
}
export { WebSiteLogo }