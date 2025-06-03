import React from 'react'
import Comment from '../../Comment/inedx'
import { useSelector } from 'react-redux'


const MainComments = ({ courseSingle, userId }) => {

    const comments = courseSingle ? useSelector((state) => state.courses.mainComments) : useSelector((state) => state.blogs.blogMainComments)
    return (
        <div className='w-[80%] h-[100%] max-[700px]:justify-center max-[1360px]:justify-center  max-[700px]:w-[100%] flex gap-[10px] justify-between flex-wrap'>
            {
                comments?.map((item) => (
                    <Comment
                        isInModal={false}
                        comment={item}
                        courseSingle={courseSingle}
                        userId={userId}
                    />
                ))
            }

        </div>
    )
}

export default MainComments