import React, { Fragment, useEffect, useState } from 'react'
import IconSet from './../shared/IconSet/index';
import { formatDate } from './../../utils/DateFormatter';
import { ValidURL } from '../../utils/ValidUrl';
import CreateComment from '../CreateComment';
import { addBlogReplyComment, addDissLikeForBlogComment } from '../../core/services/blogs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogComments, updateBlogCommentLikeCount } from '../../redux/blogSlice';
import { addCommentReplyCourse, addDissLikeForCourseComment, addLikeForCourseComment } from '../../core/services/courses';
import { updateCourseCommentLikeCount } from '../../redux/courseSlice';
import toast from 'react-hot-toast';
import { FaSpinner } from 'react-icons/fa';
const Comment = ({ isAuthenticated, comment, addComment = true, children, courseSingle, commentId, userId, singleId }) => {
    const validImageAddress = ValidURL(comment?.pictureAddress) ? comment?.pictureAddress : '/src/assets/img/userprofile.png'
    const insertDate = courseSingle ? comment?.insertDate : comment?.inserDate
    const [replyStatus, setReplyStatus] = useState(false)
    const [sendLoading, setSendLoading] = useState(false)
    const dispatch = useDispatch()
    const [likeLoading, setLikeLoading] = useState(false)
    const [dissLikeLoading, setDissLikeLoading] = useState(false)
    const handleOnSubmit = async (values) => {
        if (courseSingle) {
            addCommentReplyCourse(setSendLoading, { CommentId: values.commentId, CourseId: singleId, Title: values.Title, Describe: values.Describe })

        }
        else {
            await addBlogReplyComment(setSendLoading, { newsId: singleId, title: values.Title, describe: values.Describe, userId: userId, parentId: values.commentId })
            dispatch(fetchBlogComments(singleId))
        }
    }

    const likeComment = async (comment) => {
        if (isAuthenticated) {
            if (courseSingle) {

                await addLikeForCourseComment(comment.id, setLikeLoading)
                dispatch(updateCourseCommentLikeCount({ commentId: comment.id, type: "like", currentEmotion: comment.currentUserEmotion }));

            }
            else {
                if (comment.currentUserIsLike) return;
                await addDissLikeForBlogComment(comment.id, true, setLikeLoading)
                dispatch(updateBlogCommentLikeCount({ commentId: comment.id, type: "like", currentUserIsDissLike: comment.currentUserIsDissLike, currentUserIsLike: comment.currentUserIsLike }))
            }
        }
        else {
            toast.error('برای لایک یا دیسلایک باید لاگین باشید')
        }
    }

    const dissLike = async (comment) => {
        if (isAuthenticated) {
            if (courseSingle) {
                await addDissLikeForCourseComment(comment.id, setDissLikeLoading)
                dispatch(updateCourseCommentLikeCount({ commentId: comment.id, type: "dissLike", currentEmotion: comment.currentUserEmotion }));
            }
            else {
                if (comment.currentUserIsDissLike) return;
                await addDissLikeForBlogComment(comment.id, false, setDissLikeLoading)
                dispatch(updateBlogCommentLikeCount({ commentId: comment.id, type: "dissLike", currentUserIsDissLike: comment.currentUserIsDissLike, currentUserIsLike: comment.currentUserIsLike }))

            }
        }
        else {
            toast.error('برای لایک یا دیسلایک باید لاگین باشید')
        }
    }

    return (
        <div className={`${addComment ? 'w-[100%] border-b-[1px] border-[#DCDCDC]' : 'w-[324px] bg-[#F6F6F6] rounded-[24px]'} flex flex-col gap-[10px] max-[700px]:w-[100%]  p-[15px]  `}>
            {
                children
            }

            {/* Main Comments List*/}
            <div className={'flex flex-col w-[100%]'}>
                <div className={`${addComment && 'order-2'}`}>
                    <h2 title={comment?.title} className={`mb-[15px] text-thirdly truncate text-[18px] font-[700] `}>{comment?.title}</h2>
                    <p title={comment?.describe} className={`text-[16px] font-[500] text-justify text-thirdly break-words mb-[25px] `}>
                        {comment?.describe}
                    </p>
                </div>
                <div className={`flex  items-center justify-between ${addComment && 'order-3'}`}>
                    <div className={`flex items-center gap-[10px] ${addComment && 'hidden'}`}>
                        <img className='w-[40px] h-[40px] rounded-full' src={validImageAddress} alt={comment?.title} />
                        <div className='flex flex-col gap-[5px]'>
                            <span className='text-[14px] font-[600]'>{courseSingle ? (comment?.author?.length > 10 ? comment.author.slice(0, 10) + "..." : comment?.autor) : comment?.autor?.length > 10 ? comment.autor.slice(0, 10) + "..." : comment?.autor}</span>
                            <span className='text-[12px] font-[500] text-[#707070]'>{formatDate(insertDate)}</span>
                        </div>
                    </div>
                    <div className={`flex items-start  gap-[10px] ${addComment && 'w-[100%]'}`}>
                        <span className='flex items-center gap-[5px]' ><span className={`${comment?.currentUserEmotion == 'LIKED' && isAuthenticated || comment?.currentUserIsLike && isAuthenticated ? 'bg-primary ' : ''} p-[5px] rounded-full`} onClick={() => likeComment(comment)}>{likeLoading ? <FaSpinner className="animate-spin" /> : <IconSet className={`cursor-pointer`} imageAddress={`${comment?.currentUserEmotion == "LIKED" && isAuthenticated || comment?.currentUserIsLike && isAuthenticated ? '/src/assets/icons/light-like.svg' : '/src/assets/icons/like.svg'}`} />}</span> <span>{comment?.likeCount || 0}</span> </span>
                        <span className='flex items-center gap-[5px]'><span className={`${comment?.currentUserEmotion == 'DISSLIKED' && isAuthenticated || comment?.currentUserIsDissLike && isAuthenticated ? 'bg-[#FF6C6C] ' : ''} p-[5px] rounded-full`} onClick={() => dissLike(comment)}>{dissLikeLoading ? <FaSpinner className="animate-spin" /> : <IconSet className={'cursor-pointer '} imageAddress={`${comment?.currentUserEmotion == "DISSLIKED" && isAuthenticated || comment?.currentUserIsDissLike && isAuthenticated ? '/src/assets/icons/light-disslike.png' : '/src/assets/icons/dislike.svg'}`} />}</span> <span>{courseSingle ? comment?.disslikeCount : comment?.dissLikeCount || 0}</span> </span>
                        {
                            addComment && (
                                <Fragment>
                                    <span onClick={() => setReplyStatus(!replyStatus)} className={`${replyStatus ? 'hidden' : 'block'} mr-[10px] cursor-pointer border-[1px] rounded-[40px] border-primary p-[8px_12px] text-[16px] font-[500] text-primary`}>جواب دادن</span>
                                    <CreateComment
                                        replyStatus={replyStatus}
                                        handleOnSubmit={handleOnSubmit}
                                        sendLoading={sendLoading}
                                        commentId={commentId}
                                    />
                                </Fragment>
                            )

                        }
                    </div>

                </div>
                {
                    addComment && (
                        <div className={'flex items-center gap-[10px] mb-[20px] order-1'}>
                            <img className='w-[40px] h-[40px] rounded-full' src={validImageAddress} alt={comment?.title} />
                            <div className='flex flex-col gap-[5px]'>
                                <span className='text-[14px] font-[600]'>{courseSingle ? comment?.author : comment?.autor}</span>
                                <span className='text-[12px] font-[500] text-[#707070]'>{formatDate(insertDate)}</span>
                            </div>

                        </div>
                    )
                }
            </div>

            {/* Reply Comments List */}
            {
                addComment && comment.replies && comment.replies.length > 0 && (
                    comment.replies.map(reply => (
                        <Comment key={reply.id} comment={reply}>
                            {addComment && (
                                <div className='w-[6px] h-[100%] bg-primary ml-[10px] rounded-[8px]'></div>
                            )}
                        </Comment>
                    ))
                )
            }


        </div>
    )
}

export default Comment