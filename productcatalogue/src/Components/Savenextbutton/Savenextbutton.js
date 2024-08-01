import React, { useState,useContext } from "react";
import "./Savenextbutton.scss";
import { useDispatch } from "react-redux";

import { useNavigate,Link} from "react-router-dom";
import { itemCustomizationPost, primarypost } from "../../redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Contextpagejs } from "../contextpage";
import { PricingDetailRequest } from "../../redux/Actions";
// import { itemCustomizationPost } from "../../redux/Actions";


const Savenextbutton = (probs) => {
  let navigate = useNavigate();
  const {activeCategory, setActiveCategory,pages}=useContext(Contextpagejs);

  
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [navigationpage,setnavigationpage]=useState("");
 
  const handleclick = () => {
   
   
    if (probs.selectedpage === "primary" && probs.validation()) {
      setActiveCategory("Step 2: Pricing and kitchen details")
      
      dispatch(primarypost(probs.formData));
    } 
    else if (probs.selectedpage === "PricingDetails" && probs.validation()) {
      setActiveCategory("Step 3: Item customizations")
      dispatch(PricingDetailRequest(probs.formData));
    } 
    else if (probs.selectedpage === "ItemCustomization" && probs.validation()) {
      setnavigationpage("Reviewpage")
      // navigate('./Reviewpage')
      dispatch(itemCustomizationPost(probs.formData));
    } 
    
    // if (!probs.validation()) {
    //   // e.preventDefault();
   
    //   toast.error("Please fill out the required fields(indicated as *) to move on to the next step.", {
    //     style: {
    //       backgroundColor: '', // Background color
    //       color: 'red', // Text color
    //       fontFamily: 'Arial, sans-serif', // Font family
    //       fontSize: '14px', // Font size
    //       padding: '12px', // Padding,
    //       position: "top",
          

    //     },
        
        
    //   });
    // }
    scrollToTop();
   

  };

  const handleclear = () => {
    if (probs.selectedpage === "primary")
    {
      probs.formclear();

    }
  
  };
  

  

  return (
    <div>
      <div className="saveandnext">
        <button className="clearall" onClick={handleclear}>
          Clear All
        </button>
        
       
        <Link to={`/${navigationpage}`} className="link saveall" onClick={handleclick}>
           Save & next
        </Link>
        {/* <button className="link saveall" onClick={handleclick}>
           Save & next

        </button> */}
       
      
       
      </div>
      <ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
    </div>
  );
};

export default Savenextbutton;



