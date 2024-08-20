import React, { useState, useRef, useEffect } from 'react';
import './NavSlider.scss'; // Import a CSS file for styling
import PricingSlider from './PricingSlider';
import AvailabilitySlider from './AvailabilitySlider';
import Inventory from './Inventory';
import CustomizeSlider from './CustomizeSlider';

const NavMenu = ({pen,eye,trash}) => {
  const [active, setActive] = useState('Pricing');
  

  // Create refs for each section
  const pricingRef = useRef(null);
  const availabilityRef = useRef(null);
  const inventoryRef = useRef(null);
  const customizeRef = useRef(null);
  const handleItemClick = (item) => {
    setActive(item);
    scrollToComponent(item);
  };

  // Function to scroll to respective section based on the item clicked
  const scrollToComponent = (item) => {
    switch (item) {
      case 'Pricing':
        pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Availability':
        availabilityRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'Inventory':
        inventoryRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
        case 'Customize':
        customizeRef.current?.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const menuItems = ['Pricing', 'Availability','Inventory','Customize'];

  // IntersectionObserver callback function
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActive(entry.target.getAttribute('data-section'));
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value based on when you want the active state to change
    });

    if (pricingRef.current) observer.observe(pricingRef.current);
    if (availabilityRef.current) observer.observe(availabilityRef.current);
    if (inventoryRef.current) observer.observe(inventoryRef.current);
    if (customizeRef.current) observer.observe(customizeRef.current);

    return () => {
      if (pricingRef.current) observer.unobserve(pricingRef.current);
      if (availabilityRef.current) observer.unobserve(availabilityRef.current);
      if (inventoryRef.current) observer.unobserve(inventoryRef.current);
    if (customizeRef.current) observer.unobserve(customizeRef.current);
    };
  }, []);

  return (
    <>
      <nav className={`nav-menu`}>
        <ul className="nav-list">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${active === item ? 'active' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <div className='type-div'></div>
      <div className='navmenu-container'>
        {/* Each component has its own reference */}
        <div ref={pricingRef} className="section" data-section="Pricing">
          <PricingSlider pen={pen}/>
        </div>
        <div ref={availabilityRef} className="section" data-section="Availability">
          <AvailabilitySlider pen={pen} />
        </div>
        <div ref={inventoryRef} className="section" data-section="Inventory">
          <Inventory pen={pen} />
        </div>
        <div ref={customizeRef} className="section" data-section="Customize">
          <CustomizeSlider pen={pen} />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
