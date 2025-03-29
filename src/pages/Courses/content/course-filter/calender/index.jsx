import React from 'react'
import Title from '../../../../../components/shared/filter-sections-title'

const Calender = ({ setStartDate, setEndDate, setCurrentPage }) => {
    const handleStartDate = (date) => {
        setStartDate(date)
    }
    const handleEndtDate = (date) => {
        setEndDate(date)
        setCurrentPage(1)
    }
    return (
        <div className='mb-[20px]'>
            <Title imageSrc={'/src/assets/icons/calender.svg'} titleText={'تاریخ برگزاری - اتمام'} />
            <div className='h-[48px] bg-[#F1F1F1] rounded-[16px] flex items-center gap-[10px] p-[0_16px] text-[11px] text-[#707070] font-[500]'>
                <input onChange={(event) => handleStartDate(event.target.value)} type="date" className='w-[50%] outline-hidden' /> - <input onChange={(event) => handleEndtDate(event.target.value)} className='w-[50%] outline-hidden' type="date" name="" id="" />
            </div>
        </div>
    )
}
export default Calender