import React, {useState} from 'react';


function TheFooter({step, handleGoHome, handleUploadImage}) {
  
  return (
    <div className="TheFooter">
      <footer>
        <button onClick={handleGoHome}>Home</button>
        <div className="footer-upload">
          <input 
            type="file"
            name="file"
            id="file"
            className="inputfile"
            disabled={step !== 0}
            onChange={(ev) => handleUploadImage(ev)}/>
          <label htmlFor="file">Upload an image</label>
        </div>
      </footer>
    </div>
  );
}

export default TheFooter;