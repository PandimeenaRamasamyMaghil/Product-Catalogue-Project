import React, { useEffect, useState } from 'react'
import "./AvailabilitySlider.scss"
import Weigh from "../../assets/images/weigh.png"
import ToggleSliderAvail from "./ToggleSliderAvail"


const PricingSlider = () => {
    const[onPrem,setOnPrem]=useState(false)
    const[sectionA,setSectionA]=useState(false)
    const[sectionB,setSectionB]=useState(false)
    const[pickup,setPickup]=useState(false)
    useEffect(() => {
      if (!onPrem) {
          setSectionA(false);
          setSectionB(false);
      } else {
          setSectionA(true);
          setSectionB(true);
      }
  }, [onPrem]);
  return (
    <div className='AvailSlider-Container'>
     <h1 className='AvailSlider-Heading'>Availability</h1>
     <div className='AvailOnprem-Ofprem'>
    <div className='AvailOnToggle'>
     <h1 className='AvailOnprem-Heading'>On-prem</h1>
     <div className='OnpremToggle'><ToggleSliderAvail toggle={onPrem} setToggle={setOnPrem}/></div>
     </div>
     <div className='AvailSectionA'>
      <h1 className='AvailSectionA-Heading'>Section A: </h1>
      <div className="SectionAToggle"><ToggleSliderAvail toggle={sectionA} setToggle={setSectionA} /></div>
      
     </div>
     <div className='AvailSectionB'>
      <h1 className='AvailSectionB-Heading'>Section B: </h1>
      <div className='SectionBToggle'><ToggleSliderAvail toggle={sectionB} setToggle={setSectionB}/></div>
      
     </div>
     <h1 className='AvailOfprem-Heading'>Of-prem</h1>
     <div className='AvailOfPickup'>
      <h1 className='AvailOfPickup-Heading'>Pickup: </h1>
      <div className='PickupToggle'><ToggleSliderAvail toggle={pickup} setToggle={setPickup}/></div>
     </div>
     <div className='AvailOfDelivery'>
      <h1 className='AvailOfDelivery-Heading'>Delivery: </h1>
      <input type='text' className='AvailOfDelivery-Input'></input>
      
     </div>
     <div className='AvailOfZomato'>
      <h1 className='AvailOfZomato-Heading'>Zomato: </h1>
      <input type='text' className='AvailOfZomato-Input'></input>
      
     </div>
     <div className='AvailOfSwiggy'>
      <h1 className='AvailOfSwiggy-Heading'>Swiggy: </h1>
      <input type='text' className='AvailOfSwiggy-Input'></input>
      
     </div>
     <div className='AvailOfUberEats'>
      <h1 className='AvailOfUberEats-Heading'>UberEats: </h1>
      <input type='text' className='AvailOfUberEats-Input'></input>
      
     </div>
     <div className='AvailOfOther1'>
      <h1 className='AvailOfOther1-Heading'>Other 1: </h1>
      <input type='text' className='AvailOfOther1-Input'></input>
      
     </div>
     <div className='AvailOfOther2'>
      <h1 className='AvailOfOther2-Heading'>Other 2: </h1>
      <input type='text' className='AvailOfOther2-Input'></input>
      
     </div>
     </div>
     </div>
  )
}

export default PricingSlider