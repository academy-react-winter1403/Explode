import React, { useState } from 'react'
import IconSet from './../shared/IconSet/index';
import Comment from '../Comment/inedx';

const SingleComments = ({ courseSingle, comments = [], loading }) => {
    const [step, setStep] = useState(3)
    return (
        <div className='mt-[40px]'>
            <h2 className='text-[#707070] text-[20px] font-[700] mb-[25px]'>نظرات دانشجویان و اساتید</h2>
            <div className='flex max-[700px]:flex-col max-[700px]:items-center gap-[15px] items-start justify-between'>
                <div className='flex flex-col max-[700px]:w-[100%] items-center justify-center w-[324px] h-[282px] bg-primary text-[#fff] rounded-[24px] gap-[20px] cursor-pointer'>
                    <div className='flex flex-col items-center justify-center gap-[10px]'>
                        <IconSet imageAddress={'/src/assets/icons/add-comment.svg'} firstSize={32} secondSize={32} />
                        <span className='text-[18px] font-[600]'>نظر شما</span>
                    </div>
                    <span className='text-[14px] font-[500]'>برای نظر دادن کلیک کنید</span>
                </div>
                <div className='w-[80%] h-[100%] max-[700px]:justify-center max-[1360px]:justify-center  max-[700px]:w-[100%] flex gap-[10px] justify-between flex-wrap'>
                    {
                        loading ? 'loading' : comments?.length > 0 ? (
                            comments?.slice(0, step).map((item) => (
                                <Comment
                                    key={item.id}
                                    title={item.title}
                                    describe={item.describe}
                                    likeCount={item.likeCount}
                                    disslikeCount={item.disslikeCount}
                                    author={item.author}
                                    date={courseSingle ? item.insertDate : item.inserDate}
                                    imageAddress={item.pictureAddress}
                                />
                            ))
                        ) : <div className='bg-[#FF5353] text-[#fff] font-bold p-[10px] text-center rounded-[10px] w-[100%]'>نظری یافت نشد</div>
                    }
                    {
                        comments?.length > step ? <div className='flex w-[100%] justify-center mt-[20px]'>
                            <span onClick={() => setStep((prev) => prev + 3)} className='cursor-pointer p-[8px_16px] bg-thirdly rounded-[40px] text-[16px] font-[500] text-[#fff]'>مشاهده بیشتر</span>
                        </div> : ''
                    }
                </div>
            </div>

        </div>
    )
}

export default SingleComments