import React, { useRef, useState } from 'react'
import "./Slider.scss"
import PricingSlider from './PricingSlider'
import Pen from "../../assets/images/edit 1.png"
import Eye from "../../assets/images/eye-off.png"
import Bin from "../../assets/images/Frame 3466811.png"
import Basic from "../../assets/images/Basic.png"
import ToggleSlider from "./ToggleSlider"
import AvailabitySlider from "./AvailabilitySlider"
import TooltipSlider from "./TooltipSlider"
import EyeModal from './EyeModal'
import Trash from './Trash'
import NavSlider from './NavSlider'

import Inventory from './Inventory'
import CustomizeSlider from './CustomizeSlider'

const Slider = ({ onclose }) => {
  
  const types = ["Pricing", "Availability", "Inventory", "Customize"]
  const[pen,setPen]=useState(true)
  const[eye,setEye]=useState(false)
  const[trash,setTrash]=useState(false)
  const [active, setActive] = useState("Pricing")
  const modelref = useRef();
  const scrollRef = useRef(null); // Create a ref for the scrollable container

  const closeModal = (e) => {
    if (modelref.current === e.target)
      onclose();
    }
const[outlet1,setOutlet1]=useState(false)
const[outlet2,setOutlet2]=useState(false)
const[outlet3,setOutlet3]=useState(false)
  const handleItemClick = (item) => {
    setActive(item);
  };
  const handleEyeClick=()=>{
    setEye(true)
  }
  const handleBinClick=()=>{
    setTrash(true)
  }
  const scrollToComponent = (componentName) => {
    if (scrollRef.current) {
      const element = document.querySelector(`.${componentName}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <div ref={modelref} className='Slider-Container' >
      <div className={pen?"Slider-Window":"Slider-WindowBlur"}>
        <div className='Slider-Mainform'>
          <div className='Slider-First-Row'>
            <h1 className='Slider-Heading1'>Veg Burger Pizza - 12345</h1>
            
            <div className='Slider-icons'>
            
              <TooltipSlider className="toolSliderI" message="Tap the 'Edit' button to modify the additional details that are not shown in the slider for this item.">
                  <div >
                    <img src={Pen}  className={pen?"PenImage":"PenBlurImage"} onMouseOver={()=>setPen(false)} onMouseLeave={()=>setPen(true)} />
                  </div>
                </TooltipSlider>
                 
              <img src={Eye} alt='hello' className='PenImage' onClick={handleEyeClick}/>
              <img src={Bin} alt='hello' onClick={handleBinClick} className='PenImage'/>
            </div>
            
          </div>
           {eye?<EyeModal onEyeclose={()=>setEye(false)}/>:""}
           {trash?<Trash onTrashclose={()=>setTrash(false)}/>:""} 
         </div>
         <div className='NavSlider-Component'>    
         <NavSlider pen={pen} eye={eye} trash={trash}/>
         </div>     
        <div className={pen?"BasicChangesContainer":"BasicChangesContainerPen"}>
        <div className='BasicChanges'>
          <img src={Basic} className='BasicChangesImage'></img>
         <p className='BasicChangesText'>Make basic changes here.Click the edit icon for all options</p>
        </div>
        <div className='BasicChangesDiv'></div>
        <div className='BasicChangescheckbox'>
         <input type='checkbox' className='BasicCheckboxInput'></input>
         <h1 className='BasicChangescheckbox-Heading'>Change across all outlets</h1>
        </div>
        <div className='ToggleBasicChanges'>
         <div className='Toggle1BasicChange'>
          <ToggleSlider toggle={outlet1} setToggle={setOutlet1} pen={pen}/>
          <h1 className='Toggle1Basic-Heading'>Outlet 1</h1>
         </div>
         <div className='Toggle1BasicChange'>
          <ToggleSlider toggle={outlet2} setToggle={setOutlet2} pen={pen}/>
          <h1 className='Toggle1Basic-Heading'>Outlet 2</h1>
         </div>
         <div className='Toggle1BasicChange'>
          <ToggleSlider toggle={outlet3} setToggle={setOutlet3} pen={pen}/>
          <h1 className='Toggle1Basic-Heading'>Outlet 3</h1>
         </div>
        </div>
        <div className='CancelChange'>
         <button className='CancelBtn'>Cancel</button>
         <button className='ChangeBtn'>Change</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Slider