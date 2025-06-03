import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../utils/DateFormatter";
import { ValidURL } from "../../utils/ValidUrl";
import IconSet from "../shared/IconSet";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { fetchCourseReplies, setCommentId, updateCommentReaction } from "../../redux/courseSlice";
import CreateComment from './../CreateComment/index';
import CloseButton from "../CloseButton";
import { addCommentReplyCourse, addDissLikeForCourseComment, addLikeForCourseComment } from "../../core/services/courses";
import { addBlogReplyComment, addDissLikeForBlogComment } from "../../core/services/blogs";
import { FaSpinner } from "react-icons/fa";
import { fetchBlogComments, fetchBlogCommentsReplies, setBlogCommentId, updateBlogCommentReaction } from "../../redux/blogSlice";
import toast from "react-hot-toast";

const Comment = ({ comment, isInModal = false, courseSingle, children, singleId, userId }) => {
  console.log(courseSingle + ' is courseSingle')
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const [isRepliesOpen, setIsRepliesOpen] = useState(false);
  const [isRepliesLoading, setIsRepliesLoading] = useState(false);
  const parent = "00000000-0000-0000-0000-000000000000";
  const [replyStatus, setReplyStatus] = useState(false);
  const [sendLoading, setSendLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [dissLikeLoading, setDissLikeLoading] = useState(false);
  const handleToggleReplies = () => {
    if (courseSingle) {
      if (!isRepliesOpen && comment.acceptReplysCount > 0 && comment.replies.length === 0) {
        setIsRepliesLoading(true);
        dispatch(setCommentId(comment.id));
        dispatch(fetchCourseReplies())
          .unwrap()
          .finally(() => {
            setIsRepliesLoading(false);
            setIsRepliesOpen(true);
          });
      } else {
        setIsRepliesOpen(!isRepliesOpen);
      }
    } else {
      if (!isRepliesOpen && comment.replyCount > 0 && comment.replies.length === 0) {
        setIsRepliesLoading(true);
        dispatch(setBlogCommentId(comment.id));
        dispatch(fetchBlogCommentsReplies())
          .unwrap()
          .finally(() => {
            setIsRepliesLoading(false);
            setIsRepliesOpen(true);
          });
      } else {
        setIsRepliesOpen(!isRepliesOpen);
      }
    }
  };

  const handleOnSubmit = async (values) => {
    if (courseSingle) {
      addCommentReplyCourse(setSendLoading, {
        CommentId: values.commentId,
        CourseId: singleId,
        Title: values.Title,
        Describe: values.Describe,
      });
    } else {
      await addBlogReplyComment(setSendLoading, {
        newsId: singleId,
        title: values.Title,
        describe: values.Describe,
        userId: userId,
        parentId: values.commentId,
      });
      dispatch(setBlogCommentId(values.commentId));
      dispatch(fetchBlogComments())
      dispatch(fetchBlogCommentsReplies())
    }
  };

  const likeComment = async (commentId) => {
    if (isAuthenticated) {
      if (courseSingle) {
        await addLikeForCourseComment(commentId, setLikeLoading);
        dispatch(updateCommentReaction({ commentId: commentId, type: 'like' }))
      }
      else {
        if (comment.currentUserIsLike) return;
        await addDissLikeForBlogComment(comment.id, true, setLikeLoading);
        dispatch(updateBlogCommentReaction({ commentId: commentId, type: 'like' }))
      }
    }
    else {
      toast.error('برای لایک یا دیسلایک باید لاگین باشید');
    }
  };

  const dissLike = async (commentId) => {
    if (isAuthenticated) {
      if (courseSingle) {
        await addDissLikeForCourseComment(comment.id, setDissLikeLoading);
        dispatch(updateCommentReaction({ commentId: commentId, type: 'dislike' }))
      }
      else {
        if (comment.currentUserIsDissLike) return;
        await addDissLikeForBlogComment(comment.id, false, setDissLikeLoading);
        dispatch(updateCommentReaction({ commentId: commentId, type: 'dislike' }))
      }
    }
    else {
      toast.error('برای لایک یا دیسلایک باید لاگین باشید');
    }



  };
  return (
    <div
      className={`${isInModal && comment.parentId === parent
        ? "w-[100%] border-b-[1px] border-[#DCDCDC]"
        : isInModal
          ? "w-[100%]"
          : "w-[324px] rounded-[24px] bg-[#F6F6F6]"
        } flex flex-col gap-[10px] p-[15px] max-[700px]:w-[100%]`}
    >
      <div className="flex w-[100%]">
        {children}
        <div className="w-full flex flex-col">
          <div className={`${isInModal && "order-2"} w-full`}>
            {/* Comment Title */}
            <div className="flex items-center gap-[10px]">
              <h2
                title={comment?.title}
                className="text-thirdly mb-[15px] truncate text-[18px] font-[700]"
              >
                {comment?.title?.length > 15
                  ? comment.title.slice(0, 15) + "..."
                  : comment.title}
              </h2>
            </div>
            <p className="text-thirdly mb-[25px] text-justify text-[16px] font-[500] break-words">
              {comment?.describe}
            </p>
          </div>

          <div
            className={`flex items-center justify-between ${isInModal && "order-1 mb-[10px]"
              }`}
          >
            {/* Comment Info */}
            <div className="flex items-center gap-[10px]">
              <img
                className="h-[40px] w-[40px] rounded-full"
                src={
                  ValidURL(comment?.pictureAddress) && comment?.pictureAddress !== null
                    ? comment?.pictureAddress
                    : "/src/assets/images/default-avatar.png"
                }
                alt="author image"
              />
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px] font-[600]">
                  {courseSingle ? comment?.author : comment?.autor}
                </span>
                <span className="text-[12px] font-[500] text-[#707070]">
                  {formatDate(courseSingle ? comment?.insertDate : comment?.inserDate)}
                </span>
              </div>
              {isInModal && (courseSingle ? comment.acceptReplysCount : comment.replyCount) > 0 && (
                <span
                  className={`cursor-pointer p-[5px] rounded-[5px] flex items-center justify-center bg-primary text-[#fff] ${isRepliesLoading ? "opacity-50" : ""
                    }`}
                  onClick={handleToggleReplies}
                >
                  {isRepliesOpen ? (
                    <SlArrowUp className="w-[20px] h-[20px]" />
                  ) : (
                    <SlArrowDown className="w-[20px] h-[20px]" />
                  )}
                </span>
              )}
            </div>

            {!isInModal && (
              <div className="flex items-center gap-[10px]">
                {/* Comment Like */}
                <span className="flex items-center gap-[5px]">
                  <span
                    className={`${(comment?.currentUserEmotion == 'LIKED' && isAuthenticated) || (comment?.currentUserIsLike && isAuthenticated) ? 'bg-primary' : ''} rounded-full p-[5px]`}
                    onClick={() => likeComment(comment.id)}
                  >
                    {likeLoading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <IconSet
                        className={`cursor-pointer`}
                        imageAddress={`${(comment?.currentUserEmotion == 'LIKED' && isAuthenticated) || (comment?.currentUserIsLike && isAuthenticated) ? '/src/assets/icons/light-like.svg' : '/src/assets/icons/like.svg'}`}
                      />
                    )}
                  </span>{' '}
                  <span>{comment?.likeCount || 0}</span>{' '}
                </span>

                {/* Comment Dislike */}
                <span className="flex items-center gap-[5px]">
                  <span
                    className={`${(comment?.currentUserEmotion == 'DISSLIKED' && isAuthenticated) || (comment?.currentUserIsDissLike && isAuthenticated) ? 'bg-[#FF6C6C]' : ''} rounded-full p-[5px]`}
                    onClick={() => dissLike(comment.id)}
                  >
                    {dissLikeLoading ? (
                      <FaSpinner className="animate-spin" />
                    ) : (
                      <IconSet
                        className={'cursor-pointer'}
                        imageAddress={`${(comment?.currentUserEmotion == 'DISSLIKED' && isAuthenticated) || (comment?.currentUserIsDissLike && isAuthenticated) ? '/src/assets/icons/light-disslike.png' : '/src/assets/icons/dislike.svg'}`}
                      />
                    )}
                  </span>{' '}
                  <span>
                    {courseSingle
                      ? comment?.disslikeCount
                      : comment?.dissLikeCount || 0}

                  </span>{' '}
                </span>

                {isInModal && (
                  <>
                    <span
                      onClick={() => setReplyStatus(!replyStatus)}
                      className={`${replyStatus ? 'hidden' : 'block'} border-primary text-primary mr-[10px] cursor-pointer rounded-[40px] border-[1px] p-[8px_12px] text-[16px] font-[500]`}
                    >
                      جواب دادن
                    </span>

                    <CloseButton
                      onClick={() => setReplyStatus(!replyStatus)}
                      display={replyStatus ? 'flex' : 'hidden'}
                    />
                    <CreateComment
                      replyStatus={replyStatus}
                      handleOnSubmit={handleOnSubmit}
                      sendLoading={sendLoading}
                      commentId={comment.id}
                    />
                  </>
                )}
              </div>
            )}
          </div>

          {isInModal && (
            <div className="flex items-center gap-[10px] order-3">
              {/* Comment Like */}
              <span className="flex items-center gap-[5px]">
                <span
                  className={`${(comment?.currentUserEmotion == 'LIKED' && isAuthenticated) || (comment?.currentUserIsLike && isAuthenticated) ? 'bg-primary' : ''} rounded-full p-[5px]`}
                  onClick={() => likeComment(comment.id)}
                >
                  {likeLoading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <IconSet
                      className={`cursor-pointer`}
                      imageAddress={`${(comment?.currentUserEmotion == 'LIKED' && isAuthenticated) || (comment?.currentUserIsLike && isAuthenticated) ? '/src/assets/icons/light-like.svg' : '/src/assets/icons/like.svg'}`}
                    />
                  )}
                </span>{' '}
                <span>{comment?.likeCount || 0}</span>{' '}
              </span>

              {/* Comment Dislike */}
              <span className="flex items-center gap-[5px]">
                <span
                  className={`${(comment?.currentUserEmotion == 'DISSLIKED' && isAuthenticated) || (comment?.currentUserIsDissLike && isAuthenticated) ? 'bg-[#FF6C6C]' : ''} rounded-full p-[5px]`}
                  onClick={() => dissLike(comment.id)}
                >
                  {dissLikeLoading ? (
                    <FaSpinner className="animate-spin" />
                  ) : (
                    <IconSet
                      className={'cursor-pointer'}
                      imageAddress={`${(comment?.currentUserEmotion == 'DISSLIKED' && isAuthenticated) || (comment?.currentUserIsDissLike && isAuthenticated) ? '/src/assets/icons/light-disslike.png' : '/src/assets/icons/dislike.svg'}`}
                    />
                  )}
                </span>{' '}
                <span>
                  {courseSingle
                    ? comment?.disslikeCount
                    : comment?.dissLikeCount || 0}
                </span>{' '}
              </span>

              {isInModal && (
                <>
                  <span
                    onClick={() => setReplyStatus(!replyStatus)}
                    className={`${replyStatus ? 'hidden' : 'block'} border-primary text-primary mr-[10px] cursor-pointer rounded-[40px] border-[1px] p-[8px_12px] text-[16px] font-[500]`}
                  >
                    جواب دادن
                  </span>

                  <CloseButton
                    onClick={() => setReplyStatus(!replyStatus)}
                    display={replyStatus ? 'flex' : 'hidden'}
                  />
                  <CreateComment
                    replyStatus={replyStatus}
                    handleOnSubmit={handleOnSubmit}
                    sendLoading={sendLoading}
                    commentId={comment.id}
                    userId={userId}
                  />
                </>
              )}
            </div>
          )}
        </div>
      </div>

      {isInModal && isRepliesOpen && comment?.replies && comment.replies.length > 0 && (
        <div className="ml-[20px] mt-[10px]">
          {comment.replies.map((reply, index) => (
            <Comment
              key={reply.id || index}
              comment={reply}
              isInModal={isInModal}
              courseSingle={courseSingle}
              singleId={singleId}
            >
              {isInModal && (
                <div className="bg-primary ml-[10px] min-h-[150px] w-[6px] rounded-[8px]"></div>
              )}
            </Comment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;