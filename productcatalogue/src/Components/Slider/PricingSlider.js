import React from 'react'
import "./PricingSlider.scss"
import Weigh from "../../assets/images/weigh.png"


const PricingSlider = () => {
  return (
    <div className='PricingSlider-Container'>
     <h1 className='PricingSlider-Heading'>Pricing</h1>
     <div className='Onprem-Ofprem'>
     <h1 className='Onprem-Heading'>On-prem</h1>
     <div className='SectionA'>
      <h1 className='SectionA-Heading'>Section A: </h1>
      <input type='text' className='SectionA-Input'></input>
      <img src={Weigh} className='WeighImages'></img>
     </div>
     <div className='SectionB'>
      <h1 className='SectionB-Heading'>Section B: </h1>
      <input type='text' className='SectionB-Input'></input>
      <img src={Weigh} className='WeighImages'></img>
     </div>
     <h1 className='Ofprem-Heading'>Of-prem</h1>
     <div className='OfPickup'>
      <h1 className='OfPickup-Heading'>Pickup: </h1>
      <input type='text' className='OfPickup-Input'></input>
     </div>
     <div className='OfDelivery'>
      <h1 className='OfDelivery-Heading'>Delivery: </h1>
      <input type='text' className='OfDelivery-Input'></input>
      
     </div>
     <div className='OfZomato'>
      <h1 className='OfZomato-Heading'>Zomato: </h1>
      <input type='text' className='OfZomato-Input'></input>
      
     </div>
     <div className='OfSwiggy'>
      <h1 className='OfSwiggy-Heading'>Swiggy: </h1>
      <input type='text' className='OfSwiggy-Input'></input>
      
     </div>
     <div className='OfUberEats'>
      <h1 className='OfUberEats-Heading'>UberEats: </h1>
      <input type='text' className='OfUberEats-Input'></input>
      
     </div>
     <div className='OfOther1'>
      <h1 className='OfOther1-Heading'>Other 1: </h1>
      <input type='text' className='OfOther1-Input'></input>
      
     </div>
     <div className='OfOther2'>
      <h1 className='OfOther2-Heading'>Other 2: </h1>
      <input type='text' className='OfOther2-Input'></input>
      
     </div>
     </div>
     </div>
  )
}

export default PricingSlider