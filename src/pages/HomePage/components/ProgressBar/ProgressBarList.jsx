import { useEffect } from 'react';
import ProgressItem from './ProgressItem';

const ProgressBarList = ({ data, currentStep, setCurrentStep }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < data.length - 1 ? prev + 1 : 0));
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const handleMarkerClick = (index) => {
    setCurrentStep(index);
  };
  return (
    <>
      {data?.map((item, index) => (
        <ProgressItem
          key={item.id || index}
          item={item}
          index={index}
          currentStep={currentStep}
          handleMarkerClick={handleMarkerClick}
        />
      ))}
    </>
  );
};
export default ProgressBarList;
