import React,{useState} from 'react'
import Navigationpage from './Navigation/Navigation'
import './Landingpage.scss'
import Primary from './PrimaryDetails/PrimaryDetails'
import ItemCustomization from './Item Customizations/ItemCustomizations'
import Sidenavbar from './sidenavbar/SideNavbar'
import Reviewpage from './Reviewpage/Reviewpage'
import { Routes, Route } from 'react-router-dom';
import PricingDetails from './PricingDetalis/PricingDetails'
import { Contextpage } from './contextpage'

const Landingpage = () => {
    const [currentStep, setCurrentStep] = useState(1);
  return (
    <div>
      <Contextpage>

<Sidenavbar/>
        {/* <Navigationpage  /> */}
       {/* < Reviewpage/> */}

       <Routes>
        <Route path="/" element={<Navigationpage />} />
        <Route path="/Reviewpage" element={<Reviewpage />} />
        <Route path="/Primary" element={<Primary />} />
        <Route path="/ItemCustomization" element={<ItemCustomization />} />
        <Route path="/PricingDetails" element={<PricingDetails />} />
        <Route path="/Navigationpage" element={<Navigationpage />}>
          <Route path="Primary" element={<Primary />} />
          
          <Route path="ItemCustomization" element={<ItemCustomization />} />
        </Route>
      </Routes>
       
        {/* <Primary/> */}
         {/* <ItemCustomization/> */}
         </Contextpage>
       

     
    </div>
  )
}

export default Landingpage