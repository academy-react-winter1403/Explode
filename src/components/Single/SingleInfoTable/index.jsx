import React from 'react'
import { formatDate } from './../../../utils/DateFormatter';

const SingleInfoTable = ({ detail, blogSingle, courseSingle }) => {
    return (
        <div >
            <div className='flex m-h-[80px] rounded-[16px] mb-[20px] max-[750px]:flex-col max-[750px]:gap-[20px]'>
                <div className='flex max-[1150px]:w-[100%]'>

                    <div className='border-[#DCDCDC] border-[2px] rounded-r-[16px] p-[10px] w-[160px] max-[1150px]:w-[50%]'>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>{courseSingle ? 'وضعیت' : 'دسته بندی'}</h2>
                        <span className={`${courseSingle ? 'bg-[#FF5353]' : 'bg-primary'} text-[#fff] rounded-[32px] p-[3px_8px] text-[16px] font-[500]`}>
                            {
                                courseSingle ? detail?.courseStatusName : detail?.newsCatregoryName
                            }
                        </span>
                    </div>

                    <div className={`border-[#DCDCDC] border-[2px] border-r-[0px] p-[10px] w-[160px] max-[1150px]:w-[50%] max-[750px]:rounded-l-[16px]`}>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>{courseSingle ? 'دسته بندی' : 'مشترک کننده'}</h2>
                        <span className={`${courseSingle ? 'bg-primary text-[#fff]' : 'bg-[transparent] text-thirdly'} rounded-[32px] p-[3px_8px] text-[16px] font-[500]`}>
                            {
                                courseSingle ? Array.isArray(detail?.techs) && detail.techs.length > 0 ? detail.techs[0] : '' : detail?.addUserFullName
                            }
                        </span>
                    </div>
                </div>

                <div className='flex max-[1150px]:w-[100%]'>
                    <div className='border-[#DCDCDC] border-[2px] border-r-[0px] p-[10px] w-[160px] max-[1150px]:w-[50%] max-[750px]:rounded-r-[16px] max-[750px]:border-r-[2px]'>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>{courseSingle ? 'سطح آموزش' : 'تاریخ انتشار '}</h2>
                        <span className={`${courseSingle ? 'bg-[#FF37F5] text-[#fff]' : 'bg-[transparent] text-thirdly'} rounded-[32px] p-[3px_8px] text-[16px] font-[500]`}>
                            {courseSingle ? detail?.courseLevelName : detail && formatDate(detail.insertDate)}
                        </span>
                    </div>

                    <div className='border-[#DCDCDC] border-[2px] border-r-[0px] p-[10px] rounded-l-[16px] w-[230px] max-[1150px]:w-[50%]'>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>{courseSingle ? 'استاد دوره' : 'بازدید کنندگان'}</h2>
                        <span className=' text-thirdly  p-[3px_8px] text-[16px] font-[500]'>
                            {courseSingle ? detail?.teacherName : detail?.currentView}
                        </span>
                    </div>
                </div>

            </div>

            <div className='flex rounded-[16px] mb-[20px] max-[750px]:flex-col max-[750px]:gap-[20px]'>
                {
                    courseSingle && <div className='flex max-[1150px]:w-[100%]'>
                        <div className='border-[#DCDCDC] border-[2px] rounded-r-[16px] p-[10px] w-[160px] max-[1150px]:w-[50%] '>
                            <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>تاریخ برگزاری</h2>
                            <span className=' text-thirdly  p-[3px_8px] text-[16px] font-[500]'>{formatDate(detail?.startTime)}</span>
                        </div>
                        <div className='border-[#DCDCDC] border-[2px] border-r-[0px] p-[10px] w-[160px] max-[1150px]:w-[50%] max-[750px]:rounded-l-[16px]'>
                            <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>تاریخ اتمام</h2>
                            <span className=' text-thirdly  p-[3px_8px] text-[16px] font-[500]'>{formatDate(detail?.endTime)}</span>
                        </div>
                    </div>
                }

                <div className='flex max-[1150px]:w-[100%]'>
                    <div className={`max-[1150px]:w-[50%] border-[#DCDCDC] border-[2px] border-r-[0px] ${blogSingle && 'border-r-[2px] rounded-r-[16px]'} p-[10px] w-[160px] max-[750px]:rounded-r-[16px] max-[750px]:border-r-[2px]`}>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>تعداد لایک</h2>
                        <span className=' text-thirdly  p-[3px_8px] text-[16px] font-[500]'>
                            {courseSingle ? detail?.likeCount : detail?.currentLikeCount}
                        </span>
                    </div>
                    <div className='border-[#DCDCDC] border-[2px] border-r-[0px] p-[10px] rounded-l-[16px] w-[230px] max-[1150px]:w-[50%] '>
                        <h2 className='mb-[10px] text-[#707070] text-[14px] font-[500]'>تعداد دیسلایک</h2>
                        <span className=' text-thirdly  p-[3px_8px] text-[16px] font-[500]'>
                            {courseSingle ? detail?.dissLikeCount : detail?.currentDissLikeCount}
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SingleInfoTable