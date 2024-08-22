import React, { useEffect, useState } from 'react';
import "./Toggle.css";

const Toggle = ({toggle,setToggle,togglevalue}) => {

  useEffect(()=>{
    if(togglevalue===1)
    {
      setToggle(true)
    }
    else{
setToggle(false);
    }

  },[,setToggle])


  

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
