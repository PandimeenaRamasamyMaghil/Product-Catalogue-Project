import React, { useState, useRef, useEffect } from 'react';
import './DropDownItem.scss';
import UpArrow from "../../assets/png/dropdown.png";

// Define the types for the props
interface DropdownProps {
  selectedValues?: string[];
  onSelect: (selectedValues: string) => void;
  options?: string[];
  addOption: (option: string) => void;
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ selectedValues = [], onSelect, options = [], addOption, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showTextBox, setShowTextBox] = useState(false);
  const [rotateImg, setRotateImg] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setRotateImg(false);
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
    setRotateImg(!rotateImg);
  };

  const handleOptionClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // console.log('Checkbox clicked:', value);
    const newSelectedValues = selectedValues.includes(value)
      ? selectedValues.filter((item) => item !== value)
      : [...selectedValues, value];
  
    
    // If you need a single string, join the array or pick one:
    // or
    // onSelect(newSelectedValues[0]);  // Picking the first item in the array
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewItem = (e: React.FormEvent<HTMLFormElement>) => {
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
            {/* Placeholder when no values are selected */}
          </div>
        )}
        <div><img src={UpArrow} className={rotateImg ? 'arrowrotatePricing' : 'arrowdropPricing'} alt="Dropdown Arrow" /></div>
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
