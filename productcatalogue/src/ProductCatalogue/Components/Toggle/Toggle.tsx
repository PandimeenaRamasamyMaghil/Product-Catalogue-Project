import React, { useEffect, useState } from 'react';
import "./Toggle.css";

interface ToggleProps {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  togglevalue?: number;
}

const Toggle: React.FC<ToggleProps> = ({ toggle, setToggle, togglevalue }) => {
  useEffect(() => {
    if (togglevalue === 1) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [togglevalue, setToggle]);

  return (
    <div>
      <button
        type="button"  // This prevents the form submission
        className={`toggleBtn${toggle ? " Toggled" : ""}`}
        onClick={() => setToggle(!toggle)}
      >
        <div className='thumb'></div>
      </button>
    </div>
  );
};

export default Toggle;
