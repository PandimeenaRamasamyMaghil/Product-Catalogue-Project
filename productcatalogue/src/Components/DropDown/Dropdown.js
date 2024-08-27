import React, { useState, useRef, useEffect } from 'react';
import './Dropdown.scss';
import UpArrow from "../../assets/images/dropdown.png";

const Dropdown = ({ selectedValues = [], onSelect, options = [], addOption, label, validation, onBlur }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [rotateImg, setRotateImg] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setRotateImg(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setRotateImg(!rotateImg);
  };

  const handleOptionClick = (event) => {
    const value = event.target.value;
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
    onSelect(newSelectedValues);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewItem = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addOption(inputValue);
      setInputValue('');
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };

  return (
    <div className="dropdown-containerPricing" ref={dropdownRef}>
      <label className='droplabelPricing'>{label}</label>
      <div className={!validation?.isValid ? "dropdownPricingred":"dropdownPricing"} onClick={handleDropdownClick} onBlur={handleBlur} tabIndex={0}>
        {selectedValues.length > 0 ? (
          <div className='valuePricing'>
            {selectedValues.slice(0, 3).join(', ')}
          </div>
        ) : (
          <div className='valuePlaceholder'>
            {/* Placeholder or empty state can be handled here */}
          </div>
        )}
        <div><img src={UpArrow} className={rotateImg ? 'arrowrotatePricing' : 'arrowdropPricing'} alt="arrow" /></div>
      </div>
      {isOpen && (
        <div className="optionsPricing">
          {options.length > 0 ? (
            options.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name={option}
                  className="checkboxPricing"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleOptionClick}
                />
                {option}
              </label>
            ))
          ) : (
            <div>No options available</div>
          )}
        </div>
      )}
      {!validation?.isValid && (
        <p style={{ color: 'red',fontSize:"0.75rem",fontWeight:"500" }}>{validation?.errorMessage}</p>
      )}
    </div>
  );
};

export default Dropdown;
