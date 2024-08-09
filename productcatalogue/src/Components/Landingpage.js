import React,{useState,useEffect} from 'react'
import Navigationpage from './Navigation/Navigation'
import './Landingpage.scss'
import Primary from './PrimaryDetails/PrimaryDetails'
import ItemCustomization from './Item Customizations/ItemCustomizations'
import Sidenavbar from './sidenavbar/SideNavbar'
import Reviewpage from './Reviewpage/Reviewpage'
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import PricingDetails from './PricingDetalis/PricingDetails'
import { Contextpage } from './contextpage'
import Pricingpage from './Pricingpage/Pricingpage'
import { Menulisting } from './Menulisting/Menulisting'
import Sidenav from "./SideNav/Sidenav"

const Landingpage = () => {
    const [currentStep, setCurrentStep] = useState(1);


    const MIN_WIDTH = 800;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [belowMinWidth, setBelowMinWidth] = useState(
      window.innerWidth <= MIN_WIDTH
    );
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setBelowMinWidth(window.innerWidth <= MIN_WIDTH);
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <div style={{display:'flex',flexDirection:'row'}}>

{belowMinWidth ? (
        <div className="warning-message">
          Your screen width is below the minimum width of {MIN_WIDTH}px. Please
          resize your window.
        </div>
      ) :
     ( <Contextpage>


<Sidenav/>
{/* <Pricingpage/> */}
     
     {/* <Menulisting/> */}
   

       <Routes>
        <Route path="/" element={<Navigationpage />} />
        <Route path="/Reviewpage" element={<Reviewpage />} />
        <Route path="/Primary" element={<Primary />} />
        <Route path="/ItemCustomization" element={<ItemCustomization />} />
        <Route path="/PricingDetails" element={<PricingDetails />} />


        <Route  path="/Navigationpage" element={<Navigationpage />}>
          <Route path="PrimaryDetails" element={<Primary />} />
          <Route path="Pricingandkitchendetails" element={<PricingDetails />} />
          <Route path="Itemcustomizations" element={<ItemCustomization />} />
        </Route>


      </Routes>
     
     
         </Contextpage>
       )
      }

     
    </div>
  )
}

export default Landingpage