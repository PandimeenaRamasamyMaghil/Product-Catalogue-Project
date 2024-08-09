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
const Slider = ({ onclose }) => {
  
  const types = ["Pricing", "Availability", "Inventory", "Customize"]
  const[pen,setPen]=useState(false)
  const [active, setActive] = useState("Pricing")
  const modelref = useRef();
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
  return (
    <div ref={modelref} className='Slider-Container' >
      <div className={pen?"Slider-Window":"Slider-WindowBlur"}>
        <div className='Slider-Mainform'>
          <div className='Slider-First-Row'>
            <h1 className='Slider-Heading1'>Veg Burger Pizza - 12345</h1>
            <div className='Slider-icons'>

              <TooltipSlider message="Tap the 'Edit' button to modify the additional details that are not shown in the slider for this item.">
                  <div >
                    <img src={Pen}  className={pen?"PenImage":"PenBlurImage"} onMouseOver={()=>setPen(false)} onMouseLeave={()=>setPen(true)} />
                  </div>
                </TooltipSlider>

              <img src={Eye} alt='hello' className='PenImage'/>
              <img src={Bin} alt='hello' className='PenImage'/>
            </div>
            
          </div>
          <div className='Types-Menu'>
            {
              types.map((elem, index) => {
                return (
                  <>
                    <li className={`Types-List ${active === elem ? 'active' : ''}`} key={index} onClick={() => handleItemClick(elem)}>{elem}</li>
                  </>
                )
              })
            }
          </div>
          <div className='Types-Line'></div>
          {active==="Pricing" && <PricingSlider/>}
          {active==="Availability" && <AvailabitySlider/>}
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
          <ToggleSlider toggle={outlet1} setToggle={setOutlet1}/>
          <h1 className='Toggle1Basic-Heading'>Outlet 1</h1>
         </div>
         <div className='Toggle1BasicChange'>
          <ToggleSlider toggle={outlet2} setToggle={setOutlet2}/>
          <h1 className='Toggle1Basic-Heading'>Outlet 2</h1>
         </div>
         <div className='Toggle1BasicChange'>
          <ToggleSlider toggle={outlet3} setToggle={setOutlet3}/>
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