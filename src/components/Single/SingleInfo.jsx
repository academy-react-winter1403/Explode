import React from 'react'
import { ValidURL } from './../../utils/ValidUrl';
import SingleInfoTable from './SingleInfoTable';
import SingleInfoOverviewBar from './SingleInfoOverviewBar';
import SingleInfoFooter from './SingleInfoFooter';

const SingleInfo = ({ detail, blogSingle, courseSingle }) => {
    const imageAddress = courseSingle && ValidURL(detail.imageAddress) ? detail.imageAddress : blogSingle && ValidURL(detail.currentImageAddressTumb) ? detail.currentImageAddressTumb : false
    return (
        <div className='flex gap-[20px] justify-between items-center max-[1150px]:flex-col'>
            {/* Single Page Image */}
            <div className='w-[642px] h-[auto] max-[1150px]:w-[100%] rounded-[32px] flex items-center max-[1150px]:items-start justify-center overflow-hidden max-[1150px]:order-1'>
                <img className={`rounded-[32px] ${imageAddress ? '' : 'h-[100px]'}`} src={imageAddress ? imageAddress : '/src/assets/img/not-set-image.jpg'} alt={detail?.title} />
            </div>

            {/* Single Page Info*/}
            <div className='w-[710px] max-[1150px]:w-[100%]'>
                <h2 title={detail?.title} className='font-[700] text-[32px] mb-[15px]  break-words '>{detail?.title}</h2>
                <SingleInfoTable
                    detail={detail}
                    courseSingle={courseSingle}
                    blogSingle={blogSingle}
                />
                <SingleInfoOverviewBar
                    rating={courseSingle ? detail.currentRate : detail?.currentRate}
                    commentCount={courseSingle ? detail.commentCount : detail?.commentsCount}
                    courseCost={courseSingle && detail.cost}
                    courseSingle={courseSingle}
                />
                <SingleInfoFooter
                    courseSingle={courseSingle}
                    courseCost={courseSingle && detail.cost}
                    id={courseSingle ? detail?.courseId : detail?.id}
                    isFavorite={courseSingle ? detail?.isUserFavorite : detail.isCurrentUserFavorite}
                    blogSingle={blogSingle}
                    detail={detail}
                />
            </div>


        </div>
    )
}

export default SingleInfo