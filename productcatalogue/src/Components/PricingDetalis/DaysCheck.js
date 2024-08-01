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
          setCheckedItems(checkedItems.filter((item) => item !== name));
        }
      };

   
  return (
    <div>
        <div className='DaysCheckContainer1'>
            <input type="checkbox" name='1'  onChange={handleCheckboxChange} className='aa'  ></input>
            <label>Monday</label>
            <input type="checkbox" name='2' onChange={handleCheckboxChange} className='aa' ></input>
            <label>Tuesday</label>
            <input type="checkbox" name='3' onChange={handleCheckboxChange} className='aa' ></input>
            <label>Wednesday</label>
            <input type="checkbox"name='4' onChange={handleCheckboxChange} className='aa' ></input>
            <label>Thurday</label>
            <input type="checkbox" name='5' onChange={handleCheckboxChange} className='aa' ></input>
            <label>Friday</label>
            <input type="checkbox" name='6' onChange={handleCheckboxChange} className='aa' ></input>
            <label>Saturday</label>
            <input type="checkbox" name='0' onChange={handleCheckboxChange} className='aa'></input>
            <label>Sunday</label>
        </div>
    </div>
  )
}

export default DaysCheck