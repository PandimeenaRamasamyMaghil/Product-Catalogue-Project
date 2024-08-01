import {React,useState} from 'react'
import "./DaysCheck.scss"

const DaysCheck = ({checkedItems,setCheckedItems,index}) => {
  
    const handleCheckboxChange = (event) => {
        const { name, checked,value } = event.target; 
        if (checked) {
          // Add the checkbox value to the state if it is checked
          const numericName = parseInt(name, 10);

          setCheckedItems([...checkedItems,numericName]);
        } else {
          // Remove the checkbox value from the state if it is unchecked
          const numericName = parseInt(name, 10);
          setCheckedItems(checkedItems.filter((item) => item !== numericName));
        }
      };

   
  return (
    <div>
        <div className='DaysCheckContainer1'>
            <input type="checkbox" name='1'  onChange={handleCheckboxChange}   checked={checkedItems.includes(1)} className='aa'  ></input>
            <label>Monday</label>
            <input type="checkbox" name='2' onChange={handleCheckboxChange}  checked={checkedItems.includes(2)}  className='aa' ></input>
            <label>Tuesday</label>
            <input type="checkbox" name='3' onChange={handleCheckboxChange}  checked={checkedItems.includes(3)} className='aa' ></input>
            <label>Wednesday</label>
            <input type="checkbox"name='4' onChange={handleCheckboxChange}  checked={checkedItems.includes(4)} className='aa' ></input>
            <label>Thurday</label>
            <input type="checkbox" name='5' onChange={handleCheckboxChange} checked={checkedItems.includes(5)}  className='aa' ></input>
            <label>Friday</label>
            <input type="checkbox" name='6' onChange={handleCheckboxChange}  checked={checkedItems.includes(6)}className='aa' ></input>
            <label>Saturday</label>
            <input type="checkbox" name='0' onChange={handleCheckboxChange}   checked={checkedItems.includes(0)}className='aa'></input>
            <label>Sunday</label>
        </div>
    </div>
  )
}

export default DaysCheck