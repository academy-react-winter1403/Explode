import { useState } from 'react';
import IconSet from './../../shared/IconSet/index';
import { useLocation } from 'react-router';
import { CopyLink } from '../../../utils/CopyLink';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseToFavoriteList, addDisLikeForCourse, addLikeForCourse } from '../../../core/services/courses';
import { FaSpinner } from 'react-icons/fa';
import { updateCourseLike, updateFavorite } from '../../../redux/courseSlice';
import { addBlogToFavoriteList, addDisLikeForBlog, addLikeForBlog } from '../../../core/services/blogs';
import { updateBlogFavorite, updateBlogLike } from '../../../redux/blogSlice';
import toast from 'react-hot-toast';

const SingleInfoFooter = ({ courseSingle, courseCost = 0, detail, id, isFavorite, blogSingle }) => {
    const location = useLocation()
    const [copying, setCopying] = useState(false)
    const dispatch = useDispatch()
    const [favoriteLoading, setFavoriteLoading] = useState(false)
    const { isAuthenticated } = useSelector((state) => state.auth)
    const courseFavorite = courseSingle ? isFavorite : false
    const blogFavorite = blogSingle ? isFavorite : false
    const [reservedModal, setReservedModal] = useState(false)
    const [likeLoading, setLikeLoading] = useState(false)
    const [disLikeLoading, setDisLikeLoading] = useState(false)

    const handleCopyLink = async () => {
        const linkToCopy = window.location.origin + location.pathname
        CopyLink(linkToCopy, setCopying)
    }

    const addToFavorite = async (id) => {
        if (isAuthenticated) {
            if (courseSingle) {
                await addCourseToFavoriteList(id, setFavoriteLoading)
                dispatch(updateFavorite({ favStatus: true }))
            }
            else {
                await addBlogToFavoriteList(id, setFavoriteLoading)
                dispatch(updateBlogFavorite({ favStatus: true }))
            }
        }
        else {
            toast.error('ابتدا وارد اکانت کاربری شوید')
        }
    }

    const courseReserve = async () => {
        if (isAuthenticated) {
            setReservedModal(!reservedModal)
        }
        else {
            toast.error('ابتدا وارد اکانت کاربری شوید')
        }
    }

    const like = async (id) => {
        if (isAuthenticated) {
            if (courseSingle) {
                await addLikeForCourse(id, setLikeLoading)
                dispatch(updateCourseLike({ type: 'like', currentUserLike: detail?.currentUserLike, currentUserDissLike: detail?.currentUserDissLike }))
            }
            else {
                await addLikeForBlog(id, setLikeLoading)
                dispatch(updateBlogLike({ type: 'like', currentUserIsLike: detail?.currentUserIsLike, currentUserIsDissLike: detail?.currentUserIsDissLike }))
            }
        }
        else {
            toast.error('ابتدا وارد اکانت کاربری شوید')
        }
    }

    const dislike = async (id) => {
        if (isAuthenticated) {
            if (courseSingle) {
                await addDisLikeForCourse(id, setDisLikeLoading)
                dispatch(updateCourseLike({ type: 'dislike', currentUserLike: detail?.currentUserLike, currentUserDissLike: detail?.currentUserDissLike }))
            }
            else {
                await addDisLikeForBlog(id, setDisLikeLoading)
                dispatch(updateBlogLike({ type: 'dislike', currentUserIsLike: detail?.currentUserIsLike, currentUserIsDissLike: detail?.currentUserIsDissLike }))
            }
        }
        else {
            toast.error('ابتدا وارد اکانت کاربری شوید')
        }
    }

    return (
        <div className={`flex ${courseSingle ? 'max-[710px]:justify-center' : 'max-[746px]:justify-center'}  max-[710px]:w-[100%] gap-[10px] items-center justify-between mt-[20px]`}>
            {/* Reserve / Copy Page Link*/}
            <div>
                {
                    courseSingle ?
                        <span onClick={() => courseReserve()} className=' max-[710px]:hidden flex p-[13.5px_44px] bg-primary text-[#fff] cursor-pointer font-[700] text-[15px] rounded-[48px] gap-[10px] items-center'>
                            <IconSet imageAddress={'/src/assets/icons/book.svg'} />رزرو دوره
                        </span> :
                        <span onClick={handleCopyLink} className='max-[746px]:hidden flex p-[13.5px_44px] items-center gap-[10px] text-thirdly cursor-pointer font-[500] text-[15px] rounded-[48px] border-[1px] border-primary'>
                            <IconSet imageAddress={'/src/assets/icons/copy-link.svg'} /> {copying ? 'درحال کپی' : 'کپی کردن لینک صفحه'}
                        </span>
                }
            </div>

            {/* Add To Favorite */}
            <div onClick={() => addToFavorite(id)} className={`flex p-[13.5px_44px]  items-center cursor-pointer gap-[10px] ${courseFavorite || blogFavorite ? 'bg-[#04bf3f]' : 'bg-thirdly'} text-[#fff] cursor-pointer font-[500] text-[15px] rounded-[48px]`}>
                {favoriteLoading ? <FaSpinner className='animate-spin' /> : <IconSet imageAddress={'/src/assets/icons/archive.svg'} />} {courseFavorite ? 'به مورد علاقه ها اضاف شد' : blogFavorite ? 'به  مورد علاقه ها اضاف شد' : 'اضاف به لیست علاقه مندی ها'}
            </div>

            {/* Like / Dislike */}
            <div className='flex items-center gap-[10px]'>
                <span onClick={() => like(id)} className={`${detail?.currentUserLike == "1" && isAuthenticated || detail?.currentUserIsLike && isAuthenticated ? 'bg-primary' : ''} w-[56px] h-[56px] border-[1px] border-[#DCDCDC] cursor-pointer rounded-full flex items-center justify-center`}>{likeLoading ? <FaSpinner className='animate-spin' /> : <IconSet imageAddress={`${detail?.currentUserLike == "1" && isAuthenticated || detail?.currentUserIsLike && isAuthenticated ? '/src/assets/icons/light-like.svg' : '/src/assets/icons/like.svg'}`} />}</span>
                <span onClick={() => dislike(id)} className={`${detail?.currentUserDissLike == "1" && isAuthenticated || detail?.currentUserIsDissLike && isAuthenticated ? 'bg-[#FF6C6C]' : ''} w-[56px] h-[56px] border-[1px] border-[#DCDCDC] cursor-pointer rounded-full flex items-center justify-center`}>{disLikeLoading ? <FaSpinner className='animate-spin' /> : <IconSet imageAddress={`${detail?.currentUserDissLike == "1" && isAuthenticated || detail?.currentUserIsDissLike && isAuthenticated ? '/src/assets/icons/light-disslike.png' : '/src/assets/icons/dislike.svg'}`} />}</span>
            </div>

            {/* Reserve (Responsive) */}
            {
                courseSingle &&
                <div className='p-[10px_10px] shadow-[0_-3px_20px_#e2e2e2] fixed max-[710px]:flex  hidden z-800 bottom-0 right-0 flex items-center h-[70px] w-[100%] bg-[#fff] justify-between'>
                    <span onClick={() => courseReserve()} className=' flex p-[13.5px_44px] bg-primary text-[#fff] cursor-pointer font-[700] text-[15px] rounded-[48px] gap-[10px] items-center'>
                        <IconSet imageAddress={'/src/assets/icons/book.svg'} />رزرو دوره
                    </span>
                    <span className='text-[16px] font-[500] text-thirdly hidden max-[710px]:block'><span className='text-[24px] font-[700]'>{courseCost}</span> تومان</span>
                </div>
            }

            {/* Reserved Modal */}
            <div className={`${reservedModal ? 'fixed' : 'hidden'} top-0 left-0 w-[100%] h-[100%] flex items-center justify-center z-1000 bg-[rgb(0,0,0)]/50`}>
                <div className='w-[600px] max-[700px]:w-[95%] h-[70%] bg-[#fff] p-[10px] rounded-[30px] flex flex-col items-center'>
                    <h2 className='font-[700] text-[20px] text-primary'>دوره به لیست رزروی های شما اضافه شد!</h2>

                    <div className='h-[100%]'>

                    </div>

                    <div className='flex items-center justify-between w-[100%]'>
                        <div className='p-[9px_75px] rounded-[40px] text-[#fff] bg-primary font-[700] text-[20px] cursor-pointer'>رزرو من</div>
                        <div onClick={() => setReservedModal(!reservedModal)} className='p-[9px_58px] rounded-[40px] text-[#fff] bg-[#DCDCDC] font-[700] text-thirdly cursor-pointer'>باشه</div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SingleInfoFooter