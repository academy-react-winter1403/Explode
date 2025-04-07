import { useState, useEffect } from 'react';
import { ProgressImageData } from './ProgressImageData';
import IconSet from '../../../../components/shared/IconSet';
import ProgressItem from './ProgressItem';
import ProgressBarList from './ProgressBarList';
const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <section className="relative mt-[200px] h-[5px] w-full">
      <div className="absolute h-[5px] w-full bg-[#D9D9D9]" />
      <div
        className="bg-primary absolute top-0 left-0 h-[5px] rounded-[15px] transition-all duration-500"
        style={{ width: ProgressImageData[currentStep].progressPercent + '%' }}
      />
      <div className="relative flex w-full items-center">
        <ProgressBarList
          data={ProgressImageData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </div>
    </section>
  );
};
export default ProgressBar;
