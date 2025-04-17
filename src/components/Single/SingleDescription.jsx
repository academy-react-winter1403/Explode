import parseToHtml from 'html-react-parser'
import IconSet from '../shared/IconSet'
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from 'react-router';
import { CopyLink } from '../../utils/CopyLink';
const SingleDescription = ({ detail, courseSingle, blogSingle }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const location = useLocation()
    const [copying, setCopying] = useState(false)
    const handleStarClick = (rating) => {
        console.log(rating)
    }
    const handleCopyLink = async () => {
        const linkToCopy = window.location.origin + location.pathname
        CopyLink(linkToCopy, setCopying)
    }

    return (
        <div className='mt-[20px]'>
            <h2 className='text-[#707070] text-[20px] font-[700] mb-[30px]'>توضیحات دوره</h2>
            <div className='text-thirdly text-[16px] font-[500] text-justify mb-[30px]'>
                {
                    detail?.describe ? parseToHtml(detail.describe) : <p>توضیحی برای این دوره ثبت نشده است</p>
                }
            </div>
            <div className='flex items-center gap-[15px] max-[600px]:flex-col max-[600px]:items-start'>
                <div className='flex items-center gap-[10px]'>
                    <span className='text-primary text-[16px] font-[600]'>امتیاز بدید</span>
                    {
                        Array(5).fill().map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <FaStar
                                    key={index}
                                    size={28}
                                    onClick={() => (setRating(starValue), handleStarClick(starValue))}
                                    onMouseEnter={() => setHover(starValue)}
                                    onMouseLeave={() => setHover(0)}
                                    className={`cursor-pointer transition-colors ${starValue <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
                                        }`}
                                />
                            );
                        })
                    }
                </div>
                <span onClick={handleCopyLink} className={`${blogSingle ? 'hidden max-[746px]:flex' : 'flex'}  p-[13.5px_44px] items-center gap-[10px] text-thirdly cursor-pointer font-[500] text-[15px] rounded-[48px] border-[1px] border-primary`}>
                    <IconSet imageAddress={'/src/assets/icons/copy-link.svg'} /> {copying ? 'درحال کپی' : 'کپی کردن لینک صفحه'}
                </span>
            </div>
        </div>
    )
}

export default SingleDescription