import React, { useState } from 'react';
import "./ToggleSlider.scss";

const Toggle = ({toggle,setToggle}) => {


  

  return (
    <div>
      <button
        className={`toggleBtn${toggle ? " Toggled" : ""}`}
        onClick={() => setToggle(!toggle)}
       
        
      >
        <div className='thumb'></div>
      </button>
    </div>
  );
};

export default Toggle;
