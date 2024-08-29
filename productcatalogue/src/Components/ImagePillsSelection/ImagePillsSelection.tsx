import React, { useState } from 'react'
import './ImagePillsSelection.scss'
interface ImageOptions{  
    name:string,
    id:string
}

interface Imageselection{
    heading:string,
    options:ImageOptions[],
    handleselection:(selectedimage:ImageOptions)=>void


}

const ImagePillsSelection:React.FC<Imageselection> = ({heading,options,handleselection}) => {
    const [searchImage,setSearchImage]=useState<string>('');
    const [selectedImage,setSelectedImage]=useState<ImageOptions|null>(null);

   const handleSearchingImage=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setSearchImage(e.target.value)


   }

  const filteredimages = options.filter(option =>
    option.name.toLowerCase().includes(searchImage.toLowerCase())
  );


  return (
    <div className='Item-Selection'>
        <h3 className='Item-Selection-heading'>{heading}</h3>
        <input type="text"  value={searchImage} onChange={handleSearchingImage} className='Item-selction-input-Field'/>
        <div className='Item-selction-itemset'>
        {filteredimages.length > 0 ? (
              filteredimages.map(option => (

                <li
                  key={option.id}
                  onClick={() => handleselection(option)}
                  className="Item-Selection-option"
                >
                   
                  <span>{option.name}</span>
                </li>
              ))
            ) : (
              <li className="Item-Selection-no-options">No options found</li>
            )}
        </div>



    </div>
  )
}

export default ImagePillsSelection;