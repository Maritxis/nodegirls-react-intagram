import React from 'react';


function TheHeader({step, handleGoHome, handleNext, handleShare}) {
  
  return (
    <div className="TheHeader">
      { step === 0 && <button className="header-button__home" onClick={handleGoHome}>Home</button> }
      { (step === 0 || step === 1) && <button className="header-button__cancel" onClick={handleGoHome}>Cancel</button> }
      { step === 1 && <button className="header-button__next" onClick={handleNext}>Next</button> }
      { step === 2 && <button className="header-button__share" onClick={handleShare}>Share</button> }
    </div>
  );
}

export default TheHeader;