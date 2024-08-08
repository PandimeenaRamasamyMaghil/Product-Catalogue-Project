import {React,useState,useEffect} from 'react'
import Toggle from '../Toggle/Toggle'
import './Normalavail.scss'
import DaysCheck from './DaysCheck'
import Dropdown2 from './DropDown2'
import DropDown3 from './DropDown3'
import DaysCheckDin from "./DaysCheckDinein"
import { useSelector } from 'react-redux'

const Specialavail = ({getNormalForm,validateDropdown,validationState,dinein,setDineIn}) => {

  const [online, setOnline] = useState(false)
  const [pickup, setPickup] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [dineinentry, setDineInEntry] = useState([""]);
 const[Normaldays, setNormalDays ]=useState([ ])
 const [options2, setOptions2] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options3, setOptions3] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options4, setOptions4] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options5, setOptions5] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options6, setOptions6] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [availabilityid,setAvailabilityid]=useState([])
 const [selectedValues, setSelectedValues] = useState("");
 const [selectedValues2, setSelectedValues2] = useState("");
 const [selectedValues3, setSelectedValues3] = useState("");
 const [selectedValues4, setSelectedValues4] = useState("");
 const [selectedValues5, setSelectedValues5] = useState("");
 
 
 
 const [selectedValuesmealtype, setSelectedValuesMealType] = useState([]);
 const [optionsmealtype, setOptionsMealType] = useState(['Breakfast', 'Lunch', 'Dinner']);
//   {_-------------------Array for Day Check---------------------------------}
const[dineInDates,setDineInDates]=useState([])
  const[DayPickup,setDayPickup]=useState([])
  const[DayDelivery,setDayDelivery]=useState([])
  const[DayThird,setDayThird]=useState([])
  const [dineInDates1, setDineInDates1] = useState([[]]);
  

//   {_-------------------Use State  for Showing Day checck ---------------------------------}
const[showDay,setShowDay]=useState(false)
const[showDayPickup,setShowDayPickup]=useState(false)

const[showDayDelivery,setShowDayDelivery]=useState(false)
const[showDayThird,setShowDayThird]=useState(false)
const prizingDetail = useSelector(state => state.PricingDetailReducer.prizingData.mainForm);








 
    const[formNormal,setformNormal]=useState({

 
        PickuppriceNormal:"",
        PickupmealtypeNormal:"",
        DeliverypriceNormal:"",
        DeliverymealtypeNormal:"",
        SwiggyorzomatoNormal:"",
        SwiggyNormal:"",
        SwiggymealtypeNormal:"",
        ZomatoNormal:"",
        ZomatomealtypeNormal:"",
       
    
      })

      

      const[dineinfields,setDineInFields]=useState([{
        DineInPrice:"",
        DineInMealType:"",
        DineInService:"",
        showDay:false
       
      }])
      const [buttonText, setButtonText] = useState( [{ChooseDay: 'Choose Day'}]);
      const [Text, setText] = useState(dineinfields.map(() => 'Set up for Specific Day'));

      const mainForm= 
        {
          availabilityid:availabilityid,
        formNormal,
        dineinfields,
       Normaldays:Normaldays, 
       DeliveryMealType:selectedValues3,
       PicupMealType:selectedValues2,
      Pickup:DayPickup,
   
       DineInServiceArea:[selectedValues],
        Delivery:DayDelivery,
   
        thirdParty:DayThird,
      WeekDays:dineInDates1,
      Delivery:DayDelivery,
      thirdParty:DayThird,
      DineIn:dineInDates1,
      Swiggy:selectedValues4,
      Zomato:selectedValues5
        }
        useEffect(() => {
          if (prizingDetail?.normalForm?.formNormal) {
            setformNormal({
              PickuppriceNormal: prizingDetail.normalForm.formNormal.PickuppriceNormal || "",
              PickupmealtypeNormal: prizingDetail.normalForm.formNormal.PickupmealtypeNormal || "",
              DeliverypriceNormal: prizingDetail.normalForm.formNormal.DeliverypriceNormal || "",
              DeliverymealtypeNormal: prizingDetail.normalForm.formNormal.DeliverymealtypeNormal || "",
              SwiggyorzomatoNormal: prizingDetail.normalForm.formNormal.SwiggyorzomatoNormal || "",
              SwiggyNormal: prizingDetail.normalForm.formNormal.SwiggyNormal|| "",
              SwiggymealtypeNormal: prizingDetail.normalForm.formNormal.SwiggymealtypeNormal || "",
              ZomatoNormal: prizingDetail.normalForm.formNormal.ZomatoNormal || "",
              ZomatomealtypeNormal: prizingDetail.normalForm.formNormal.ZomatomealtypeNormal || "",
            });

            const updatedFields = prizingDetail?.normalForm?.dineinfields.map(item => ({
              DineInPrice: item?.DineInPrice || "",
              DineInMealType: item.DineInMealType || [], // Ensure it's an array for dropdowns
              DineInService: item?.DineInService || "",
            }));
        
            setDineInFields(updatedFields);
        
            // Initialize selected values
            const initialSelectedValues = updatedFields.map(item => item.DineInMealType);
            setSelectedValuesMealType(initialSelectedValues);

            const initialSelectedValues2 = updatedFields.map(item => item.DineInService);
            setSelectedValues(initialSelectedValues2);
            setDineIn(true)

            const WeekDays = prizingDetail?.normalForm?.WeekDays;
            if (Array.isArray(WeekDays) && WeekDays.every(Array.isArray)) {
              setDineInDates1(WeekDays);
              console.log(WeekDays)
            }
       
            
      
            
          
          }

          
      const mainForm= 
      {
        availabilityid,
      formNormal,
      dineinfields,
     Normaldays:Normaldays, 
     DeliveryMealType:selectedValues3,
     PicupMealType:prizingDetail?.normalForm?.PicupMealType||selectedValues2,
    Pickup:DayPickup,
 
     DineInServiceArea:[selectedValues],
      Delivery:DayDelivery,
 
      thirdParty:DayThird,
    WeekDays:dineInDates1,
    Delivery:DayDelivery,
    thirdParty:DayThird,
    DineIn:dineInDates1,
   
      }

          if (prizingDetail?.normalForm) {
            setSelectedValues2(prizingDetail.normalForm.PicupMealType  || selectedValues2);
            // Other state initializations...
          }
      
      if (prizingDetail?.normalForm) {
        setSelectedValues3(prizingDetail.normalForm.DeliveryMealType  || selectedValues3);
        // Other state initializations...
      }
      if (prizingDetail?.normalForm) {
        setSelectedValues4(prizingDetail.normalForm.Swiggy  || selectedValues4);
        // Other state initializations...
      }
      if (prizingDetail?.normalForm) {
        setSelectedValues5(prizingDetail.normalForm.Zomato  || selectedValues5);
        // Other state initializations...
      }

      if (prizingDetail?.normalForm) {
      
        setDayPickup(prizingDetail.normalForm.Pickup || []);
        
        setShowDayPickup(true     )
    } 

    if (prizingDetail?.normalForm) {
      
      setDayDelivery(prizingDetail.normalForm.Delivery || []);
      
      setShowDayDelivery(true)
  } 

  
  if (prizingDetail?.normalForm) {
      
    setDayThird(prizingDetail.normalForm.thirdParty || []);

    setShowDayThird(true)
} 

if (prizingDetail?.normalForm) {
      
  setNormalDays(prizingDetail.normalForm.Normaldays || []);

} 
  
    
      




        }, []);
        const handleDelete = (index) => {
          const newEntries = dineinfields.filter((_, i) => i !== index); // Filter out the entry at the given index
          setDineInFields(newEntries); // Update the dineinfields state
      
          const newSelectedValues1 = { ...selectedValues };
          delete newSelectedValues1[index];
          setSelectedValues(newSelectedValues1);
      
          const newSelectedValuesMealtype = { ...selectedValuesmealtype };
          delete newSelectedValuesMealtype[index];
          setSelectedValuesMealType(newSelectedValuesMealtype);
          const newarrary=[...dineInDates1]
          newarrary.splice(index,1)
          setDineInDates1(newarrary)
          console.log(newarrary)
      };
      
    
        
    
      const AddDineInEntry = () => {
        setDineInEntry([...dineinentry, dineinentry])
        setDineInFields([...dineinfields, { DineInPrice: '', DineInMealType: '', DineInService: '' }]);
        setButtonText([...buttonText, 'Choose Day']);
        setText([...buttonText, 'Set up for Specific Days']);

      
      }
      const handleChange = (index, e) => {
      
        const newEntries = [...dineinfields];
        newEntries[index][e.target.name] = e.target.value;
        setDineInFields(newEntries);
        
      };

      const addDay=(index)=>{
      const newEntries = [...dineinfields];
      const updatedFields = [...dineinfields];
      const updatedtextFields=[...dineinfields]
    newEntries[index].showDay = newEntries[index].showDay;
    setDineInFields(newEntries);
    const newFields = [...dineinfields];
    newFields[index].showDay = !newFields[index].showDay;
    setDineInFields(newFields);
     }

      const addDayPickup=()=>{
        setShowDayPickup(true)

      }
      
      const addDayPickupfalse=()=>{
        setShowDayPickup(false)

      }

      const addDayDelivery=()=>{
        setShowDayDelivery(true)

      }
      const addDayDeliveryfalse=()=>{
        setShowDayDelivery(false)

      }

      const addDayThird=()=>{
        setShowDayThird(true)
      }
      
      const addDayThirdfalse=()=>{
        setShowDayThird(false)
      }
      console.log(mainForm)
      getNormalForm(mainForm)

      const handleSelect2 = (values, index) => {
        setSelectedValues(prevState => ({
          ...prevState,
          [index]: values
        }));
      
        const newDineInFields = [...dineinfields];
        newDineInFields[index].DineInService = values;
        setDineInFields(newDineInFields);
      };
      
      const addOption2 = (newOption) => {
        setOptions2([...options2, newOption]);
      };
const handleSelect3 = (value) => {

  setSelectedValues2(value);
  validateDropdown(value, 'Pickup');
};
const addOption3 = (newOption) => {
  setOptions3([...options3, newOption]);
};
const handleSelect4 = (value) => {
  setSelectedValues3(value);
  validateDropdown(value, 'Delivery');
};
const addOption4 = (newOption) => {
  setOptions4([...options4, newOption]);
};
const handleSelect5 = (value) => {
  setSelectedValues4(value);
  validateDropdown(value, 'ThirdDelivery1');

};
const addOption5 = (newOption) => {
  setOptions5([...options5, newOption]);
};
const handleSelect6 = (value) => {
  setSelectedValues5(value);
  validateDropdown(value, 'ThirdDelivery2');
};
const addOption6 = (newOption) => {
  setOptions6([...options6, newOption]);
};
 
const handleSelectMealtype = (value, index) => {
  const newSelectedValues = [...selectedValuesmealtype];
  newSelectedValues[index] = value;
  setSelectedValuesMealType(newSelectedValues);

  const newDineInFields = [...dineinfields];
  newDineInFields[index].DineInMealType = value;
  
  setDineInFields(newDineInFields);
  if(dinein){
validateDropdown(value,index)
}
};
const addOptionMealType = (newOption) => {
  setOptionsMealType([...optionsmealtype, newOption]);
};
const handleServiceSelect2 = (index, value) => {
  setSelectedValues(value);
  const newarrary=[...dineinfields];
  newarrary[index].DineInService=value;
  setDineInFields(newarrary)

};
const handleMealSelect2 = (index, value) => {
    setSelectedValuesMealType(value);
    const newarrary=[...dineinfields];
    newarrary[index].DineInMealType=value;
    setDineInFields(newarrary)
 
  };

  console.log(mainForm)
  
  
  return (
    <div>
      <div className='AvailDaycheck'>
        <h1 className='AvailableDaysHeading'>Available days</h1>
        <div className='dayschecking'>
        <DaysCheck checkedItems={Normaldays} setCheckedItems={setNormalDays} id={availabilityid} setId={setAvailabilityid}></DaysCheck>

        </div>
        </div>
        <h1 className='KitchenRelatedHeadingNormal'>Avaliable Service Streams</h1>
        {/* DineIn Related */}
        <div className='DineInRelated'>
          <h1 className='DineInRelatedHeadingNormalAvail'>Dine In</h1>
          <div className='toggleII'><Toggle toggle={dinein} setToggle={setDineIn} /></div>
        </div>
        {dinein ? (
          <>
            {/* <h1 className='AvailableDaysHeadingNormal'>Available days</h1> */}
            
            {dineinfields.map((entry,index) => {
              return (
                <>
                 <p className='LabelPrice'>Price*</p>
                   <div className='DineInInput11Normal' key={index} style={{ zIndex: dineinfields.length - index }}>
          <input
            type="text"
            
            name='DineInPrice'
            value={entry.DineInPrice}
            className='DineInInput1Normal'
            onChange={(e) => handleChange(index, e)}
            
          />
          <div className='Mealz'>
          <DropDown3
                    selectedValues={selectedValuesmealtype[index] || ''}
                    onSelect={(values)=>handleSelectMealtype(values,index)}
                    options={optionsmealtype}
                    addOption={addOptionMealType}
                    placeholder="Meal Type*"
                    index={index}
                    label="Meal Type*"
                    onBlur={() => validateDropdown(selectedValuesmealtype[index] || [], index)}
                    validation={validationState[index] || { isValid: true, errorMessage: '' }}
                    onChange={(e)=>handleMealSelect2(index,e.target.value)}
                  />

</div>
          
       <div className='Service'>
          <Dropdown2
                    selectedValues={selectedValues[index] || ''}
                
                    onSelect={(values) => handleSelect2(values, index)}
                    options={options2}
                    addOption={addOption2}
                    placeholder="Service Area*"
                    index={index}
                    label="Service Area*"
                    onChange={(e)=>handleServiceSelect2(index,e.target.value)}
                  />
       
       </div>
       <h1 onClick={() => handleDelete(index)} className='Delete'>- Delete</h1>
        </div>
        <div className='dineInChooseDayContainer'>
              
                  
                  <h3 className='dineInChooseDayContainerHeading'>Choose for Specific day</h3>
                  <h3 className='dineInChooseDayContainer-chooseheading' onClick={() => addDay(index)}>
                 ChooseDay
                </h3>
               
              </div>
        <div className='dayspickup'>
        {dineinfields[index].showDay && (
            <DaysCheckDin checkedItems={dineInDates1} setCheckedItems={setDineInDates1} index={index} {...(availabilityid ? { id: availabilityid, setId: setAvailabilityid } : {})} 
/>
        )}
        </div>
       
       
                </>
              )
            })
            }

            <h1 className='AddentryNormal' onClick={AddDineInEntry}> + Add entry</h1>


          </>
        ) : ""
        }
        {/* OnlineRelated */}
        <div className='OnlineRelatedNormal'>
          <h1 className='OnlineRelatedHeadingNormal'>Online</h1>
          <div className='toggleIII'><Toggle toggle={online} setToggle={setOnline} /></div>
        </div>
        <div className='OnlineSectionNormal'>
          {online ?
            <div className='onlineselected'>
              {/* PickupRelated */}
              <div className='PickupRelatedNormal'>
                <h1 className='PickupRelatedHeadingNormal'>Pick Up</h1>
                <div className='toggleIV'><Toggle toggle={pickup} setToggle={setPickup} /></div>
                </div>
                <div className='PickupSectionNormal'>
                {pickup ?
                 <div>
                   <p className='LabelPricePickup'> Price*</p>
                   <div className='PickupInput11Normal'>
                    <input type="text" className='DineInInput1Normal'  value={formNormal.PickuppriceNormal}  onChange={(e) => setformNormal({ ...formNormal,"PickuppriceNormal":e.target.value })} ></input>
                <div className='PrizeD'>
                    <DropDown3
          selectedValues={ selectedValues2}
          onSelect={handleSelect3}
          options={options3}
          addOption={addOption3}
          onBlur={() => validateDropdown(selectedValues2, 'Pickup')}
              validation={validationState.Pickup}
          
          label="Meal Type*"
        />
        </div>
      
                    </div>
                    <div>
             
            <div className='dineInChooseDayContainer'>
            {showDayPickup?<h3 className='dineInChooseDayContainerHeading'>Back for default days</h3>:<h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>}
            {showDayPickup?<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayPickupfalse}>Default days</h3>:<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayPickup}>Choose Day</h3>}
          </div>

        <div className='dayspickup'>
        {showDayPickup?<DaysCheck checkedItems={DayPickup} setCheckedItems={setDayPickup} {...(availabilityid ? { id: availabilityid, setId: setAvailabilityid } : {})} 
      />:""}

        </div>
                    

        </div>
                    </div>

                    
                   : ""}
                   </div>
                   
          {/* DeliveryRelated    */}
              <div className='DeliveryRelatedNormal'>
              <h1 className='DeliveryRelatedHeadingNormal'>Delivery</h1>
                <div className='toggleV'><Toggle toggle={delivery} setToggle={setDelivery} /></div> 
                </div>
                <div className='DeliverySectionNormal'>
                {delivery ?
                 <div>
                   <p className='LabelPrice'> Price*</p>
                   <div className='DineInInput11Normal delivery'>
                    <input type="text" className='DineInInput1Normal' value={formNormal.DeliverypriceNormal} onChange={(e) => setformNormal({ ...formNormal,"DeliverypriceNormal":e.target.value })} ></input>
                    <div className='DeliveryD'>
                    <DropDown3
          selectedValues={ selectedValues3}
          onSelect={handleSelect4}
          options={options4}
          addOption={addOption4}
          label="Meal Type*"
          onBlur={() => validateDropdown(selectedValues3, 'Delivery')}
              validation={validationState.Delivery}
        />
        </div>          
                    </div>
                    <div className='dineInChooseDayContainer'>
            {showDayDelivery?<h3 className='dineInChooseDayContainerHeading'>Back for default days</h3>:<h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>}
            {showDayDelivery?<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayDeliveryfalse}>Default days</h3>:<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayDelivery}>Choose Day</h3>}
          </div>

        <div className='dayspickup'>
        {showDayDelivery?<DaysCheck checkedItems={DayDelivery} setCheckedItems={setDayDelivery} {...(availabilityid ? { id: availabilityid, setId: setAvailabilityid } : {})} 
        />:""}

        </div>
                    </div>
                    
                   : ""}
                   </div>

                   
                  
                   <h1 className='ThirdDeliveryRelatedHeadingNormal'>Third Party delivery</h1>
                   <div>
                   <p className='LabelPrice1'> Swiggy,Zomato*</p>
                   <div className='Delivery11'>
                   <input type="text" className='DeliveryInput2Normal'     onChange={(e)=>setformNormal({ ...formNormal,"SwiggyorzomatoNormal":e.target.value })} ></input>
                   </div>
                   <p className='LabelPrice2'> Swiggy Price*</p>
                   <div className='Delivery12'>
                    <input type="text" className='DineInInput1Normal' value={formNormal.SwiggyNormal}   onChange={(e)=>setformNormal({ ...formNormal,"SwiggyNormal":e.target.value })} ></input>
                    <div className='Third1'>
                    <DropDown3
          selectedValues={selectedValues4}
          onSelect={handleSelect5}
          options={options5}
          addOption={addOption5}
          placeholder="Meal Type*"
          label="Meal Type*"
          onBlur={() => validateDropdown(selectedValues4, 'ThirdDelivery1')}
              validation={validationState.ThirdDelivery1}
        />
        </div>
                  
                    </div>
                    <p className='LabelPrice2'> Zomato Price*</p>
                    <div className='Delivery13'>
                    <input type="text" className='DineInInput1Normal' value={formNormal.ZomatoNormal} onChange={(e)=>setformNormal({ ...formNormal,"ZomatoNormal":e.target.value })} ></input>
                    <div className='Third2'>
                    <DropDown3
          selectedValues={selectedValues5}
          onSelect={handleSelect6}
          options={options6}
          addOption={addOption6}
          placeholder="Meal Type*"
          label="Meal Type*"
          onBlur={() => validateDropdown(selectedValues5, 'ThirdDelivery2')}
              validation={validationState.ThirdDelivery2}
        />
        </div>
                  
                    </div>
                    </div>
                    <div className='dineInChooseDayContainer'>
            {showDayThird?<h3 className='dineInChooseDayContainerHeading'>Back to Default days</h3>:<h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>}
            {showDayThird?<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayThirdfalse}>Default Days</h3>:<h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayThird}>Choose Day</h3>}

            


        </div>
        {showDayThird?<DaysCheck checkedItems={DayThird} setCheckedItems={setDayThird} {...(availabilityid ? { id: availabilityid, setId: setAvailabilityid } : {})} 
        />:""}
            </div>
             
            
            : ""}
        </div>

    </div>
  )
}

export default Specialavail