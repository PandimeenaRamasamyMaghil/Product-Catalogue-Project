// import React, { useRef, useState } from 'react';
// import './Dropdown.scss';
// import dropdown from '../dropdown.svg'
// import { UseFormRegister } from 'react-hook-form';


// interface Option {
//   id: number;
//   label: string;
// }

// interface DropdownProps {
//   name:string
//   type?: string;
//   register: UseFormRegister<any>;
//   required?: boolean;
//   options: Option[];
//   placeholder?: string;
//   onSelect: (selectedOption: Option) => void;
// }

// const Dropdown: React.FC<DropdownProps> = ({ name,options, placeholder, onSelect,type='text',register,required=false }) => {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [selectedOption, setSelectedOption] = useState<Option | null>(null);
//   const [addNew,setAddNew]=useState<boolean>(false);
//  const NewItemref=useRef<HTMLInputElement>(null)


//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsOpen(true);
//     setSearchTerm(e.target.value);
//     if (selectedOption && e.target.value !== selectedOption.label) {
//         setSelectedOption(null);
//       }
//   };

//   const handleSelect = (option: Option) => {
//     setSelectedOption(option);
//     setIsOpen(false);
//     onSelect(option);
//   };

//   const filteredOptions = options.filter(option =>
//     option.label.toLowerCase().includes(searchTerm.toLowerCase())
//   );


//   const handleNewItemAddition=()=>{
//     setAddNew(!addNew);

//   }
//   return (
//     <div className="dropdown-component">
//         <div>

//         <input
//             type={type}
//             {...register(name, { required })}
//             value={ selectedOption?.label ? selectedOption.label : searchTerm||"" }
//             onChange={handleSearch}
//             name={name}
//             placeholder="Search..."
//             className="dropdown-search"
//           />
           
//           <span className="dropdown-arrow"  onClick={() => setIsOpen(!isOpen)}>{isOpen ? <img src={dropdown} alt="" /> : <img src={dropdown} alt="" className='dropdownimage'/> }</span>


//         </div>



//  {/* <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
//         {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
//         <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
//       </div> */}

     
//       {isOpen && (
//         <div className="dropdown-body">
         
//           <ul className="dropdown-options">
//             {filteredOptions.length > 0 ? (
//               filteredOptions.map(option => (

//                 <li
//                   key={option.id}
//                   onClick={() => handleSelect(option)}
//                   className="dropdown-option">
//                     <input type="radio" checked={selectedOption?.id===option?.id} className='dropdon-option-inputfield'/>
//                   <span className='dropdon-option-label'>{option.label}</span>
//                 </li>
//               ))
//             ) : (
//               <li className="dropdown-no-options">No options found</li>
//             )}
            

//           </ul>

//           <div className='dropdown-Addbutton'>
//             {
//               addNew?<div className='dropdown-addnew'>
//                 <div className='dropdown-addnew-input-and-button'>
//                 <input type="text" ref={NewItemref} className='dropdown-addnew-input-filed' />
//                 <button onClick={handleNewItemAddition} className='dropdown-addnew-button'>Add</button></div>
//               </div>: <button onClick={handleNewItemAddition} className='dropdown-addbutton' >Addnew</button>
//             }
           
//           </div>

//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;


import React, { useRef, useState ,useEffect} from 'react';
import './DropDownList.scss';
import dropdown from '../../assets/png/dropdown.png';
import { UseFormRegister, UseFormSetValue } from 'react-hook-form';

interface Option {
  name: string;
  id: string;
 
}

interface DropdownProps {
  name: string;
  type?: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  required?: boolean;
  options: Option[];
  placeholder?: string;
 
}

const DropDownList: React.FC<DropdownProps> = ({
  name,
  options: initialOptions,
 
  type = 'text',
  register,
  setValue,
  required = false,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [options, setOptions] = useState<Option[]>([]);
  console.log("initialOptions",options)
  const [addNew, setAddNew] = useState<boolean>(false);
  const NewItemref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    setOptions(initialOptions);
  }, [initialOptions]);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOpen(true);
    setSearchTerm(e.target.value);
    if (selectedOption && e.target.value !== selectedOption.name) {
      setSelectedOption(null);
      setValue(name, null);
    }
  };

  const handleSelect = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setValue(name, option.name);
    setAddNew(false); 
  };

  const handleNewItemAdd = () => {
    const newItemLabel = NewItemref.current?.value.trim();
    if (newItemLabel) {
      const newItem: Option = {
        id: (parseInt("options.length + 1", 10) + 1 ).toString(),
        name: newItemLabel,
      };
      setOptions([...options, newItem]); 
      handleSelect(newItem); 
      setSearchTerm(''); 
      setAddNew(false); 
    }
  };

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleNewItemAddition = () => {
    setAddNew(!addNew);
  };

  return (
    <div className="dropdown-component">
      <div>
        <input
          type={type}
          {...register(name, { required })}
          value={selectedOption?.name || searchTerm}
          onChange={handleSearch}
          name={name}
         autoComplete='off'
          className="dropdown-search"
        />
        <span
          className="dropdown-arrow"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={dropdown} alt="" className="dropdownimage" />
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-body">
          <ul className="dropdown-options">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option,index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(option)}
                  className="dropdown-option"
                >
                  <input
                    type="radio"
                    checked={selectedOption?.id === option?.id}
                    className="dropdon-option-inputfield"
                  />
                  <span className="dropdon-option-label">{option.name}</span>
                </li>
              ))
            ) : (
              <li className="dropdown-no-options">No options found</li>
            )}
          </ul>
          <div className='dropdown-Addbutton'>
            {addNew ? (
              <div className='dropdown-addnew'>
                <div className='dropdown-addnew-input-and-button'>
                  <input
                    type="text"
                    ref={NewItemref}
                    className='dropdown-addnew-input-filed'
                  />
                  <button
                    onClick={handleNewItemAdd}
                    className='dropdown-addnew-button'
                  >
                    Add
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleNewItemAddition}
                className='dropdown-addbutton'
              >
                Add new
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownList;
