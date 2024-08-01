import { useState } from 'react'
import React from 'react'
import './Navigation.scss'
import PrimaryDetails from '../PrimaryDetails/PrimaryDetails'
import PricingDetails from '../PricingDetalis/PricingDetails'
import ItemCustomizations from '../Item Customizations/ItemCustomizations'
import {  BrowserRouter , Routes, Route} from 'react-router-dom';
import { useContext } from 'react'
import { Contextpagejs } from '../contextpage'



const Navigationpage = ({}) => {

   const {activeCategory, setActiveCategory,pages}=useContext(Contextpagejs);

    
    const handleCategoryClick = (category) => {
        setActiveCategory(category);
      
    };
  return (
    <>
   
    <div className='navigation'>
        
         <h1 className='Mainheading'> Creating new menu item</h1>
         
        <nav>
            <ul className='listofnavigation'>

               
                {
                    pages.map((page,index)=>(
                        <div key={index}>
                            <li  className='lists' 
          onClick={() => handleCategoryClick(page)}>


                                <h1 className={`list-text ${activeCategory === page ? 'activetext' : ''}`}>{page}</h1>
                                <div  className={` navbar ${activeCategory === page ? 'active' : ''}`}></div>



                            </li>
                           
                           

                        </div>
                    )) 
                }




            </ul>
        </nav>
        <div>
        {
            activeCategory==="Step 1: Primary Details" && <PrimaryDetails/>
          
           
        }
         { activeCategory==="Step 2: Pricing and kitchen details" && <PricingDetails/>}
         { activeCategory==="Step 3: Item customizations" && <ItemCustomizations/>}
        </div>
      
   
  </div>
  
  </>
  )
}

export default Navigationpage