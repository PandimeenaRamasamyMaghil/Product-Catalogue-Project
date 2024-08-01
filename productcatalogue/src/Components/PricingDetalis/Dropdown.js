 import React, { useState, useRef, useEffect } from 'react';
import "./Dropdown.scss";
import Arrow from "../../assets/images/dropdown.png";

const Dropdown = ({ selectedValue, onSelect, options, addOption, placeholder, onBlur, validation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [rotateImg, setRotateImg] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setRotateImg(!rotateImg);
  };

  const handleOptionClick = (event) => {
    onSelect(event.target.value);
    setIsOpen(false);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addOption(inputValue);
      setInputValue(''); // Clear the input field after adding
    }
  };

  const showTextBox1 = () => {
    setShowTextBox(true);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setShowTextBox(false);
      setRotateImg(false);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown-containercomponentPricing" ref={dropdownRef}>
      <div
        className="dropdowncomponentPricing"
        onClick={handleDropdownClick}
        onBlur={handleBlur}
        tabIndex={0}
      >
        {selectedValue || <div style={{ color: "#979797", fontSize: "14px" }}>{placeholder}</div>}
        {rotateImg ? (
          <div><img src={Arrow} className='ArrowPricingRotate' alt="Arrow" /></div>
        ) : (
          <div><img src={Arrow} className='ArrowPricing' alt="Arrow" /></div>
        )}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          <div className="optionsPricing">
            {options.map((option, index) => (
              <label key={index} className='labelDrop'>
                <input
                  type="radio"
                  name="option"
                  className='radiobtPricing'
                  value={option}
                  checked={selectedValue === option}
                  onChange={handleOptionClick}
                />
                {option}
              </label>
            ))}
          </div>
          {showTextBox ? (
            <div className='addbtnPricing'>
              <input
                type='text'
                className="inputntnoptionsPricing"
                value={inputValue}
                onChange={handleInputChange}
              />
              <a className='options-btnPricing' onClick={addNewItem}>+Add</a>
            </div>
          ) : (
            <div>
              <button className='btnADDPricing' onClick={showTextBox1}>+Add Item</button>
            </div>
          )}
        </div>
      )}
      {!validation?.isValid && (
        <div style={{ color: 'red' }}>{validation?.errorMessage}</div>
      )}
    </div>
  );
};

export default Dropdown;
