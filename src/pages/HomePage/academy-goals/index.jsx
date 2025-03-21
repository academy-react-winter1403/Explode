
import IconSet from '../../../components/shared/IconSet/index';

const AcademyGoals = () => {
    const cards = [
        { title: 'استعداد یابی', description: "یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...", image: '/src/assets/img/goal1.svg', isActiveBorder: true },
        { title: 'راهنمایی و ایجاد انگیزه', description: "آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش", image: '/src/assets/img/goal2.svg' },
        { title: 'آموزش‌های تخصصی', description: "کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و ...", image: '/src/assets/img/goal3.svg' },
        { title: 'آماده سازی برای بازار کار', description: "جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها", image: '/src/assets/img/goal4.svg' },
    ]

    return (
        <section className="m-[80px_0]">
            <h2 className="font-[700] text-[32px] text-center text-thirdly mb-[40px]">اهداف ما در آکادمی</h2>
            <div className="max-w-[1461px] bg-[url(/src/assets/img/goals-bg.svg)] max-[1460px]:bg-[url('')] m-[0_auto] bg-contain bg-center bg-no-repeat" >
                <div className=" max-w-[1361px] max-[1360px]:justify-center max-[1460px]:gap-[10px] max-[1460px]:p-[0_16px] max-[700px]:justify-center flex flex-wrap items-center m-[0_auto]  justify-between">
                    {
                        cards.map((item, index) => (
                            <div key={index} className={`max-[700px]:items-center max-[700px]:max-w-[100%] max-w-[321px]  flex flex-col justify-between p-[20px] h-[443px] border-[#DCDCDC] ${item.isActiveBorder ? "border-primary" : "border-[#DCDCDC]"} border-[2px] bg-[#FCFCFC] rounded-[24px]`}>
                                <h2 className="text-[20px] font-[700] max-[700px]:w-[100%] max-[700px]:text-right">{item.title}</h2>
                                <p className="text-[16px] font-[500] text-[#7E7E7E] leading-[26px] max-[700px]:w-[100%] max-[700px]:text-right">{item.description}</p>
                                <img src={item.image} alt={item.title} className='w-[260px] h-[236px]' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default AcademyGoals