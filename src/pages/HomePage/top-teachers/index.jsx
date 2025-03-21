import { Link } from "react-router"
import IconSet from './../../../components/shared/IconSet/index';

const TopTeachers = () => {
    return (
        <section className="mb-[80px]  bg-thirdly rounded-[32px] m-[0_auto] p-[40px_16px]">
            <div className="max-w-[1360px] m-[0_auto] flex gap-[20px] items-center justify-between text-[#FCFCFC]">
                <div className="w-[527px]">
                    <h2 className="text-[24px] font-[700] mb-[20px]">اساتید برتر هفته آکادمی</h2>
                    <p className="text-[20px] font-[500] text-justify mb-[20px]">
                        در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
                    </p>
                    <Link className="p-[8px_16px] rounded-[40px] bg-primary" to={'/'}>صفحه اساتید</Link>
                </div>

                <div className="w-[768px] h-[356px] bg-[#353535] rounded-[24px] relative flex items-center">
                    <IconSet imageAddress={'/src/assets/icons/Star1.svg'} firstSize={43} secondSize={43} className={'absolute left-[40px] top-[-10px]'} />

                    <IconSet imageAddress={'/src/assets/icons/Star2.svg'} firstSize={43} secondSize={43} className={'absolute right-[10px] bottom-[-10px]'} />

                    <div className="relative w-full h-[158px] bg-contain bg-no-repeat bg-center bg-[url('/src/assets/img/blueLine.svg')]">
                        
                        <div className="w-[120px] h-[180px] bg-[red]">
                            
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default TopTeachers