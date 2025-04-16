import React from 'react'
import IconSet from './../../shared/IconSet/index';

const SingleInfoFooter = ({ courseSingle, courseCost = 0 }) => {
    return (
        <div className={`flex ${courseSingle ? 'max-[710px]:justify-center': 'max-[746px]:justify-center'}  max-[710px]:w-[100%] gap-[10px] items-center justify-between mt-[20px]`}>
            <div>
                {
                    courseSingle ?
                        <span className=' max-[710px]:hidden flex p-[13.5px_44px] bg-primary text-[#fff] cursor-pointer font-[700] text-[15px] rounded-[48px] gap-[10px] items-center'>
                            <IconSet imageAddress={'/src/assets/icons/book.svg'} />رزرو دوره
                        </span> :
                        <span className='max-[746px]:hidden flex p-[13.5px_44px] items-center gap-[10px] text-thirdly cursor-pointer font-[500] text-[15px] rounded-[48px] border-[1px] border-primary'>
                            <IconSet imageAddress={'/src/assets/icons/copy-link.svg'} /> کپی کردن لینک صفحه
                        </span>
                }
            </div>
            <div className='flex p-[13.5px_44px]  items-center cursor-pointer gap-[10px] bg-thirdly text-[#fff] cursor-pointer font-[500] text-[15px] rounded-[48px]'>
                <IconSet imageAddress={'/src/assets/icons/archive.svg'} /> اضافه به لیست مورد علاقه
            </div>
            <div className='flex items-center gap-[10px]'>
                <span className='w-[56px] h-[56px] border-[1px] border-[#DCDCDC] cursor-pointer rounded-full flex items-center justify-center'><IconSet imageAddress={'/src/assets/icons/like.svg'} /></span>
                <span className='w-[56px] h-[56px] border-[1px] border-[#DCDCDC] cursor-pointer rounded-full flex items-center justify-center'><IconSet imageAddress={'/src/assets/icons/dislike.svg'} /></span>
            </div>

            {
                courseSingle &&
                <div className='p-[10px_10px] shadow-[0_-3px_20px_#e2e2e2] fixed max-[710px]:flex  hidden z-800 bottom-0 right-0 flex items-center h-[70px] w-[100%] bg-[#fff] justify-between'>
                    <span className=' flex p-[13.5px_44px] bg-primary text-[#fff] cursor-pointer font-[700] text-[15px] rounded-[48px] gap-[10px] items-center'>
                        <IconSet imageAddress={'/src/assets/icons/book.svg'} />رزرو دوره
                    </span>
                    <span className='text-[16px] font-[500] text-thirdly max-[500px]:hidden'><span className='text-[24px] font-[700]'>{courseCost}</span> تومان</span>
                </div>
            }
        </div>
    )
}

export default SingleInfoFooter