import React, { useState, useContext } from 'react';
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

const PricingDetails = () => {
  const [options, setOptions] = useState(['Kitchen Related', 'Option 2', 'Option 3']);
  const [options1, setOptions1] = useState(['Preparation Time', 'Option 2', 'Option 3']);
  const navigate = useNavigate();
  const { activeCategory, setActiveCategory } = useContext(Contextpagejs);

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValue1, setSelectedValue1] = useState('');

  const dispatch = useDispatch();
  const [form, setForm] = useState({
    Inventory1: 0,
    Inventory2: 0,
  });

  const [inventory, setInventory] = useState(false);
  const [isOptionTrue, setIsOptionTrue] = useState(true);
  const [validationState, setValidationState] = useState({
    kitchen: { isValid: true, errorMessage: '' },
    preparationTime: { isValid: true, errorMessage: '' }
  });

  const handleSelect = (value) => {
    setSelectedValue(value);
    validateDropdown(value, 'kitchen');
  };

  const addOption = (newOption) => {
    setOptions([...options, newOption]);
  };

  const handleSelect1 = (value) => {
    setSelectedValue1(value);
    validateDropdown(value, 'preparationTime');
  };

  const addOption1 = (newOption) => {
    setOptions1([...options1, newOption]);
  };

  const validateDropdown = (value, field) => {
    let isValid = true;
    let errorMessage = '';

    if (!value) {
      isValid = false;
      errorMessage = 'This field is required';
    }

    setValidationState((prevState) => ({
      ...prevState,
      [field]: { isValid, errorMessage },
    }));
  };

  const validateForm = () => {
    validateDropdown(selectedValue, 'kitchen');
    validateDropdown(selectedValue1, 'preparationTime');
    return validationState.kitchen.isValid && validationState.preparationTime.isValid;
  };
  const getNormalForm = (normalForm) => {
    mainForm = { ...mainForm, normalForm };
  };

  const getSpecialForm = (specialForm) => {
    mainForm = { ...mainForm, specialForm };
  };
  let mainForm = {
    form,
    kitchenstation: selectedValue,
    Preparationtime: selectedValue1,
  };


  const dispatchEvent = () => {
    const isValid = validateForm();
    if (isValid) {
      dispatch(PricingDetailRequest({
        form,
        kitchenstation: selectedValue,
        Preparationtime: selectedValue1,
      }));
      setActiveCategory("Step 3: Item customizations");
    }
  };

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
              selectedValue={selectedValue}
              onSelect={handleSelect}
              options={options}
              addOption={addOption}
              placeholder="Kitchen Related1*"
              onBlur={() => validateDropdown(selectedValue, 'kitchen')}
              validation={validationState.kitchen}
            />
          </div>

          <div className='D2kitchen'>
            <Dropdown
              selectedValue={selectedValue1}
              onSelect={handleSelect1}
              options={options1}
              addOption={addOption1}
              placeholder="Preparation Time*"
              onBlur={() => validateDropdown(selectedValue1, 'preparationTime')}
              validation={validationState.preparationTime}
            />
          </div>
        </div>

        <div className='Kitchen-checkbox'>
          <input type="checkbox" className='checkbox1-Kitchen' />
          <label className='InventoryHeadingII'>Don't print the item in Master KOT</label>
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
                  className='I1'
                  type="text"
                  value={form.Inventory1}
                  onChange={(e) => setForm({ ...form, "Inventory1": e.target.value })}
                />
                <Tooltip message="Max no Serving per day">
                  <div className="ToolInventory">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip>
                <input
                  className='I1'
                  type="text"
                  value={form.Inventory2}
                  onChange={(e) => setForm({ ...form, "Inventory2": e.target.value })}
                />
                <Tooltip message="Threshold">
                  <div className="ToolInventory1">
                    <img src={info} alt="" width={20} height={20} />
                  </div>
                </Tooltip>
              </div>

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

        {isOptionTrue ? <Normalavail getNormalForm={getNormalForm} /> : <Specialavail getSpecialForm={getSpecialForm} />}

        <div className="buttoncomponent">
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
