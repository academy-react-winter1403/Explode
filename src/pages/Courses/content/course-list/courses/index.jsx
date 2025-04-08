import React from 'react'
import Cards from '../../../../../components/shared/cards'
import CardsSkeleton from '../../../../skeleton/cards-skeleton'

const Courses = ({ courses, loading, perPage }) => {
    return (
        <div className='flex justify-between flex-wrap gap-[20px] max-[1050px]:justify-center max-[1050px]:gap-[40px]'>
            {
                loading ? Array(perPage).fill(0).map((_, index) => (<CardsSkeleton key={index} width={322} height={293} />)) : courses.map((item, index) => (
                    <Cards
                        isCourse={true}
                        key={index}
                        width={322}
                        title={item.title}
                        author={item.teacherName}
                        courseLevel={item.levelName}
                        courseCategory={item.technologyList.split(',')[0]}
                        price={item.cost}
                        image={item.tumbImageAddress}
                    />
                ))
            }
        </div>
    )
}
export default Courses