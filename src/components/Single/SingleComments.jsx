import React, { Fragment, useState } from 'react'
import IconSet from './../shared/IconSet/index';
import Comment from '../Comment/inedx';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import CloseButton from './../CloseButton/index';
import { buildCommentTree } from './commentBuilder/buildCommentTree';
import { AddCommentCourse } from '../../core/services/courses';
import CreateComment from '../CreateComment';
import AddeComent from './SingleInfoTable/AddeComent';

const SingleComments = ({ courseSingle, comments = [], title, singleId }) => {
    const [step, setStep] = useState(3)
    const loading = useSelector((state) => state.courses.loading);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const [showCommentModal, setShowCommentModal] = useState(false)
    const [sendLoading, setSendLoading] = useState(false)
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
    const handleOnSubmit = ({ Title, Describe }) => {
        if (courseSingle) {
            AddCommentCourse(setSendLoading, { CourseId: singleId, Title, Describe })
        }

    }
    return (
      <Fragment>
        <div className="mt-[40px]">
          <h2 className="mb-[25px] text-[20px] font-[700] text-[#707070] ">
            نظرات دانشجویان و اساتید
          </h2>
          <div className="flex items-start justify-between gap-[15px] max-[700px]:flex-col max-[700px]:items-center">
            <div
              onClick={handleOnClick}
              className="bg-primary flex h-[282px] w-[324px] cursor-pointer flex-col items-center justify-center gap-[20px] rounded-[24px] text-[#fff] max-[700px]:w-[100%]"
            >
              <div className="flex flex-col items-center justify-center gap-[10px]">
                <IconSet
                  imageAddress={'/src/assets/icons/add-comment.svg'}
                  firstSize={32}
                  secondSize={32}
                />
                <span className="text-[18px] font-[600]">نظر شما</span>
              </div>
              <span className="text-[14px] font-[500]">
                برای نظر دادن کلیک کنید
              </span>
            </div>

            <div className="flex h-[100%] w-[80%] flex-wrap justify-between gap-[10px] max-[1360px]:justify-center max-[700px]:w-[100%] max-[700px]:justify-center">
              {loading ? (
                'loading'
              ) : treeData?.length > 0 ? (
                treeData
                  ?.slice(0, step)
                  .map((item) => (
                    <Comment
                      key={item.id}
                      addComment={false}
                      comment={item}
                      courseSingle={courseSingle}
                    />
                  ))
              ) : (
                <div className="w-[100%] rounded-[10px] bg-[#FF5353] p-[10px] text-center font-bold text-[#fff]">
                  نظری یافت نشد
                </div>
              )}
              {treeData?.length > step ? (
                <div className="mt-[20px] flex w-[100%] justify-center">
                  <span
                    onClick={() => setStep((prev) => prev + 3)}
                    className="bg-thirdly cursor-pointer rounded-[40px] p-[8px_16px] text-[16px] font-[500] text-[#fff]"
                  >
                    مشاهده بیشتر
                  </span>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>

        {/* Comment Modal */}
        <AddeComent singleId={singleId} />
      </Fragment>
    );
}

export default SingleComments