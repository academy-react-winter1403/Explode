import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const SingleInfoOverviewBar = ({ rating = 0, maxRange = 5, commentCount = 0, courseCost=0, courseSingle }) => {
    const stars = [];
    for (let index = 1; index <= maxRange; index++) {
        stars.push(
            <span key={index} className="mx-0.5">
                {index <= rating ? (
                    <AiFillStar className="text-yellow-400" size={28} />
                ) : (
                    <AiFillStar className="text-gray-300" size={28} />
                )}
            </span>
        );
    }

    return (
        <div className="flex items-center justify-between mb-[10px]">
            <div className='flex items-center gap-[10px]'>
                <span className="text-[16px] font-[500] text-thirdly">({rating})</span>
                <div className='flex flex-row-reverse'>
                    {stars}
                </div>
                <span className='flex gap-[5px] text-[16px] font-[500] text-thirdly'>
                    +
                    <span>
                        ({commentCount}) نظرات
                    </span>
                </span>
            </div>
            {
                courseSingle && <span className=' max-[710px]:hidden text-[16px] font-[500] text-thirdly max-[500px]:hidden'><span className='text-[24px] font-[700]'>{courseCost}</span> تومان</span>
            }
        </div>
    );
};

export default SingleInfoOverviewBar;
