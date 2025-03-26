import React from 'react'
import IconSet from './../../../components/shared/IconSet/index';

const OurServices = () => {
    const cards = [
        { title: "مدرک معتبر", description: "با مدرک ما میتوانید به راحتی در همه جا استخدام بشید", image: '/src/assets/icons/serv-1.svg', isActiveBorder: true },
        { title: "آزمون ها", description: "با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید", image: '/src/assets/icons/serv-2.svg' },
        { title: "مشاوره 24 ساعته", description: "مشاورین ما 24 ساعته جوابگو سوال های شما هستند", image: '/src/assets/icons/serv-3.svg' },
        { title: "فرصت‌های شغلی", description: "با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه", image: '/src/assets/icons/serv-4.svg' },
    ]
    return (
        <section className='mb-[80px]'>
            <h2 className='font-[700] text-[32px] text-center text-thirdly mb-[40px]'>خدماتی که ما در طی دوره‌ها <br /> به شما ارائه میدهیم</h2>
            <div className='flex flex-wrap max-w-[1360px] max-[1460px]:p-[0_16px]  m-[0_auto] gap-[20px] justify-between'>
                {
                    cards.map((item, index) => (
                        <div key={index} className='flex flex-wrap grow-1 p-[20px] items-center gap-[15px] w-[664px] bg-[#F6F6F6] min-h-[144px] rounded-[32px]'>
                            <div className={`flex items-center justify-center w-[88px] h-[88px] border-[2px] bg-[#FCFCFC] rounded-[50%] ${item.isActiveBorder ? "border-primary" : "border-[#DCDCDC]"} `}>
                                <IconSet imageAddress={item.image} firstSize={40} secondSize={40}/>
                            </div>
                            <div>
                                <h2 className='text-[20px] mb-[10px] font-[700] text-thirdly'>{item.title}</h2>
                                <p className='text-[#707070] text-[16px] font-[400]'>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default OurServices