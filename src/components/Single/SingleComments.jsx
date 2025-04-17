import React from 'react'
import IconSet from './../shared/IconSet/index';
import Comment from '../Comment/inedx';

const SingleComments = () => {
    return (
        <div className='mt-[40px]'>
            <h2 className='text-[#707070] text-[20px] font-[700] mb-[25px]'>نظرات دانشجویان و اساتید</h2>
            <div className='flex  gap-[15px] items-start justify-between'>
                <div className='flex flex-col items-center justify-center w-[324px] h-[282px] bg-primary text-[#fff] rounded-[24px] gap-[20px] cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-[10px]'>
                        <IconSet imageAddress={'/src/assets/icons/add-comment.svg'} firstSize={32} secondSize={32} />
                        <span className='text-[18px] font-[600]'>نظر شما</span>
                    </div>
                    <span className='text-[14px] font-[500]'>برای نظر دادن کلیک کنید</span>
                </div>
                <div className='w-[80%] h-[100%] flex gap-[10px] justify-between flex-wrap'>
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
            <div className='flex justify-center mt-[20px]'><span className='cursor-pointer p-[8px_16px] bg-thirdly rounded-[40px] text-[16px] font-[500] text-[#fff]'>مشاهده بیشتر</span></div>
        </div>
    )
}

export default SingleComments