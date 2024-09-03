import React, { useState, useEffect } from "react";
import Navigationpage from "../../Components/Navigation/NavigationPage";
 import "./MainPage.scss";
import ItemCustomization from "../itemCustomization/ItemCustomizations";
import Primarypage from "../PrimaryPage/PrimaryPage";
import { Routes, Route } from "react-router-dom";
import PricingDetails from "../PricingDetalis/PricingDetails";
import PrimaryDetailsReviewpage from "../PrimaryDetailsReviewpage/PrimaryDetailsReviewpage";
import { Menulisting } from "../Menulisting/Menulisting";
import Sidenav from "../../Components/SideNav/Sidenav";

const MainPage = () => {
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
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ width: "100%", display: "flex" }} className="landingpage">
      {belowMinWidth ? (
        <div className="warning-message">
          Your screen width is below the minimum width of {MIN_WIDTH}px. Please
          resize your window.
        </div>
      ) : (
        <>
        <div>  <Sidenav /></div>
        
<div>
<Routes>
            <Route path="/" element={<Menulisting />} />
            <Route path="/Reviewpage" element={<PrimaryDetailsReviewpage />} />

            <Route path="/Navigationpage" element={<Navigationpage />}>
              <Route path="PrimaryDetails" element={<Primarypage />} />
              <Route
                path="Pricingandkitchendetails"
                element={<PricingDetails />}
              />
              <Route
                path="Itemcustomizations"
                element={<ItemCustomization />}
              />
            </Route>
          </Routes>
</div>
         
        </>
      )}
    </div>
  );
};
export default MainPage;
