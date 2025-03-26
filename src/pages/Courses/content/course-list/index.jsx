import React from 'react'
import Cards from '../../../../components/shared/cards'
import CardsSkeleton from '../../../skeleton/cards-skeleton'

const CourseList = ({ loading, courses, setCourses }) => {
    return (
        <div className='w-[1031px] '>
            {/* Sorting List */}
            <div className='mb-[20px] h-[40px] flex items-center gap-[15px]'>
                <span className='font-[700] text-[20px] text-thirdly'>ترتیب</span>
                <ul className='flex items-center gap-[10px] '>
                    <li className='p-[7px_16px] border-thirdly border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]'>جدیدترین</li>
                    <li onClick={popularCourses} className='p-[7px_16px] border-thirdly border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]'>محبوب ترین</li>
                    <li className='p-[7px_16px] border-thirdly border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]'>گران ترین</li>
                    <li className='p-[7px_16px] border-thirdly border-[1px] rounded-[34px] cursor-pointer text-[18px] font-[500]'>ارزان ترین</li>
                </ul>
            </div>

            {/* Course List */}
            <div className='flex justify-between flex-wrap gap-[20px]'>
                {
                    loading ? Array(6).fill(0).map((_, index) => (<CardsSkeleton key={index} width={322} height={293} />)) : courses.map((item, index) => (
                        <Cards
                            isCourse={true}
                            key={index}
                            width={322}
                            title={item.title}
                            author={item.teacherName}
                            courseLevel={item.levelName}
                            courseCategory={item.technologyList.split(',')[0]}
                            price={item.cost}
                        />
                    ))
                }
            </div>


        </div>
    )
}

export default CourseList