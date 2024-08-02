import React, { useState } from 'react';
import "./DaysCheck.scss";

const DaysCheck = ({ checkedItems, setCheckedItems, index }) => {
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const numericName = parseInt(name, 10);

    if (checked) {
      // Add the checkbox value to the state if it is checked
      setCheckedItems([...checkedItems, numericName]);
    } else {
      // Remove the checkbox value from the state if it is unchecked
      setCheckedItems(checkedItems.filter((item) => item !== numericName));
    }
  };

  return (
    <div>
      <div className='DaysCheckContainer1'>
        <input type="checkbox" name='1' onChange={handleCheckboxChange} checked={checkedItems.includes(1)} className='aa' />
        <label>Monday</label>
        <input type="checkbox" name='2' onChange={handleCheckboxChange} checked={checkedItems.includes(2)} className='aa' />
        <label>Tuesday</label>
        <input type="checkbox" name='3' onChange={handleCheckboxChange} checked={checkedItems.includes(3)} className='aa' />
        <label>Wednesday</label>
        <input type="checkbox" name='4' onChange={handleCheckboxChange} checked={checkedItems.includes(4)} className='aa' />
        <label>Thursday</label>
        <input type="checkbox" name='5' onChange={handleCheckboxChange} checked={checkedItems.includes(5)} className='aa' />
        <label>Friday</label>
        <input type="checkbox" name='6' onChange={handleCheckboxChange} checked={checkedItems.includes(6)} className='aa' />
        <label>Saturday</label>
        <input type="checkbox" name='0' onChange={handleCheckboxChange} checked={checkedItems.includes(0)} className='aa' />
        <label>Sunday</label>
      </div>
    </div>
  );
};

export default DaysCheck;
