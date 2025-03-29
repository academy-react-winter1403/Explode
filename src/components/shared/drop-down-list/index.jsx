import React from 'react'
import Title from '../filter-sections-title'

const DropDownList = ({ imageSrc, titleText, handleFunction, children, defaultOptionText }) => {
    return (
        <div className='mb-[20px] relative'>
            <Title imageSrc={imageSrc} titleText={titleText} />
            <span className='absolute left-[15px] top-[50px] w-[20px] h-[20px] bg-contain bg-center flex' style={{ backgroundImage: `url(/src/assets/icons/arrow-down.svg)` }}></span>
            <select
                onChange={(event) => { handleFunction(event.target.value) }}
                className='w-[100%] appearance-none font-[500] text-[12px] text-[#707070] h-[48px] bg-[#F1F1F1] p-[0_16px] rounded-[16px] outline-hidden cursor-pointer'
            >
                <option value="">
                    {defaultOptionText}
                </option>

                {
                    children
                }

            </select>
        </div>
    )
}
export default DropDownList