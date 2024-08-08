import React, { useRef, useState } from 'react'
import "./Slider.scss"
import PricingSlider from './PricingSlider'
import Pen from "../../assets/images/edit 1.png"
import Eye from "../../assets/images/eye-off.png"
import Bin from "../../assets/images/Frame 3466811.png"
const Slider = ({ onclose }) => {
  const types = ["Pricing", "Availability", "Inventory", "Customize"]
  const [active, setActive] = useState("Pricing")
  const modelref = useRef();
  const closeModal = (e) => {
    if (modelref.current === e.target)
      onclose();
    }


  const handleItemClick = (item) => {
    setActive(item);
  };
  return (
    <div ref={modelref} className='Slider-Container' >
      <div className='Slider-Window'>
        <div className='Slider-Mainform'>
          <div className='Slider-First-Row'>
            <h1 className='Slider-Heading1'>Veg Burger Pizza - 12345</h1>
            <div className='Slider-icons'>
              <img src={Pen} alt='hello' className='PenImage'/>
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
        </div>

      </div>
    </div>
  )
}

export default Slider