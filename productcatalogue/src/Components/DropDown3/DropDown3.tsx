import React, { useState, useRef, useEffect } from 'react';
import './DropDown3.scss';
import UpArrow from "../../assets/png/dropdown.png";

interface DropDown3Props {
  selectedValues?: string[] | string;
  onSelect: (values: string[]) => void;
  options?: string[];
  addOption: (option: string) => void;
  label?: string;
  validation?: Validation;
  onBlur?: () => void;
  value?: string | null; // This was not used in the component, so consider removing if unnecessary
}

interface Validation {
  isValid: boolean;
  errorMessage: string;
}

const DropDown3: React.FC<DropDown3Props> = ({
  selectedValues = [],
  onSelect,
  options = [],
  addOption,
  label,
  validation,
  onBlur
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [rotateImg, setRotateImg] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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

  const handleOptionClick = (value: string) => {
    const currentValues = Array.isArray(selectedValues) ? selectedValues : [selectedValues];
    const newSelectedValues = currentValues.includes(value)
      ? currentValues.filter((item) => item !== value)
      : [...currentValues, value];
    
    onSelect(newSelectedValues);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addNewItem = (e: React.FormEvent<HTMLFormElement>) => {
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

  // Ensure selectedValues is always an array
  const displaySelectedValues = Array.isArray(selectedValues)
    ? selectedValues.join(', ')
    : selectedValues || 'Select...';

  return (
    <div className="dropdown-container" ref={dropdownRef}>
      {label && <label>{label}</label>}
      <div className="dropdown" onClick={handleDropdownClick}>
        <div className="dropdown-selected">{displaySelectedValues}</div>
        <img src={UpArrow} alt="dropdown" className={`dropdown-arrow ${rotateImg ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <button
              key={option}
              value={option}
              onClick={() => handleOptionClick(option)}
              className={`dropdown-option ${Array.isArray(selectedValues) && selectedValues.includes(option) ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
          <form onSubmit={addNewItem} className="dropdown-add-option">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Add new option"
            />
            <button type="submit">Add</button>
          </form>
        </div>
      )}
      {!validation?.isValid && (
        <p style={{ color: 'red', fontSize: '0.75rem', fontWeight: '500' }}>
          {validation?.errorMessage}
        </p>
      )}
    </div>
  );
};

export default DropDown3;
