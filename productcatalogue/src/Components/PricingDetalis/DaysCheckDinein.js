import React from 'react';
import "./DaysCheckDinein.scss";

const DaysCheck = ({ checkedItems, setCheckedItems, index }) => {
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newCheckedItems = [...checkedItems];

    if (checked) {
      const newName = parseInt(name, 10); // Convert the name to an integer
      newCheckedItems[index] = [...(newCheckedItems[index] || []), newName];
    } else {
      newCheckedItems[index] = (newCheckedItems[index] || []).filter((item) => item !== parseInt(name, 10));
    }

    setCheckedItems(newCheckedItems);
  };

  return (
    <div className='DaysCheckContainer1'>
      <input
        type="checkbox"
        name="1"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(1)}
       
      />
      <label>Monday</label>

      <input
        type="checkbox"
        name="2"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(2)}
      />
      <label>Tuesday</label>

      <input
        type="checkbox"
        name="3"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(3)}
      />
      <label>Wednesday</label>

      <input
        type="checkbox"
        name="4"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(4)}
      />
      <label>Thursday</label>

      <input
        type="checkbox"
        name="5"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(5)}
      />
      <label>Friday</label>

      <input
        type="checkbox"
        name="6"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(6)}
      />
      <label>Saturday</label>

      <input
        type="checkbox"
        name="0"
        onChange={handleCheckboxChange}
        className='aa'
        checked={checkedItems.includes(0)}
      />
      <label>Sunday</label>
    </div>
  );
};

export default DaysCheck;
