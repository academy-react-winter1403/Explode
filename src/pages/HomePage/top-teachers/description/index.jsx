import { Link } from 'react-router'
const Description = () => {
    return (
        <div className="w-[527px] max-[1170px]:w-[100%] max-[1170px]:text-center max-[1170px]:mb-[20px]">
            <h2 className="text-[24px] font-[700] mb-[20px]">اساتید برتر هفته آکادمی</h2>
            <p className="text-[20px] font-[500] text-justify mb-[40px]">
                در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
            </p>
            <Link className="p-[8px_16px] rounded-[40px] font-[500] text-[16px] bg-primary" to={'/'}>صفحه اساتید</Link>
        </div>
    )
}
export default Description