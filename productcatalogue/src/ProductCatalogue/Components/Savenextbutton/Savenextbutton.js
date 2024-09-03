import React, { useState,useContext } from "react";
import "./Savenextbutton.scss";
import { useDispatch } from "react-redux";

import { useNavigate,Link} from "react-router-dom";
import { itemCustomizationPost, primarypost } from "../../../redux/Actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Contextpagejs } from "../../../Pages/contextpage";
import { PricingDetailRequest } from "../../../redux/Actions";



const Savenextbutton = (probs) => {
  let navigate = useNavigate();
  const{isExpanded,setIsExpanded}=useContext(Contextpagejs)


  const primarydetailsdata=probs.formData;



  
  const dispatch = useDispatch();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const [navigationpage,setnavigationpage]=useState("");
 
  const handleclick = () => {
   
   
    if (probs.selectedpage === "primary" ) {
   
      navigate(`/Navigationpage/Pricingandkitchendetails`, {
        state: { pagename: "Pricing and kitchen details" },
      });

      dispatch(primarypost(probs.formData));


    }  
    else if (probs.selectedpage === "ItemCustomization") {
      setnavigationpage("Reviewpage")
      navigate('/Reviewpage'
      );

      dispatch(itemCustomizationPost(probs.formData));
    } 
    
   
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
      <div className= {isExpanded?"saveandnext":"saveandnext1"}   >
        <button className="clearall" onClick={handleclear}>
          Clear All
        </button>
        <button className="link saveall" onClick={handleclick}> Save & next</button>
        
    
       
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



