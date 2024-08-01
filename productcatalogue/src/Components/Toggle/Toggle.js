import React, { useState } from 'react';
import "./Toggle.css";

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
