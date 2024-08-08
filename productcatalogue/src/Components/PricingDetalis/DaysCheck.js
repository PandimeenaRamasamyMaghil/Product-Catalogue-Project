  import React, { useState } from 'react';
  import "./DaysCheck.scss";
  import { useEffect } from 'react';
  import axios from 'axios';

  const DaysCheck = ({ checkedItems, setCheckedItems, index ,id,setId}) => {
    const [data,setData]=useState([])
    
    const handleCheckboxChange = (event) => {
      const { name, checked } = event.target;
      const numericName = parseInt(name, 10);

      if (checked) {
        // Add the checkbox value to the state if it is checked
        setCheckedItems([...checkedItems, numericName]);
setId([...id,data[numericName].id])      
      } else {
        // Remove the checkbox value from the state if it is unchecked
        setCheckedItems(checkedItems.filter((item) => item !== numericName));
        setId(id.filter((itemId) => itemId !== data[numericName].id));
      }
    
    };

    useEffect(()=>{
      getApi()
    },[])

    const getApi=async()=>{
      try{
        const response=await axios.get("https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=Availability")
        console.log(response.data)
        setData(response.data)

      }catch(error){
        console.log(error)

      }

    }
    console.log(checkedItems)

    return (
      <div>
        <div className='DaysCheckContainer1'>
          {data.map((elem,index)=>{
               const isChecked = checkedItems.includes(index);
            return(
              <>
            

              <input type="checkbox" name={index} onChange={handleCheckboxChange}   checked={isChecked}     className='aa' />
              <label>{elem.name}</label>
              
              </>

       
          
       ) })}
         
        </div>
      </div>
    );
  };

  export default DaysCheck;
