import React, { useState } from 'react';

import { Range } from 'react-range';
import Title from '../../../../components/shared/filter-sections-title';
import useCourseStore from '../../../../Hooks/useCourseStore';
const Price = () => {
  const { setCostDown, setCostUp, setCurrentPage } = useCourseStore();
  const [values, setValues] = useState([0, 20000000]);
  let filterTimeOut;
  const handleChange = (values) => {
    setValues(values);
    // Debounce
    clearInterval(filterTimeOut);
    filterTimeOut = setTimeout(() => {
      setCostDown(values[0]);
      setCostUp(values[1]);
      setCurrentPage(1);
    }, 2500);
  };
  return (
    <div className="mb-[20px] w-[100%]">
      <Title imageSrc={'/src/assets/icons/price.svg'} titleText={'قیمت'} />
      <div className="mb-[10px] flex flex-row-reverse gap-[40px]">
        <span className="text-thirdly text-[16px] font-[500]">
          <span className="text-[#787878]">تا</span> {values[1]}
        </span>
        <span className="text-thirdly text-[16px] font-[500]">
          <span className="text-[#787878]">از</span> {values[0]}
        </span>
      </div>

      <div className="relative h-[8px] w-[100%]">
        <div className="absolute top-[-3px] h-[100%] w-[100%] w-full rounded-full bg-[#F1F1F1]"></div>

        <Range
          step={100000}
          min={0}
          max={20000000}
          values={values}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              className="absolute top-[-2px] left-0 h-[100%] w-[100%]"
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => {
            const { key, ...restProps } = props;
            return (
              <div
                key={key}
                {...restProps}
                className={`bg-primary absolute top-[-2px] h-[16px] w-[16px] -translate-x-1/2 transform rounded-full`}
                style={{
                  left: '8px',
                }}
              />
            );
          }}
        />
      </div>
    </div>
  );
};

export default Price;
