import React, { useState } from 'react'
import IconSet from '../../shared/IconSet'
import { useDispatch, useSelector } from 'react-redux'
import CloseButton from './../../CloseButton/index';
import Comment from '../../Comment/inedx';
import { AddCommentCourse } from '../../../core/services/courses';
import { AddCommentBlog } from '../../../core/services/blogs';
import CreateComment from '../../CreateComment';
import toast from 'react-hot-toast';
import { fetchBlogComments, setBlogId } from '../../../redux/blogSlice';


const ShowAllComments = ({ title, courseSingle, singleId, userId }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [replyStatus, setReplyStatus] = useState(false)
    const [sendLoading, setSendLoading] = useState(false)
    const allComments = courseSingle ? useSelector((state) => state.courses.allComments) : useSelector((state) => state.blogs.blogAllComments)
    const dispatch = useDispatch()
    console.log(allComments)
    const handleOnClick = () => {
        isAuthenticated ? setShowCommentModal(!showCommentModal) : toast.error('برای نظر دادن باید لاگین کرده باشید')
    }

    const handleOnSubmit = async (data) => {
        if (courseSingle) {
            AddCommentCourse(setSendLoading, { CourseId: singleId, Title: data.Title, Describe: data.Describe })
        }
        else {
            await AddCommentBlog(setSendLoading, { newsId: singleId, title: data.Title, describe: data.Describe, userId: userId })
            dispatch(setBlogId(singleId))
            dispatch(fetchBlogComments())
        }

    }


    return (

        <>
            <div onClick={(handleOnClick)} className='flex flex-col max-[700px]:w-[100%] items-center justify-center w-[324px] h-[282px] bg-primary text-[#fff] rounded-[24px] gap-[20px] cursor-pointer'>
                <div className='flex flex-col items-center justify-center gap-[10px]'>
                    <IconSet imageAddress={'/src/assets/icons/add-comment.svg'} firstSize={32} secondSize={32} />
                    <span className='text-[18px] font-[600]'>نظر شما</span>
                </div>
                <span className='text-[14px] font-[500]'>برای نظر دادن کلیک کنید</span>
            </div>


            {/* Comment Modal */}
            <div className={`${showCommentModal ? 'fixed' : 'hidden'}  top-0 left-0 w-[100%] h-[100%] flex items-center justify-center z-1000 bg-[rgb(0,0,0)]/50`}>
                <div className='w-[900px] h-[90%] bg-[#fff] rounded-[30px] overflow-hidden'>
                    <div className='flex p-[20px] justify-between items-center text-[24px] font-[700]'>
                        <div className='flex items-center gap-[10px]'><h2>نظرات دانشجویان و اساتید</h2><span className='text-[#707070] text-[18px] font-[700]'>( {title} )</span></div>
                        <CloseButton onClick={() => setShowCommentModal(!showCommentModal)} display='flex' />
                    </div>
                    <div className='flex mb-[10px] p-[0px_20px]'>
                        <span onClick={() => setReplyStatus(!replyStatus)} className={` ${replyStatus ? 'bg-[#FF6C6C]' : 'bg-primary'}  cursor-pointer text-[#fff] text-[16px] font-[500] flex items-center gap-[5px] p-[8px_12px] rounded-[40px]`}><IconSet imageAddress={'/src/assets/icons/add-comment.svg'} />{replyStatus ? 'بستن' : 'نظر شما'}</span>
                    </div>
                    <div className={`h-[80%] overflow-auto p-[20px_20px_60px_20px] ${replyStatus ? 'hidden' : 'flex'} flex-col gap-[20px]`}>

                        {
                            allComments?.map((item) => (
                                <Comment
                                    comment={item}
                                    isInModal={true}
                                    courseSingle={courseSingle}
                                    singleId={singleId}
                                    userId={userId}
                                />
                            ))
                        }

                    </div>

                    {/* Create Comment */}
                    <CreateComment
                        handleOnSubmit={handleOnSubmit}
                        replyStatus={replyStatus}
                        sendLoading={sendLoading}
                    />
                </div>
            </div>
        </>



    )
}

export default ShowAllComments