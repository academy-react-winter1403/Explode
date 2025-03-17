import { Link } from "react-router"
import lightInstaIcon from '../../../../../assets/img/light_instagram.png'
import lightTelegramIcon from '../../../../../assets/img/light_telegram.png'
import lightYoutubeIcon from '../../../../../assets/img/light_youtube.png'
import lightTwitterIcon from '../../../../../assets/img/light_twitter.png'
import instaIcon from '../../../../../assets/img/instagram.png'
import telegramIcon from '../../../../../assets/img/telegram.png'
import youtubeIcon from '../../../../../assets/img/youtube.png'
import twitterIcon from '../../../../../assets/img/twitter.png'
const Social = ({ customStyle, isFooter = false }) => {

    return (
        <div className={customStyle}>
            <Link className="bg-center bg-contain w-[24px] h-[24px] bg-no-repeat" style={{ backgroundImage: `url(${isFooter ? twitterIcon : lightTwitterIcon})` }}></Link>

            <Link className="bg-center bg-contain w-[24px] h-[24px] bg-no-repeat" style={{ backgroundImage: `url(${isFooter ? youtubeIcon : lightYoutubeIcon})` }}></Link>

            <Link className="bg-center bg-contain w-[24px] h-[24px] bg-no-repeat" style={{ backgroundImage: `url(${isFooter ? telegramIcon : lightTelegramIcon})` }}></Link>

            <Link className="bg-center bg-contain w-[24px] h-[24px] bg-no-repeat" style={{ backgroundImage: `url(${isFooter ? instaIcon : lightInstaIcon})` }}></Link>

        </div>
    )
}
export { Social }