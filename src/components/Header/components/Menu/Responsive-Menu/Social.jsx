import { Link } from "react-router"
import lightInstaIcon from '/src/assets/icons/light_instagram.png'
import lightTelegramIcon from '/src/assets/icons/light_telegram.png'
import lightYoutubeIcon from '/src/assets/icons/light_youtube.png'
import lightTwitterIcon from '/src/assets/icons/light_twitter.png'
import instaIcon from '/src/assets/icons/instagram.png'
import telegramIcon from '/src/assets/icons/telegram.png'
import youtubeIcon from '/src/assets/icons/youtube.png'
import twitterIcon from '/src/assets/icons/twitter.png'
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