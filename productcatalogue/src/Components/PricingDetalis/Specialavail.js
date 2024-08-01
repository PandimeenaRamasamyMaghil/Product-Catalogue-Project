import {React,useRef,useState} from 'react'
import DatePicker from 'react-datepicker';
import Toggle from '../Toggle/Toggle'
import "./Specialvail.scss"
import DaysCheck from './DaysCheck';
import 'react-datepicker/dist/react-datepicker.css';
import calender from "./calendar 1.png"
import DropDown3 from "./DropDown3"
import { format } from 'date-fns';


import DropDown2 from './DropDown2';
const Specialavail = ({getSpecialForm}) => {
const [dinein, setDineIn] = useState(true);
  const [online, setOnline] = useState(false)
  const [pickup, setPickup] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [dineinentry, setDineInEntry] = useState([""]);
  const[specialcheck,setSpecialcheck]=useState([]);
  const [dateValue, setDateValue] = useState('7/1/24');
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [selectedValues1, setSelectedValues1] = useState([]);
  const [options3, setOptions3] = useState(['Breakfast', 'Lunch', 'Dinner']);
  const [selectedValuespickup, setSelectedValuesPickup] = useState("");
  const [optionspick, setOptionsPick3] = useState(['Breakfast', 'Lunch', 'Dinner']);
  const [selectedValuesdelivery, setSelectedValuesDelivery] = useState("");
  const [optionsdelivery, setOptionsDelivery] = useState(['Breakfast', 'Lunch', 'Dinner']);
  const [selectedValuesthird1, setSelectedValuesThird1] = useState("");
  const [optionsthird1, setOptionsThird1] = useState(['Breakfast', 'Lunch', 'Dinner']);
  const [selectedValuesthird2, setSelectedValuesThird2] = useState("");
  const [optionsthird2, setOptionsThird2] = useState(['Breakfast', 'Lunch', 'Dinner']);
  const [selectedValuesMealType, setSelectedValuesMealType] = useState([]);
  const [optionsmealtype, setOptionsMealType] = useState(['Breakfast', 'Lunch', 'Dinner'])

  const datePickerRef = useRef(null);
  const datePickerRef1 = useRef(null);
 
    const[form,setForm]=useState({

 
        Pickupprice:"",
        Pickupmealtype:"",
        Deliveryprice:"",
        Deliverymealtype:"",
        Swiggyorzomato:"",
        Swiggy:"",
        Swiggymealtype:"",
        Zomato:"",
        Zomatomealtype:"",
       
    
      })
      const [selectedDate, setSelectedDate] = useState(null);
      const [selectedDate1, setSelectedDate1] = useState(null);

      const fromDate= selectedDate && selectedDate.toString();
      const toDate= selectedDate1 && selectedDate1.toString();
      
    
      const[dineinfields,setDineInFields]=useState([{
        DineInPrice:"",
        DineInMealType:"",
        DineInServiceArea:"",
        
      }])
      
      const handleChange = (index, e) => {
      
        const newEntries = [...dineinfields];
        newEntries[index][e.target.name] = e.target.value;
        setDineInFields(newEntries);
        
      };
      

  const handleDateChange = (date) => {
    const formattedDate = format(date, 'yyyy-MM-dd');

    setSelectedDate(formattedDate);
  };
  const handleDateChange1 = (date) => {


    const formattedDate = format(date, 'yyyy-MM-dd');

    setSelectedDate1(formattedDate);
  };

  const payLoad={
    form,
    dineinfields,
    specialcheck:specialcheck,
    fromDate,
    toDate,
    selectedValuespickup: selectedValuespickup,
    selectedValuesdelivery:selectedValuesdelivery

  }
  console.log(payLoad)
  getSpecialForm(payLoad);

  const handleImageClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleImageClick2 = () => {
    if (datePickerRef1.current) {
      datePickerRef1.current.setOpen(true);
    }
  };

  const handleSelect3 = (value, index) => {
    const newSelectedValues =[...selectedValues1];
    newSelectedValues[index] = value;
    setSelectedValues1(newSelectedValues);

    const newDineInFields = [...dineinfields];
    newDineInFields[index].DineInServiceArea = value;
    setDineInFields(newDineInFields);
  };
  const addOption3 = (newOption) => {
    setOptions3([...options3, newOption]);
  };
  const handleSelectpick = (value) => {
    setSelectedValuesPickup(value);
  };
  const addOptionpickup = (newOption) => {
    setOptionsPick3([...optionspick, newOption]);
  };
  const handleSelectdelivery = (value) => {
    setSelectedValuesDelivery(value);
  };
  const addOptiondelivery = (newOption) => {
    setOptionsDelivery([...optionsdelivery, newOption]);
  };
  const handleSelectThird1 = (value) => {
    setSelectedValuesThird1(value);
  };
  const addOptionThird1 = (newOption) => {
    setOptionsThird1([...optionsthird1, newOption]);
  };
  const handleSelectThird2 = (value) => {
    setSelectedValuesThird2(value);
  };
  const addOptionThird2 = (newOption) => {
    setOptionsThird2([...optionsthird2, newOption]);
  };
  const handleSelectMealtype = (index, value) => {
    setSelectedValuesMealType(value);
    const newarrary=[...dineinfields];
    newarrary[index].DineInMealType=value;
    setDineInFields(newarrary)
 
  };
  const handleSelectService = (index, value) => {
    setSelectedValues1(value);
    const newarrary=[...dineinfields];
    newarrary[index].DineInServiceArea=value;
    setDineInFields(newarrary)
 };
  const addOptionMealType = (newOption) => {
    setOptionsMealType([...optionsmealtype, newOption]);
  };
  const handleDelete = (index) => {
    const newEntries = dineinentry.filter((_, i) => i !== index);
    setDineInEntry(newEntries);
    const newSelectedValues1 = { ...selectedValues1 };
    delete newSelectedValues1[index];
    setSelectedValues1(newSelectedValues1);
    const newSelectedValuesMealtype = { ...selectedValuesMealType };
    delete newSelectedValuesMealtype[index];
    setSelectedValuesMealType(newSelectedValuesMealtype);
  };
  const handleSelect = (value, index) => {
    const newSelectedValues = [...selectedValuesMealType];
    newSelectedValues[index] = value;
    setSelectedValuesMealType(newSelectedValues);

    const newDineInFields = [...dineinfields];
    newDineInFields[index].DineInMealType = value;
    setDineInFields(newDineInFields);
  };

  
     // Add a new empty value for the new field
     const AddDineInEntry = () => {
      setDineInEntry([...dineinentry, dineinentry])
      setDineInFields([...dineinfields, { DineInPrice: '', DineInMealType: '', DineInServiceArea: '' }]);
    
    
    }

  
    
  return (
    <div>
      <h1 className='AvailableDaysHeading' style={{marginTop:"40px"}}>Available days</h1>
      <div className='Date_container'>
        <div className="date-picker-container">
      <DatePicker
      
        placeholderText="7/1/2034" // Placeholder text for the date picker
        dateFormat="MM/dd/yyyy"
        selected={selectedDate}
      
        onChange={handleDateChange} // Date format for display
        ref={datePickerRef}
      />
    </div>
    <img src={calender} className='calender' onClick={handleImageClick}/>
    
    
    
    <div className="date-picker-container">
      <DatePicker
     
         selected={selectedDate1}
         onChange={handleDateChange1}
        placeholderText="7/1/2034" // Placeholder text for the date picker
        dateFormat="yyyy-MM-dd" // specify the format you want
        showPopperArrow
        ref={datePickerRef1}
      />
    </div>
    <img src={calender} className='calender1' onClick={handleImageClick2}></img>
    </div>
    <div className='dayschecking'>
    <DaysCheck checkedItems={specialcheck} setCheckedItems={setSpecialcheck}/>

    </div>

        <h1 className='KitchenRelatedHeading'>Avaliable Service Streams</h1>
        {/* DineIn Related */}
        <div className='DineInRelatedSpecial'>
          <h1 className='DineInRelatedHeading'>Dine In</h1>
          <div className='toggleII'><Toggle toggle={dinein} setToggle={setDineIn} /></div>
        </div>
        {dinein ? (
          <>
            
            
            {dineinentry.map((entry,index) => (
        <div className='DineInInput11Special' key={index}>
          <input
            type="text"
            placeholder='Price*'
            name='DineInPrice'
            value={entry.DineInPrice}
            className='DineInInput1'
            onChange={(e) => handleChange(index, e)}
          />
          
            <DropDown3
            key={index}
            selectedValue={selectedValuesMealType[index] || ''}
            onSelect={(value) => handleSelect(value, index)}
            options={options3}
            addOption={addOption3}
            placeholder="MealType*"
            onChange={(e)=>handleSelectMealtype(index,e.target.value)}
          />
          
          <div className='SpecialDropDown'>
          <DropDown2
            key={index}
            selectedValue={selectedValues1[index] || ''}
            onSelect={(value) => handleSelect3(value, index)}
            options={options3}
            addOption={addOption3}
            placeholder="Service Area*"
            onChange={(e)=>handleSelectService(index,e.target.value)}
          />
          </div>
          <h1 onClick={() => handleDelete(index)} className='Delete'>Delete</h1>
        </div>
      ))}


            <h1 className=' AddentrySpecial' onClick={AddDineInEntry}> + Add entry</h1>
           


          </>
        ) : ""
        }
        {/* OnlineRelated */}
        <div className='OnlineRelated'>
          <h1 className='OnlineRelatedHeading'>Online</h1>
          <div className='toggleIII'><Toggle toggle={online} setToggle={setOnline} /></div>
        </div>
        <div className='OnlineSection'>
          {online ?
            <div>
              {/* PickupRelated */}
              <div className='PickupRelated'>
                <h1 className='PickupRelatedHeading'>Pick Up</h1>
                <div className='toggleIV'><Toggle toggle={pickup} setToggle={setPickup} /></div>
                </div>
                <div className='PickupSection'>
                {pickup ?
                 <div>
                   
                   <div className='PickupInput11'>
                    <input type="text" className='DineInInput1' placeholder='Price*' onChange={(e) => setForm({ ...form,"Pickupprice":e.target.value })} ></input>
                    <DropDown3
          selectedValue={selectedValuespickup}
          onSelect={handleSelectpick}
          options={optionspick}
          addOption={addOptionpickup}
          placeholder="Meal Type*"
        />
                    </div>
                    </div>
                   : ""}
                   </div>
          {/* DeliveryRelated    */}
              <div className='DeliveryRelated'>
              <h1 className='DeliveryRelatedHeading'>Delivery</h1>
                <div className='toggleV'><Toggle toggle={delivery} setToggle={setDelivery} /></div> 
                </div>
                <div className='DeliverySection'>
                {delivery ?
                 <div>
                   
                   <div className='Delivery11'>
                    <input type="text" className='DineInInput1' placeholder='Price*' onChange={(e) => setForm({ ...form,"Deliveryprice":e.target.value })} ></input>
                    <DropDown3
          selectedValue={selectedValuesdelivery}
          onSelect={handleSelectdelivery}
          options={optionsdelivery}
          addOption={addOptiondelivery}
          placeholder="Meal Type*"
        />
                    </div>
                    </div>
                   : ""}
                   </div>
                   <h1 className='ThirdDeliveryRelatedHeading'>Third Party delivery</h1>
                   <div>
                   
                   <div className='Delivery11'>
                   <input type="text" className='DeliveryInput2' placeholder='Swiggy,Zomato' onChange={(e)=>setForm({ ...form,"Swiggyorzomato":e.target.value })} ></input>
                   </div>
                   <div className='Delivery11  thirdparty '>
                    <input type="text" className='DineInInput1' placeholder=' Swiggy Price*' onChange={(e)=>setForm({ ...form,"Swiggy":e.target.value })} ></input>
                  <div className='Third1'>
                    <DropDown3
          selectedValue={selectedValuesthird1}
          onSelect={handleSelectThird1}
          options={optionsthird1}
          addOption={addOptionThird1}
          placeholder="Meal Type*"
        />
        </div>
                    </div>
                    <div className='Delivery11 thirdparty'>
                    <input type="text" className='DineInInput1' placeholder=' Zomato Price*' onChange={(e)=>setForm({ ...form,"Zomato":e.target.value })} ></input>
                    <div className='Third2'>
                    <DropDown3
          selectedValue={selectedValuesthird2}
          onSelect={handleSelectThird2}
          options={optionsthird2}
          addOption={addOptionThird2}
          placeholder="Meal Type*"
        />
        </div>
                    </div>
                    </div>
            </div> : ""}
        </div>

    </div>
  )
}

export default Specialavail