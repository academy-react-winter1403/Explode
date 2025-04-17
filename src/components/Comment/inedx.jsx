import React from 'react'
import IconSet from './../shared/IconSet/index';
import { formatDate } from './../../utils/DateFormatter';
import { ValidURL } from '../../utils/ValidUrl';

const Comment = ({ title, describe, imageAddress, author, date, likeCount, disslikeCount }) => {
    const validImageAddress = ValidURL(imageAddress) ? imageAddress : '/src/assets/img/userprofile.png'
    console.log(date)
    return (
        <div className='w-[324px] max-[700px]:w-[100%]  p-[15px] bg-[#F6F6F6] rounded-[24px]'>
            <h2 title={title} className='mb-[15px] text-thirdly truncate text-[18px] font-[700]'>{title}</h2>
            <p title={describe} className='text-[16px] font-[500] text-justify text-thirdly truncate mb-[25px]'>
                {describe}
            </p>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-[10px]'>
                    <img className='w-[40px] h-[40px] rounded-full' src={validImageAddress} alt={title} />
                    <div className='flex flex-col gap-[5px]'>
                        <span className='text-[14px] font-[600]'>{author?.length > 10 ? author.slice(0, 10) + "..." : author}</span>
                        <span className='text-[12px] font-[500] text-[#707070]'>{formatDate(date)}</span>
                    </div>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <span className='flex items-center gap-[5px]'><IconSet className={'cursor-pointer'} imageAddress={'/src/assets/icons/like.svg'} /> <span>{likeCount}</span> </span>
                    <span className='flex items-center gap-[5px]'><IconSet className={'cursor-pointer'} imageAddress={'/src/assets/icons/dislike.svg'} /> <span>{disslikeCount}</span> </span>
                </div>

            </div>
        </div>
    )
}

export default Comment