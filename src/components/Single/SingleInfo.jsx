import React from 'react'
import { ValidURL } from './../../utils/ValidUrl';

const SingleInfo = ({ detail, blogSingle, courseSingle }) => {
    const imageAddress = courseSingle && ValidURL(detail.imageAddress) ? detail.imageAddress : blogSingle && ValidURL(detail.currentImageAddressTumb) ? detail.currentImageAddressTumb : false
    return (
        <div className='flex gap-[10px] justift-between items-start '>
            <div className='w-[642px] h-[424px] flex items-center justify-center overflow-hidden '>
                <img className='rounded-[32px]' src={imageAddress ? imageAddress : '/src/assets/img/not-set-image.jpg'} alt={detail.title} />
            </div>

            <div className='w-[642px]'>
                <h2 className='font-[700] text-[32px]'>{detail.title}</h2>
            </div>
        </div>
    )
}

export default SingleInfo