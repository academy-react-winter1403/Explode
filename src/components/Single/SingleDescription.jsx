import parseToHtml from 'html-react-parser'
import IconSet from '../shared/IconSet'
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLocation } from 'react-router';
import { CopyLink } from '../../utils/CopyLink';
import { addCourseRate } from '../../core/services/courses';
import { useDispatch, useSelector } from 'react-redux';
import { updateCourseRate } from '../../redux/courseSlice';
import toast from 'react-hot-toast';
import { addBlogRate } from '../../core/services/blogs';
import { updateBlogRate } from '../../redux/blogSlice';
const SingleDescription = ({ detail, courseSingle, blogSingle }) => {
    const [hover, setHover] = useState(0);
    const location = useLocation()
    const [copying, setCopying] = useState(false)
    const [starLoading, setStarLoading] = useState(false)
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.auth)
    const handleStarClick = async (id, starRate) => {
        if (isAuthenticated) {
            setHover(0)
            if (courseSingle) {
                await addCourseRate(id, starRate, setStarLoading)
                dispatch(updateCourseRate({ rateNumber: starRate }))
            }
            else {
                const response = await addBlogRate(id, starRate, setStarLoading)
                response.message !== "هشدار ایجاد هرزنامه در دیتابیس" && dispatch(updateBlogRate({ rateNumber: starRate }))
            }
        }
        else {
            toast.error('برای ثبت امتیاز باید لاگین کرده باشید')
        }
    }
    const handleCopyLink = async () => {
        const linkToCopy = window.location.origin + location.pathname
        CopyLink(linkToCopy, setCopying)
    }

    return (
        <div className='mt-[20px]'>
            <h2 className='text-[#707070] text-[20px] font-[700] mb-[30px]'>توضیحات دوره</h2>
            <div className='text-thirdly text-[16px] font-[500] break-words	text-justify mb-[30px]'>
                {
                    detail?.describe ? parseToHtml(detail.describe) : <p>توضیحی برای این دوره ثبت نشده است</p>
                }
            </div>
            <div className='flex items-center gap-[15px] max-[600px]:flex-col max-[600px]:items-start'>
                <div className='flex items-center gap-[10px]'>
                    <span className='text-primary text-[16px] font-[600]'>امتیاز بدید</span>
                    {
                        starLoading ?
                            Array(5).fill().map((_, index) => {
                                return (
                                    <FaStar
                                        key={index}
                                        size={28}
                                        className={`cursor-pointer transition-colors animate-spin text-gray-300`}
                                    />
                                );
                            })
                            :
                            Array(5).fill().map((_, index) => {
                                const starValue = index + 1;
                                return (
                                    <FaStar
                                        key={index}
                                        size={28}
                                        onClick={() => handleStarClick(courseSingle ? detail.courseId : detail.id, starValue)}
                                        onMouseEnter={() => setHover(starValue)}
                                        onMouseLeave={() => setHover(0)}
                                        className={`cursor-pointer transition-colors ${starValue <= (hover || detail.currentUserRateNumber) ? "text-yellow-400" : "text-gray-300"
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