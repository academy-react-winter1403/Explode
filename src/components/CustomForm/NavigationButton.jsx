import React from 'react';
import { Link } from 'react-router-dom';
import IconSet from '../shared/IconSet';
import homeIcon from '../../assets/icons/home-04.png';
import backIcon from '../../assets/icons/arrow-left-01.png';

const NavigationButton = ({ hideNavigation, goHomeLink, setCurrentStep }) => {
  if (hideNavigation) return null;
  const backClickHandler = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="mx-auto mt-4">
      {goHomeLink ? (
        <Link to="/" className="nav-button">
          <IconSet imageAddress={homeIcon} size={24} />
          <span>صفحه اصلی</span>
        </Link>
      ) : (
        <button type="button" onClick={backClickHandler} className="nav-button">
          <IconSet imageAddress={backIcon} size={24} />
          <span>بازگشت</span>
        </button>
      )}
    </div>
  );
};

export default NavigationButton;
