import React, { useState, useRef, useEffect } from 'react';
import './DropDownItem.scss';
import UpArrow from "../../assets/images/dropdown.png";
const Dropdown = ({ selectedValues = [], onSelect, options = [], addOption,label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const[rotateimg,setRotateImg]=useState(false)
  const dropdownRef = useRef(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setRotateImg(false)
      }
    };

    // Add event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
    setRotateImg(!rotateimg)
  };

  const handleOptionClick = (event) => {
    const value = event.target.value;
    console.log('Checkbox clicked:', value);
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];

    console.log('New selected values:', newSelectedValues);
    onSelect(newSelectedValues);
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

  const toggleTextBox = () => {
    setShowTextBox(!showTextBox);
  };

  return (
    <div className="dropdown-containerPricing" ref={dropdownRef}>
      <label className='droplabelPricing'>{label}</label>
      <div className="dropdownPricing" onClick={handleDropdownClick}>
      
        {selectedValues.length > 0 ? (
          <div className='valuePricing'>
            {selectedValues.slice(0, 3).join(', ')}
          
          </div>
        ) : (
          <div>
        
         
        
          </div>
        )}
        <div><img src={UpArrow} className={rotateimg?`arrowrotatePricing`:"arrowdropPricing"}></img></div>
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
    </div>
  );
};

export default Dropdown;
