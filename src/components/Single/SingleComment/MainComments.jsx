import React, { useState } from 'react'
import Comment from '../../Comment/inedx'
import { useSelector } from 'react-redux'


const MainComments = ({ courseSingle, userId }) => {
    const [step, setStep] = useState(3)
    const comments = courseSingle ? useSelector((state) => state.courses.mainComments) : useSelector((state) => state.blogs.blogMainComments)
    const { darkMode } = useSelector((state) => state.darkMode)
    return (
        <div className='w-[80%] h-[100%] max-[700px]:justify-center max-[1360px]:justify-center  max-[700px]:w-[100%] flex gap-[10px] justify-between flex-wrap'>
            {
                comments?.length > 0 ? (
                    comments?.slice(0, step).map((item) => (
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
                comments?.length > step ? <div className='flex w-[100%] justify-center mt-[20px]'>
                    <span onClick={() => setStep((prev) => prev + 3)} className={`${darkMode ? 'bg-primary' : 'bg-thirdly'} cursor-pointer p-[8px_16px]  rounded-[40px] text-[16px] font-[500] text-[#fff]`}>مشاهده بیشتر</span>
                </div> : ''
            }

        </div>
    )
}

export default MainComments