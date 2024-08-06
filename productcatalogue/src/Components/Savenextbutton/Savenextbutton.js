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

  const primarydetailsdata=probs.formData;


  const data=
  {
    locationId:"9c485244-afd4-11eb-b6c7-42010a010026",
    itemCode:primarydetailsdata.itemCode,
    altName:"alt name",
    itemName:primarydetailsdata.itemName,
    description:primarydetailsdata.description,
    price:"12",
    categoryId:primarydetailsdata.categoryId,
    subCategoryId:"",
    kitchenStations:["3bdfa61-0e4f-48e6-b2bb-b4bd1d103950"],
    taxFeeId:"",
    ingredients:["03348389-4b2a-4fca-affa-6ad4291b0241"],
    modifiers:[],
    availabilityId:["b1492143-2c4c-4a4f-bc49-a3b99cbb1349"],
    category:primarydetailsdata.category,
    subCategory:primarydetailsdata.subCategory,
    itemId:null
  }

  
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
      setActiveCategory("Step 2: Pricing and kitchen details")
      
      dispatch(primarypost(data));
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



