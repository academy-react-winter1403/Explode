import React, { useState } from 'react'

import { Range } from 'react-range';
import Title from '../../../../../components/shared/filter-sections-title';
const Price = ({ setCostDown, setCostUp, setCurrentPage }) => {
    const [values, setValues] = useState([0, 20000000]);
    let filterTimeOut;
    const handleChange = (values) => {
        setValues(values);
        // Debounce
        clearInterval(filterTimeOut)
        filterTimeOut = setTimeout(() => {
            setCostDown(values[0])
            setCostUp(values[1])
            setCurrentPage(1)
        }, 2500);
    };
    return (
        <div className="w-[100%] mb-[20px]">
            <Title imageSrc={'/src/assets/icons/price.svg'} titleText={'قیمت'} />
            <div className="flex gap-[40px] flex-row-reverse mb-[10px]">
                <span className='font-[500] text-thirdly text-[16px]'><span className='text-[#787878]'>تا</span> {values[1]}</span>
                <span className='font-[500] text-thirdly text-[16px]'><span className='text-[#787878]'>از</span> {values[0]}</span>
            </div>

            <div className="relative w-[100%] h-[8px] ">
                <div className="absolute w-[100%] top-[-3px] w-full h-[100%] bg-[#F1F1F1] rounded-full"></div>

                <Range
                    step={100000}
                    min={0}
                    max={20000000}
                    values={values}
                    onChange={handleChange}
                    renderTrack={({ props, children }) => (
                        <div
                            {...props}
                            className="w-[100%] absolute left-0 h-[100%] top-[-2px]"
                        >
                            {children}
                        </div>
                    )}

                    renderThumb={({props }) => {
                        const { key, ...restProps } = props;
                        return (
                            <div
                                key={key}
                                {...restProps}
                                className={`w-[16px] h-[16px] rounded-full absolute top-[-2px] transform -translate-x-1/2 bg-primary`}
                                style={{
                                    left: '8px',
                                }}
                            />
                        )
                    }}
                />
            </div>
        </div>
    )
}

export default Price