import React, { useState, useContext, useEffect } from 'react';
import "./PricingDetails.scss";
import Toggle from "../Toggle/Toggle";
import Specialavail from './Specialavail';
import Normalavail from "./Normalavail";
import { useDispatch } from 'react-redux';
import Tooltip from '../Tooltip/Tooltip';
import { PricingDetailRequest } from '../../redux/Actions';
import Dropdown from './Dropdown';
import { useNavigate } from 'react-router-dom';
import { Contextpagejs } from '../contextpage';
import info from "../../assets/images/info.png";
import { useSelector } from 'react-redux';
import { Value } from 'sass';
import axios from 'axios';
 

const PricingDetails = () => {
  const prizingDetail = useSelector(state => state.PricingDetailReducer.prizingData.mainForm);
  const [options, setOptions] = useState([]);
  const [options1, setOptions1] = useState(['Preparation Time', 'Option 2', 'Option 3', 'Option 5', 'Option 4']);
  const navigate = useNavigate();
  const { activeCategory, setActiveCategory } = useContext(Contextpagejs);

  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedValue1, setSelectedValue1] = useState([]);
  const[id,setId]=useState([])

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    Inventory1: "",
    Inventory2: "",
  });
  const [formerrors, setFormErrors] = useState({
    Inventory1: "",
    Inventory2: "",
  });
  const [dinein, setDineIn] = useState(false);
  const [inventory, setInventory] = useState(false);
  const [isOptionTrue, setIsOptionTrue] = useState(true);
  const [validationState, setValidationState] = useState({
    kitchen: { isValid: true, errorMessage: '' },
    preparationTime: { isValid: true, errorMessage: '' },
    DineinMeal: { isValid: true, errorMessage: '' },
    Pickup: { isValid: true, errorMessage: '' },
    Delivery: { isValid: true, errorMessage: '' },
    ThirdDelivery1: { isValid: true, errorMessage: '' },
    ThirdDelivery2: { isValid: true, errorMessage: '' },
    Pickupspecial: { isValid: true, errorMessage: '' },
    Deliveryspecial: { isValid: true, errorMessage: '' },
    Deliveryspecial1: { isValid: true, errorMessage: '' },
    Deliveryspecial2: { isValid: true, errorMessage: '' },

  });

  const handleSelect = (values) => {
      
    setSelectedValues(values);
    console.log(values)
    const matchingIds = values.map(value => {
      const foundOption = options.find(option => option.tagName === value);
      return foundOption ? foundOption.id : null;
    }).filter(id => id !== null);

    if (matchingIds.length > 0) {
      setId(  matchingIds)


    }
     
     
   
    validateDropdown(values, 'kitchen');
  };

  const addOption = (newOption) => {
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const handleSelect1 = (values) => {
    setSelectedValue1(values);
    validateDropdown(values, 'preparationTime');
  };

  const addOption1 = (newOption) => {
    setOptions1((prevOptions) => [...prevOptions, newOption]);
  };

  const validateDropdown = (value, field) => {
    let isValid = true;
    let errorMessage = '';

    if (value.length === 0) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    setValidationState((prevState) => ({
      ...prevState,
      [field]: { isValid, errorMessage },
    }));
  };

  const validateForm = () => {
    validateDropdown(selectedValues, 'kitchen');
    validateDropdown(selectedValue1, 'preparationTime');
    validateDropdown(selectedValue1, 'DineinMeal');
    validateDropdown(selectedValue1, 'DineinService');
    return validationState.kitchen.isValid && validationState.preparationTime.isValid && validationState.Pickup.isValid && validationState.Delivery.isValid&& validationState.ThirdDelivery1.isValid&& validationState.ThirdDelivery2.isValid&& validationState.Pickupspecial.isValid&& validationState.Deliveryspecial.isValid&& validationState.Deliveryspecial1.isValid&& validationState.Deliveryspecial2.isValid;
  };

  const getNormalForm = (normalForm) => {
    mainForm = { ...mainForm, normalForm };
  };

  const getSpecialForm = (specialForm) => {
    mainForm = { ...mainForm, specialForm };
  };

  let mainForm = {
    form,
    kitchenstation: selectedValues,
    Preparationtime: selectedValue1,
  };

  
 
  useEffect(()=>{

    if (prizingDetail?.form) {
      setSelectedValues(prizingDetail?.kitchenstation  || selectedValues);
      // Other state initializations...
    }

    if (prizingDetail?.normalForm) {
      setSelectedValue1(prizingDetail?.Preparationtime  || selectedValue1);
      // Other state initializations...
    }

    if (prizingDetail?.normalForm) {
      setSelectedValue1(prizingDetail?.Preparationtime  || selectedValue1);
      // Other state initializations...
    }

       if (prizingDetail?.form) {
        setForm({Inventory1:prizingDetail?.form.Inventory1  || form.Inventory1 ,
          Inventory2:prizingDetail?.form.Inventory2  || form.Inventory2

        });

        setInventory(true )
 
      // Other state initializations...
    }

   






  },[])
  const validateField = (name, value) => {
    let flag=true
    let errors = { ...formerrors };
    if (name === 'Inventory1') {
        if (!value && inventory) {
            errors.Inventory1 = "Please Fill this Field";
            flag=false
        } else {
            delete errors.Inventory1;
        }
    } else if (name === 'Inventory2') {
        if (!value && inventory) {
            errors.Inventory2 = "Please Fill this Field";
            flag=false
        } else {
            delete errors.Inventory2;
        }
    }
    setFormErrors(errors);
    return flag
};
    const handleBlur=(e)=>{
      const {name,value}=e.target
      validateField(name,value)
    }

    const dispatchEvent = () => {
      // Validate each field individually before dispatching
      const allFieldsValid = Object.keys(form).every(field => {
          const isValid = validateField(field, form[field]);
          return isValid;
      });
  
      // Optionally validate the entire form
      const isValid = validateForm(); // Ensure validateForm handles overall form validation
      
      if (allFieldsValid && isValid) {
          dispatch(PricingDetailRequest({ mainForm }));
          setActiveCategory("Step 3: Item customizations");
      }


    
  };


  useEffect(()=>{
    getApi();
  
  },[])

  const getApi=async()=>{
    try{
      const response= await axios.get("https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=Tag")
      
      setOptions(response.data)
    
 
     }catch(error){
       console.log(error)
     }
  }

  console.log(id  )

  
  return (
    <div className="pricingdetails-container">
      <div className='pricing-form'>
        <div className='Tool'>
          <p className='KitchenRelatedHeading'>Kitchen Related</p>
          <Tooltip message="Kitchen Related">
            <div className="ToolKitchen">
              <img src={info} alt="" width={20} height={20} />
            </div>
          </Tooltip>
        </div>

        <div className='KitchenRelated'>
          <div className='D1kitchen'>
            <Dropdown 
              selectedValues={selectedValues} 
              onSelect={handleSelect} 
              options={options.map((elem)=>elem.tagName)  } 
              addOption={addOption}
              label="Kitchen Station1*"
              onBlur={() => validateDropdown(selectedValues, 'kitchen')}
              validation={validationState.kitchen}
            />
          </div>

          <div className='D2kitchen'>
            <Dropdown
              selectedValues={selectedValue1}
              onSelect={handleSelect1}
              options={options1}
              addOption={addOption1}
              label="Preparation Time*"
              onBlur={() => validateDropdown(selectedValue1, 'preparationTime')}
              validation={validationState.preparationTime}
            />
          </div>
        </div>

        <div className='Kitchen-checkbox'>
          <input type="checkbox" className='checkbox1-Kitchen' />
          <label className='Inventorycheck'>Don't print the item in Master KOT</label>
        </div>

        <div className='InventoryToggle'>
          <div><p className='IHeading'>Inventory</p></div>
          <div className='toggleI'><Toggle toggle={inventory} setToggle={setInventory} /></div>
        </div>

        <div className='InventorySection'>
          {inventory && (
            <div>
              <div className='InventoryHeading'>
                <p>Max No. of servings per day*</p>
                <p className='threshold'>Threshold*</p>
              </div>
              <div className='InventoryInput'>
                <input
                  className="I1"
                  type="text"
                  name='Inventory1'
                  value={form.Inventory1}
                  onChange={(e) => setForm({ ...form, "Inventory1": e.target.value })}
                  onBlur={handleBlur}
                  style={{
                    borderColor:formerrors.Inventory1 ? 'red' : 'rgba(0, 0, 0, 0.3)'
                }}
                />
                
                <Tooltip message="Max no Serving per day">
                  <div className="ToolInventory">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip>
                
                <input
                  className='I1'
                  type="text"
                  name='Inventory2'
                  value={form.Inventory2}
                  onBlur={handleBlur}
                  onChange={(e) => setForm({ ...form, "Inventory2": e.target.value })}
                  style={{
                    borderColor:formerrors.Inventory2 ? 'red' : 'rgba(0, 0, 0, 0.3)'
                }}
                />
                <Tooltip message="Threshold">
                  <div className="ToolInventory1">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip>
              </div>
              {formerrors.Inventory1 && <p className='ErrorsForm' >{formerrors.Inventory1}</p>}
              {formerrors.Inventory2 && <p className='ErrorsFormi2' >{formerrors.Inventory2}</p>}
              <div className='Inventcheckbox'>
                <div className='checkboxI'>
                  <input type="checkbox" className='checkbox1-color' />
                  <label className='InventoryHeadingII'>Reset inventory everyday</label>
                </div>

                <div className='checkbox2'>
                  <input type="checkbox" className='checkbox1-color' />
                  <label className='InventoryHeadingII'>Show next available time when maximum count is reached</label>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className='NormalSpecial'>
          <div className='Normal'>
            <input
              type="radio"
              value="true"
              checked={isOptionTrue === true}
              onChange={() => setIsOptionTrue(true)}
              className='N1radio'
            />
            <label className='N1'>Normal Availability</label>
          </div>
          <div className='Special'>
            <input
              type="radio"
              value="false"
              checked={isOptionTrue === false}
              onChange={() => setIsOptionTrue(false)}
              className='S1radio'
            />
            <label className='S1'>Special Availability</label>
          </div>
        </div>

        {isOptionTrue ? <Normalavail getNormalForm={getNormalForm} validateDropdown={validateDropdown} dinein={dinein} setDineIn={setDineIn} validationState={validationState} setValidationState={setValidationState} /> : <Specialavail getSpecialForm={getSpecialForm} validateDropdown={validateDropdown} validationState={validationState} />}

        <div className="buttoncomponentpricing">
          <div className="saveandnextPricing">
            <button className="clearallPricing">
              Clear All
            </button>
            <button className="link saveall" onClick={dispatchEvent}>
              Save & next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingDetails;
