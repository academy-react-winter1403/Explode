import React, { Fragment, useState } from 'react'
import IconSet from './../shared/IconSet/index';
import Comment from '../Comment/inedx';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import CloseButton from './../CloseButton/index';
import { buildCommentTree } from './commentBuilder/buildCommentTree';
import { AddCommentCourse } from '../../core/services/courses';
import CreateComment from '../CreateComment';
import { AddCommentBlog } from '../../core/services/blogs';
import { fetchBlogComments, fetchBlogDetail } from '../../redux/blogSlice';

const SingleComments = ({ courseSingle, comments = [], title, singleId, userId }) => {
    const [step, setStep] = useState(3)
    const loading = useSelector((state) => state.courses.loading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [sendLoading, setSendLoading] = useState(false)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        if (isAuthenticated) {
            setShowCommentModal(!showCommentModal)
        }
        else {
            toast.error('برای نظر دادن باید لاگین کرده باشید')
        }
    }
    const treeData = buildCommentTree(comments);
    const [replyStatus, setReplyStatus] = useState(false)
    const handleOnSubmit = async (data) => {
        if (courseSingle) {
            AddCommentCourse(setSendLoading, { CourseId: singleId, Title: data.Title, Describe: data.Describe })
        }
        else {
            await AddCommentBlog(setSendLoading, { newsId: singleId, title: data.Title, describe: data.Describe, userId: userId })
            dispatch(fetchBlogComments(singleId))
        }

    }
    return (
        <Fragment>
            <div className='mt-[40px]'>
                <h2 className='text-[#707070] text-[20px] font-[700] mb-[25px]'>نظرات دانشجویان و اساتید</h2>
                <div className='flex max-[700px]:flex-col max-[700px]:items-center gap-[15px] items-start justify-between'>

                    <div onClick={handleOnClick} className='flex flex-col max-[700px]:w-[100%] items-center justify-center w-[324px] h-[282px] bg-primary text-[#fff] rounded-[24px] gap-[20px] cursor-pointer'>
                        <div className='flex flex-col items-center justify-center gap-[10px]'>
                            <IconSet imageAddress={'/src/assets/icons/add-comment.svg'} firstSize={32} secondSize={32} />
                            <span className='text-[18px] font-[600]'>نظر شما</span>
                        </div>
                        <span className='text-[14px] font-[500]'>برای نظر دادن کلیک کنید</span>
                    </div>

                    <div className='w-[80%] h-[100%] max-[700px]:justify-center max-[1360px]:justify-center  max-[700px]:w-[100%] flex gap-[10px] justify-between flex-wrap'>
                        {
                            loading ? 'loading' : treeData?.length > 0 ? (
                                treeData?.slice(0, step).map((item) => (
                                    <Comment
                                        key={item.id}
                                        addComment={false}
                                        comment={item}
                                        courseSingle={courseSingle}
                                    />
                                ))
                            ) : <div className='bg-[#FF5353] text-[#fff] font-bold p-[10px] text-center rounded-[10px] w-[100%]'>نظری یافت نشد</div>
                        }
                        {
                            treeData?.length > step ? <div className='flex w-[100%] justify-center mt-[20px]'>
                                <span onClick={() => setStep((prev) => prev + 3)} className='cursor-pointer p-[8px_16px] bg-thirdly rounded-[40px] text-[16px] font-[500] text-[#fff]'>مشاهده بیشتر</span>
                            </div> : ''
                        }
                    </div>
                </div>

            </div>

            {/* Comment Modal */}
            <div className={`${showCommentModal ? 'fixed' : 'hidden'}  top-0 left-0 w-[100%] h-[100%] flex items-center justify-center z-1000 bg-[rgb(0,0,0)]/50`}>
                <div className='w-[900px] h-[800px] bg-[#fff] rounded-[30px] overflow-hidden'>
                    <div className='flex p-[20px] justify-between items-center text-[24px] font-[700]'>
                        <div className='flex items-center gap-[10px]'><h2>نظرات دانشجویان و اساتید</h2><span className='text-[#707070] text-[18px] font-[700]'>( {title} )</span></div>
                        <CloseButton onClick={() => setShowCommentModal(!showCommentModal)} display='flex' />
                    </div>
                    <div className='flex mb-[10px] p-[0px_20px]'>
                        <span onClick={() => setReplyStatus(!replyStatus)} className='cursor-pointer text-[#fff] text-[16px] font-[500] flex items-center gap-[5px] p-[8px_12px] bg-primary rounded-[40px]'><IconSet imageAddress={'/src/assets/icons/add-comment.svg'} />نظر شما</span>
                    </div>
                    <div className={`h-[80%] overflow-auto p-[20px_20px_60px_20px] ${replyStatus ? 'hidden' : 'flex'} flex-col gap-[20px]`}>

                        {
                            loading ? 'loading' : treeData?.length > 0 ? (
                                treeData.map((item) => (
                                    <Comment
                                        key={item.id}
                                        comment={item}
                                        courseSingle={courseSingle}
                                        commentId={item.id}
                                        userId={userId}
                                        singleId={singleId}
                                    />
                                ))
                            ) : <div className='bg-[#FF5353] text-[#fff] font-bold p-[10px] text-center rounded-[10px] w-[100%]'>نظری یافت نشد</div>
                        }

                    </div>

                    <CreateComment
                        handleOnSubmit={handleOnSubmit}
                        replyStatus={replyStatus}
                        sendLoading={sendLoading}
                    />
                </div>
            </div>

        </Fragment>
    )
}

export default SingleComments