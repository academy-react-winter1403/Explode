import React from 'react'
import IconSet from './../shared/IconSet/index';

const Comment = () => {
    return (
        <div className='w-[324px] max-[700px]:w-[100%]  p-[15px] bg-[#F6F6F6] rounded-[24px]'>
            <h2 className='mb-[15px] text-thirdly text-[18px] font-[700]'>خوب بود بد نبود</h2>
            <p className='text-[16px] font-[500] text-justify text-thirdly mb-[25px]'>
                واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن
            </p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <img className='w-[40px] h-[40px] rounded-full' src={""} alt={""} />
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-[14px] font-[600]'>امیر حسین سهر...</span>
                        <span className='text-[12px] font-[500] text-[#707070]'>Oct 12 2025</span>
                    </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <span className='flex items-center gap-[5px]'><IconSet className={'cursor-pointer'} imageAddress={'/src/assets/icons/like.svg'} /> <span>21</span> </span>
                    <span className='flex items-center gap-[5px]'><IconSet className={'cursor-pointer'} imageAddress={'/src/assets/icons/dislike.svg'} /> <span>12</span> </span>
                </div>

            </div>
        </div>
    )
}

export default Comment