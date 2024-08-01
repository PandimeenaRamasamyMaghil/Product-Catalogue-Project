import {React,useState} from 'react'
import Toggle from '../Toggle/Toggle'
import './Normalavail.scss'
import DaysCheck from './DaysCheck'
import Dropdown2 from './DropDown2'
import DropDown3 from './DropDown3'
import DaysCheckDin from "./DaysCheckDinein"
const Specialavail = ({getNormalForm}) => {
const [dinein, setDineIn] = useState(false);
  const [online, setOnline] = useState(false)
  const [pickup, setPickup] = useState(false)
  const [delivery, setDelivery] = useState(false)
  const [dineinentry, setDineInEntry] = useState([""]);
 const[Normaldays,setNormalDays]=useState([])
 const [options2, setOptions2] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options3, setOptions3] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options4, setOptions4] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options5, setOptions5] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [options6, setOptions6] = useState(['Breakfast', 'Lunch', 'Dinner']);
 const [selectedValues, setSelectedValues] = useState([]);
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

      const mainForm= 
        {
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
      DineIn:dineInDates1
        }
    
   
    
        
    
      const AddDineInEntry = () => {
        setDineInEntry([...dineinentry, dineinentry])
        setDineInFields([...dineinfields, { DineInPrice: '', DineInMealType: '', DineInService: '' }]);
      
      }
      const handleChange = (index, e) => {
      
        const newEntries = [...dineinfields];
        newEntries[index][e.target.name] = e.target.value;
        setDineInFields(newEntries);
        
      };

      const addDay=(index)=>{
      const newEntries = [...dineinfields];
    newEntries[index].showDay = newEntries[index].showDay;
    setDineInFields(newEntries);
    const newFields = [...dineinfields];
    newFields[index].showDay = !newFields[index].showDay;
    setDineInFields(newFields);
}

      const addDayPickup=()=>{
        setShowDayPickup(!showDayPickup)

      }

      const addDayDelivery=()=>{
        setShowDayDelivery(!showDayDelivery)

      }

      const addDayThird=()=>{
        setShowDayThird(!showDayThird)
      }
      
      console.log(mainForm)
      getNormalForm(mainForm)

      const handleSelect2 = (value, index) => {
        const newSelectedValues = [...selectedValues];
        newSelectedValues[index] = value;
        setSelectedValues(newSelectedValues);
    
        const newDineInFields = [...dineinfields];
        newDineInFields[index].DineInService = value;
        setDineInFields(newDineInFields);
      };
const addOption2 = (newOption) => {
  setOptions2([...options2, newOption]);
};
const handleSelect3 = (value) => {
  setSelectedValues2(value);
};
const addOption3 = (newOption) => {
  setOptions3([...options3, newOption]);
};
const handleSelect4 = (value) => {
  setSelectedValues3(value);
};
const addOption4 = (newOption) => {
  setOptions4([...options4, newOption]);
};
const handleSelect5 = (value) => {
  setSelectedValues4(value);
};
const addOption5 = (newOption) => {
  setOptions5([...options5, newOption]);
};
const handleSelect6 = (value) => {
  setSelectedValues5(value);
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

  console.log(DayThird)

    
  return (
    <div>
      <div className='AvailDaycheck'>
        <h1 className='AvailableDaysHeading'>Available days</h1>
        <div className='dayschecking'>
        <DaysCheck checkedItems={Normaldays} setCheckedItems={setNormalDays}></DaysCheck>

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
            
            {dineinentry.map((entry,index) => {
              return (
                <>
                   <div className='DineInInput11Normal' key={index}>
          <input
            type="text"
            placeholder='Price*'
            name='DineInPrice'
            value={entry.DineInPrice}
            className='DineInInput1Normal'
            onChange={(e) => handleChange(index, e)}
          />
          <DropDown3
                    selectedValue={selectedValuesmealtype[index] || ''}
                    onSelect={handleSelectMealtype}
                    options={optionsmealtype}
                    addOption={addOptionMealType}
                    placeholder="Meal Type*"
                    index={index}
                    onChange={(e)=>handleMealSelect2(index,e.target.value)}
                  />

          
          
       
          <Dropdown2
                    selectedValue={selectedValues[index] || ''}
                    onSelect={handleSelect2}
                    options={options2}
                    addOption={addOption2}
                    placeholder="Service Area*"
                    index={index}
                    onChange={(e)=>handleServiceSelect2(index,e.target.value)}
                  />
       
          
        </div>
        <div className='dineInChooseDayContainer'>
            <h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>
            <h3 className='dineInChooseDayContainer-chooseheading' onClick={()=>addDay(index)}>Choose Day</h3>

            


        </div>
        <div className='dayspickup'>
        {dineinfields[index].showDay && (
            <DaysCheckDin checkedItems={dineInDates1} setCheckedItems={setDineInDates1} index={index} />
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
                   
                   <div className='PickupInput11Normal'>
                    <input type="text" className='DineInInput1Normal' placeholder='Price*' onChange={(e) => setformNormal({ ...formNormal,"PickuppriceNormal":e.target.value })} ></input>
                
                    <DropDown3
          selectedValue={selectedValues2}
          onSelect={handleSelect3}
          options={options3}
          addOption={addOption3}
          placeholder="Meal Type*"
        />
      
                    </div>
                    <div>
                    
                    <div className='dineInChooseDayContainer'>
            <h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>
            <h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayPickup}>Choose Day</h3>
          
              
          

            


        </div>
        <div className='dayspickup'>
        {showDayPickup?<DaysCheck checkedItems={DayPickup} setCheckedItems={setDayPickup}/>:""}

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
                   
                   <div className='DineInInput11Normal delivery'>
                    <input type="text" className='DineInInput1Normal' placeholder='Price*' onChange={(e) => setformNormal({ ...formNormal,"DeliverypriceNormal":e.target.value })} ></input>
                    
                    <DropDown3
          selectedValue={selectedValues3}
          onSelect={handleSelect4}
          options={options4}
          addOption={addOption4}
          placeholder="Meal Type*"
        />
                  
                    </div>
                    <div className='dineInChooseDayContainer'>
            <h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>
            <h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayDelivery}>Choose Day</h3>

            


        </div>
        <div className='dayspickup'>
        {showDayDelivery?<DaysCheck  checkedItems={DayDelivery} setCheckedItems={setDayDelivery}/>:""}

        </div>
                    </div>
                    
                   : ""}
                   </div>

                   
                  
                   <h1 className='ThirdDeliveryRelatedHeadingNormal'>Third Party delivery</h1>
                   <div>
                   
                   <div className='Delivery11'>
                   <input type="text" className='DeliveryInput2Normal' placeholder='Swiggy,Zomato' onChange={(e)=>setformNormal({ ...formNormal,"SwiggyorzomatoNormal":e.target.value })} ></input>
                   </div>
                   <div className='Delivery12'>
                    <input type="text" className='DineInInput1Normal' placeholder=' Swiggy Price*' onChange={(e)=>setformNormal({ ...formNormal,"SwiggyNormal":e.target.value })} ></input>
                    <div className='Third1'>
                    <DropDown3
          selectedValue={selectedValues4}
          onSelect={handleSelect5}
          options={options5}
          addOption={addOption5}
          placeholder="Meal Type*"
        />
        </div>
                  
                    </div>
                    <div className='Delivery13'>
                    <input type="text" className='DineInInput1Normal' placeholder=' Zomato Price*' onChange={(e)=>setformNormal({ ...formNormal,"ZomatoNormal":e.target.value })} ></input>
                    <div className='Third2'>
                    <DropDown3
          selectedValue={selectedValues5}
          onSelect={handleSelect6}
          options={options6}
          addOption={addOption6}
          placeholder="Meal Type*"
        />
        </div>
                  
                    </div>
                    </div>
                    <div className='dineInChooseDayContainer'>
            <h3 className='dineInChooseDayContainerHeading'>Setup for specific days?</h3>
            <h3 className='dineInChooseDayContainer-chooseheading' onClick={addDayThird}>Choose Day</h3>

            


        </div>
        {showDayThird?<DaysCheck checkedItems={DayThird} setCheckedItems={setDayThird}/>:""}
            </div>
             
            
            : ""}
        </div>

    </div>
  )
}

export default Specialavail