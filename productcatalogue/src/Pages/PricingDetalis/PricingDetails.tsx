import React, { useState, useContext, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import "./PricingDetails.scss";
import Toggle from "../../Components/Toggle/Toggle"
import Specialavail from '../../Components/SpecialAvail/Specialavail';
import Normalavail from '../../Components/Normalavail/Normalavail';
import { useDispatch } from 'react-redux';
import Tooltip from '../../Components/Tooltip/Tooltip';
import { PricingDetailRequest } from '../../redux/Actions';
import Dropdown from '../../Components/DropDown/Dropdown';
import { useNavigate } from 'react-router-dom';
import { Contextpagejs } from '../contextpage';
import info from "../../assets/png/info.png";
import { useSelector } from 'react-redux';
import { SubmitHandler } from 'react-hook-form';
import axios from 'axios';

interface ValidationState {
  isValid: boolean;
  errorMessage: string;
}
interface DropdownValidationState {
  kitchen: ValidationState;
  preparationTime: ValidationState;
  DineinMeal: ValidationState;
  Pickup: ValidationState;
  Delivery: ValidationState;
  ThirdDelivery1: ValidationState;
  ThirdDelivery2: ValidationState;
  Pickupspecial: ValidationState;
  Deliveryspecial: ValidationState;
  Deliveryspecial1: ValidationState;
  Deliveryspecial2: ValidationState;
}
interface FormState {
  Inventory1: string;
  Inventory2: string;
}

interface MainForm {
  form: FormState;
  kitchenstation: string[];
  Preparationtime: string[];
  KitchenStationId: string[];
  normalForm?: any;
  specialForm?: any;

}


interface PricingDetailsProps {}
 

const PricingDetails: React.FC<PricingDetailsProps> = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const{isExpanded,setIsExpanded}=useContext(Contextpagejs)
  const prizingDetail = useSelector((state: any) => state.PricingDetailReducer.prizingData.mainForm);
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

  
     
     
   
    

  

  
  const validateDropdown = (value: string[], field: string | number) => {
    let isValid = true;
    let errorMessage = '';
  
    if (value.length === 0) {
      isValid = false;
      errorMessage = 'This field is required';
    }
  
    if (typeof field === 'string') {
      setValidationState((prevState) => ({
        ...prevState,
        [field]: { isValid, errorMessage },
      }));
    } else {
      console.error('Field type is not a string, cannot update validation state');
    }
  };
  const validateForm = (): boolean => {
    validateDropdown(selectedValues, 'kitchen');
    validateDropdown(selectedValue1, 'preparationTime');
    return validationState.kitchen.isValid && validationState.preparationTime.isValid;
  };


  const getNormalForm = (normalForm: any) => {
    mainForm = { ...mainForm, normalForm };
  };

  const getSpecialForm = (specialForm: any) => {
    mainForm = { ...mainForm, specialForm };
  };
  
  let mainForm: MainForm = {
    form,
    kitchenstation: selectedValues,
    Preparationtime: selectedValue1,
    KitchenStationId: id,
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

    

    const dispatchEvent = () => {
      // Validate each field individually before dispatching
      const allFieldsValid = Object.keys(form).every(field => {
          
          return isValid;
      });
  
      // Optionally validate the entire form
      const isValid = validateForm(); // Ensure validateForm handles overall form validation
      
      if (allFieldsValid && isValid) {
          dispatch(PricingDetailRequest({ mainForm }));
          navigate(`/Navigationpage/Itemcustomizations`, {
            state: { pagename: "Item customizations" },
          });
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

  const onSubmit: SubmitHandler<any> = (data:any) => {
    // Handle form data here
    console.log(data);
  };
  return (
    <div className={isExpanded?"pricingdetails-container":"pricingdetails-containerExpanded"}>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='pricing-form'>
        <div className='Tool'>
          <p className='KitchenRelatedHeading'>Kitchen Related</p>
          {/* <Tooltip message="Kitchen Related">
            <div className="ToolKitchen">
              <img src={info} alt="" width={20} height={20} />
            </div>
          </Tooltip> */}
        </div>

        <div className='KitchenRelated'>
        <div className='D1kitchen'>
        <Controller
          name="kitchen"
          control={control}
          defaultValue={[]}
          rules={{ required: 'Please select at least one option' }}
          render={({ field }) => (
            <Dropdown 
              selectedValues={field.value}
              onSelect={(values) => {
                field.onChange(values);
                validateDropdown(values, 'kitchen');
              }}
              options={['Option 1', 'Option 2', 'Option 3']} // Example options, adjust as needed
              
              label="Kitchen Station1*"
              onBlur={() => validateDropdown(selectedValues, 'kitchen')}
              validation={validationState.kitchen}
            />
          )}
        />
        
      </div>
      <div className='D1kitchen'>
        <Controller
          name="Preparation"
          control={control}
          defaultValue={[]}
          rules={{ required: 'Please select at least one option' }}
          render={({ field }) => (
            <Dropdown 
              selectedValues={field.value}
              onSelect={(values) => {
              field.onChange(values);
              validateDropdown(values, 'preparationTime');
                
              }}
              options={['Option 1', 'Option 2', 'Option 3']} // Example options, adjust as needed
              
              label="Preparation*"
              onBlur={() => validateDropdown(selectedValues, 'preparationTime')}
              validation={validationState.preparationTime}
            />
          )}
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
      <Controller
        name='Inventory1'
        control={control}
        defaultValue={form.Inventory1}
        render={({ field }) => (
          <input
            className="I1"
            type="text"
            {...field}
            onChange={(e) => {
              field.onChange(e); // To update Controller's value
               
            }}
            
            style={{
              borderColor: formerrors.Inventory1 ? 'red' : 'rgba(0, 0, 0, 0.3)'
            }}
          />
        )}
        rules={{ required: 'This field is required' }} // Validation rule
      />
    
                
                {/* <Tooltip message="Max no Serving per day">
                  <div className="ToolInventory">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip> */}
                
                <Controller
        name='Inventory2'
        control={control}
        defaultValue={form.Inventory2}
        render={({ field }) => (
          <input
            className="I1"
            type="text"
            {...field}
            onChange={(e) => {
              field.onChange(e); // To update Controller's value
               
            }}
            
            style={{
              borderColor: formerrors.Inventory2 ? 'red' : 'rgba(0, 0, 0, 0.3)'
            }}
          />
        )}
        
      />
   
                {/* <Tooltip message="Threshold">
                  <div className="ToolInventory1">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip> */}
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

        {isOptionTrue ? <Normalavail   getNormalForm={getNormalForm} validateDropdown={validateDropdown} dinein={dinein} setDineIn={setDineIn} validationState={validationState}   /> : "" }

        
      </div>
      <div className= {isExpanded? "buttoncomponentpricing": "buttoncomponentpricing1"}  >
          <div className= {isExpanded? "saveandnextPricing": "saveandnextPricing1"}>
            <div className={isExpanded? "Button-SaveExtended": "Button-Save"}>
            <button className="clearallPricing">
              Clear All
            </button>
            <button className="link saveall" onClick={dispatchEvent}>
              Save & next
            </button>
            </div>
          </div>

      <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  );
};

export default PricingDetails;


