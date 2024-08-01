import React from 'react'
import searchicon from "../../assets/images/searchicon.png";
import './Pricingpage.scss';
import importimg from '../../assets/images/import.svg';
import exportimg from '../../assets/images/export.svg';
import filter from '../../assets/images/filter.svg';
import addbtn from '../../assets/images/addbtn.svg';

const Pricingpage = () => {
  return (
    <div>
          <div  className='pricingpagemain'>
        <div  className='borderline'>

        </div>
        <div className='pricingnavheading'>
        <div className='menuhead'>
            <p>Menu items</p>
            <div>
                <img src={importimg} alt="" />
                <span>Import</span>
                <img src={exportimg} alt="" />
                <span>Export</span>
                <img src={filter} alt="" />
                <span>Filter</span>

            </div>
        </div>
        <div style={{display:'flex',flexDirection:'row'}}>
            <div className='serchinginput'><input type="text" placeholder='search' />
            <span> <img src={searchicon} alt="" className='serchicon' /></span>
            
            </div>
            <div className='groupingradiobutton'>
                <div className='All'>
                <input type="radio" />
                <span>All</span>
                </div>
                <div className='groupbymeal'>
                <input type="radio" />
                <span>Group by Meal type</span>
                </div>
                
            
              
            </div>
            <div className='addnewbtn'>
                <button><img src={addbtn} alt="" /></button>
                
            </div>
           
        </div>
        <div className='filteringradiobtns'>
            <input type="radio" />
            <span>All</span>
            <input type="radio" />
            <span>Dine-in</span>
            <input type="radio" />
            <span>pickup</span>
            <input type="radio" />
            <span>Delivery</span>
            <input type="radio" />
            <span>Third party</span>
           

        </div>
        <div className='tableofdata'>
            <table>
                <thead>
                    <tr>
                        <th > <input type="checkbox" /><span className='firstheading'>Item Name</span></th>
                        <th>Code</th>
                        <th>Dine-in</th>
                        <th>Dine-in</th>
                        <th>Pickup</th>
                        <th>Delivery</th>
                        <th>Third party</th>
                        <th>Third party</th>
                        <th>Third party</th>
                    </tr>
                </thead>
            </table>
            
            </div>


       
        </div>
       
        
    </div>
    
    </div>
  
  )
}

export default Pricingpage