import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigationpage from './Navigation/Navigation';
import Primary from './PrimaryDetails/PrimaryDetails';
import ItemCustomization from './Item Customizations/ItemCustomizations';
import Slider from './Slider/Slider';
import Sidenavbar from './sidenavbar/SideNavbar';
import Reviewpage from './Reviewpage/Reviewpage';
import PricingDetails from './PricingDetalis/PricingDetails';
import Pricingpage from './Pricingpage/Pricingpage';
import { Menulisting } from './Menulisting/Menulisting';
import Sidenav from './SideNav/Sidenav';
import { Contextpage } from './contextpage';
import './Landingpage.scss';
import Header from './Item Customizations/MainLandingPage/Header/Header';

const Landingpage = () => {
    const [currentStep, setCurrentStep] = useState(1);


    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Contextpage>
                <Sidenav />
                <Header/>

                {/* <Routes>
                    <Route path="/" element={<Navigationpage />} />
                    <Route path="/Reviewpage" element={<Reviewpage />} />
                    <Route path="/Primary" element={<Primary />} />
                    <Route path="/ItemCustomization" element={<ItemCustomization />} />
                    <Route path="/PricingDetails" element={<PricingDetails />} />
                    <Route path="/Navigationpage" element={<Navigationpage />}>
                        <Route path="Primary" element={<Primary />} />
                        <Route path="ItemCustomization" element={<ItemCustomization />} />
                    </Route>
                </Routes> */}
            </Contextpage>
        </div>
    );
};

export default Landingpage;


