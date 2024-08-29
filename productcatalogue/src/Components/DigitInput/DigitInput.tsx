import React, { useState, useRef } from 'react';
import './DigitInput.scss'
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface DigitInputProps {
  name:string;
  inputCount: number;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;

}

const DigitInput: React.FC<DigitInputProps> = ({name,register,setValue, inputCount, }) => {

  const [inputs, setInputs] = useState<string[]>(Array(inputCount).fill('')); 
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {

    const { value, maxLength } = event.currentTarget;
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);

    if (value.length === maxLength && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    const concatenatedValue = updatedInputs.join('');
    setValue(name, concatenatedValue);
    

  }; 

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = event.key;
    const { value } = event.currentTarget;
    if (key === 'Backspace' && value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="mastecodeinputs">
      {Array.from({ length: inputCount }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={inputs[index]}
          {...register(`digit${index}`)} // Register each digit input
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          ref={(el) => (inputRefs.current[index] = el!)} 
          onChange={(event) => handleInputChange(event, index)} 
          onKeyUp={(event) => handleKeyUp(event, index)} 
          className='digit-input'
        />
      ))}
    </div>
  );
};

export default DigitInput;
