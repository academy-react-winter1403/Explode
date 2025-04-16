import React from 'react'
import { ValidURL } from './../../utils/ValidUrl';
import SingleInfoTable from './SingleInfoTable';
import SingleInfoOverviewBar from './SingleInfoOverviewBar';
import SingleInfoFooter from './SingleInfoFooter';

const SingleInfo = ({ detail, blogSingle, courseSingle }) => {
    // : blogSingle && ValidURL(detail.currentImageAddressTumb) ? detail.currentImageAddressTumb : false
    const imageAddress = courseSingle && ValidURL(detail.imageAddress) && detail.imageAddress
    return (
        <div className='flex gap-[20px] justify-between items-center max-[1150px]:flex-col'>
            {/* Single Page Image */}
            <div className='w-[642px] h-[424px] max-[1150px]:w-[100%] rounded-[32px] flex items-center max-[1150px]:items-start justify-center overflow-hidden max-[1150px]:order-1'>
                <img className='rounded-[32px] ' src={imageAddress ? imageAddress : '/src/assets/img/not-set-image.jpg'} alt={detail?.title} />
            </div>

            {/* Single Page Info*/}
            <div className='w-[710px] max-[1150px]:w-[100%]'>
                <h2 className='font-[700] text-[32px] mb-[15px]'>{detail?.title}</h2>
                <SingleInfoTable
                    detail={detail}
                    courseSingle={courseSingle}
                    blogSingle={blogSingle}
                />
                <SingleInfoOverviewBar
                    rating={courseSingle ? detail.currentRate : 4}
                    commentCount={courseSingle ? detail.commentCount : 126}
                    courseCost={courseSingle && detail.cost}
                    courseSingle={courseSingle}
                />
                <SingleInfoFooter
                    courseSingle={courseSingle}
                    courseCost={courseSingle && detail.cost}
                />
            </div>


        </div>
    )
}

export default SingleInfo