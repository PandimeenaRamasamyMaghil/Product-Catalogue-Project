import React, { useState, useRef, useEffect } from 'react';
import './DropDown3.scss';
import UpArrow from "../../assets/images/dropdown.png";

const DropDown3 = ({ selectedValues = [], onSelect, options = [], addOption, label, validation, onBlur }) => {
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
    <div className="dropdown-containerPricing2" ref={dropdownRef}>
      <label className='droplabelPricing2'>{label}</label>
      <div className={!validation?.isValid ? "dropdownPricingred2":"dropdownPricing2"} onClick={handleDropdownClick} onBlur={handleBlur} tabIndex={0}>
        {selectedValues.length > 0 ? (
          <div className='valuePricing2'>
            {selectedValues.slice(0, 3).join(', ')}
          </div>
        ) : (
          <div className='valuePlaceholder2'>
            {/* Placeholder or empty state can be handled here */}
          </div>
        )}
        <div><img src={UpArrow} className={rotateImg ? 'arrowrotatePricing2' : 'arrowdropPricing2'} alt="arrow" /></div>
      </div>
      {isOpen && (
        <div className="optionsPricing2">
          {options.length > 0 ? (
            options.map((option, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name={option}
                  className="checkboxPricing2"
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

export default DropDown3;
