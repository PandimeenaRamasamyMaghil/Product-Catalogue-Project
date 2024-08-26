import React, { useRef, useState,useEffect } from 'react'
import AOS from 'aos';
import "./ImageSlider.scss"
import PricingSlider from './PricingSlider'
import Pen from "../../assets/images/edit 1.png"
import Eye from "../../assets/images/eye-off.png"
import Bin from "../../assets/images/Frame 3466811.png"
import ToggleSlider from "./ToggleSlider"
import AvailabitySlider from "./AvailabilitySlider"
import TooltipSlider from "./TooltipSlider"
import EyeModal from './EyeModal'
import Trash from './Trash'
import NavSlider from './NavSlider'
import ArrowHover from '../../assets/images/ArrowHover.svg'
import Inventory from './Inventory'
import CustomizeSlider from './CustomizeSlider'
import BasicChanges from './BasicChanges'

const Slider = ({ onclose }) => {



  const [eye, setEye] = useState(false)
  const [trash, setTrash] = useState(false)
  const [active, setActive] = useState("Pricing")
  const modelref = useRef();
  const scrollRef = useRef(null); // Create a ref for the scrollable container

  const closeModal = (e) => {
    if (modelref.current === e.target)
      onclose();
  }

  const handleItemClick = (item) => {
    setActive(item);
  };
  const handleEyeClick = () => {
    setEye(true)
  }
  const handleBinClick = () => {
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
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <div ref={modelref} className='Slider-Container'  >
      <div className={"Slider-Window"} data-aos="fade-left">
        <div className='Slider-Mainform'>
          <div className='Slider-First-Row'>
            <h1 className='Slider-Heading1'>Veg Burger Pizza - 12345</h1>

            <div className='Slider-icons'>


              <div className='PenImage-Section'>
                <img src={Pen} className={"PenImage"} />
                <div className='PenTool'>
                  <img src={ArrowHover} className='ArrowHoverPen' alt="hello" />
                  <div className='PenTool-box'>Edit</div>
                </div>
              </div>


              <img src={Eye} alt='hello' className='PenImage' onClick={handleEyeClick} />
              <div className='BinImageSection'>

                <img src={Bin} alt='hello' onClick={handleBinClick} className='BinImage' />
                <div className='DelTool'>
                  <img src={ArrowHover} className='ArrowHoverDel' alt="hello" />
                  <div className='DelTool-box'>Delete</div>
                </div>
              </div>
            </div>

          </div>
          {eye ? <EyeModal onEyeclose={() => setEye(false)} /> : ""}
          {trash ? <Trash onTrashclose={() => setTrash(false)} /> : ""}

        </div>
       <div className='ImageSliderContainer'>
       <h3>Item Image</h3>
      </div> 

      </div>
    </div>
  )
}

export default Slider