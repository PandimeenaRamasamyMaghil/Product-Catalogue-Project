import React from 'react'
import './SearchBox.scss'
import { useState } from 'react'
import searchIcon from '../../../../assets/images/searchicon.png'
import NotFound from '../../../../assets/images/NotFound.svg'

const SearchBox = () => {
 

  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);



  const options = [
    "Veggie Pasta Primavera - 123",
    "Veggie Pasta Primavera - 1",
    "Veggie Pasta Primavera - 12",
    "Veggie Pasta Primavera - 12345 ",
    "Veggie Pasta Primavera - 123",

  ];
  const [filteredOptions, setFilteredOptions] = useState(options);
  const handleSearch=(e)=>{
    const value=e.target.value
    setSearchTerm(value)
    filterOptions(value)

  }

  const filterOptions = (input) => {
    const filtered = options.filter(option =>
      option.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredOptions(filtered);
  }

  const handleOptionClick=(option)=>{
    setSearchTerm(option)
    setFilteredOptions([])
  }

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      setHighlightedIndex((prevIndex) => {
        const newIndex = Math.min(filteredOptions.length - 1, prevIndex + 1);
        // Update the search term to the newly highlighted option
        setSearchTerm(filteredOptions[newIndex]);
        return newIndex;
      });



  }
     
    if (e.key === 'ArrowUp') {
      setHighlightedIndex((prevIndex) =>{
       const newIndex  =Math.min(filteredOptions.length - 1, prevIndex-1)
       setSearchTerm(filteredOptions[newIndex]);
       return newIndex;



      }
   
      ); 
    }

    else if (e.key === 'Enter') {
      if (highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
        handleOptionClick(filteredOptions[highlightedIndex]);
        setHighlightedIndex(-1)
      }
    }
    else if (e.key === 'Backspace') {

        setHighlightedIndex(-1)
        setSearchTerm("")
      
    }


  }


  return (
    
    <div className='Search-Container'>
      <div>
    
    <input className='Header-Search' value={searchTerm} placeholder='Search' onChange={handleSearch}  onKeyDown={handleKeyDown} type="text" />
    <img  className="SerchIcon-Header" src={searchIcon} alt="" />
    </div>

    <div className='Search-Container-options'>

    {searchTerm && (
        <ul>
          {filteredOptions.length>=0? (filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={()=>handleOptionClick(option)}
              className={index === highlightedIndex ? 'highlighted' : ''}
             

            
            >
              <div className='Search-Container-options-items' >{option}</div>
            </li>
          ))):(

          <div className='Search-Container-options-none'>
            <div className='Search-Container-options-none-flex-direction'>
            <img className="NotFoundImage"src={NotFound} alt="" />
            <h3 className='heading-none'>No Results Found</h3>

            </div>
           
          </div>
          )}
        </ul>
      )}


    </div>
    </div>
    
  )
}

export default SearchBox;