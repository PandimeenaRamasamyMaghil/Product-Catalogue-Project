import React ,{useContext}from "react";
import "../Reviewpage/Step3Review.scss";
import Edit from '../../assets/images/edit.png';
import { useSelector } from "react-redux";
import { Contextpagejs } from "../contextpage";
import { useNavigate, Link } from "react-router-dom";


const Step3Review = () => {
  // Access itemCustomizationsReducer1 from the Redux store
  const itemCustomizationData = useSelector((state) => state.itemCustomizationsReducer1.itemData);
  const {setActiveCategory}=useContext(Contextpagejs);


  // Log the data to inspect its structure
  console.log(itemCustomizationData);

  return (
    <div className="step3-Review-Container">
      {/* Step 3 Item Customizations Heading and Edit Button */}
      <div className="step3-Review-Container-heading-and-button-container">
        <h3 className="step3-Review-Container-heading">Step 3: Item customizations</h3>
        <div  >
          {/* <img src={Edit} className="step3-Review-Container-heading-EditImage" alt="Edit" />
          <h3 className="Edit-heading" >Edit</h3> */}
          <Link to="/Navigationpage" className="step3-Review-img-edit-Container" onClick={()=>setActiveCategory("Step 3: Item customizations")}>
              <img src={Edit} alt=""  className="step3-Review-Container-heading-EditImage" width={15} height={15}/>
              <h3 className="Edit-heading" >Edit</h3>
              </Link>{" "}
        </div>
      </div>

      {/* Render itemCustomizationData if it's an array */}
      {Array.isArray(itemCustomizationData) && itemCustomizationData.length > 0 ? (
        itemCustomizationData.map((elem, index) => (
          <div key={index} className="item-customization">
            {/* Example of how to display properties of each item */}
            <div className="step3-Review-modifier-section">
            {itemCustomizationData.length === 1 && <h3 className="step3-Review-modifier-section-heading">Modifiers</h3>}
              
              <div className="step3-Review-modifier-name-container">
              <h3 className="step3-Review-modifier-name-heading">{index+1}.</h3>
                <h3 className="step3-Review-modifier-name-heading">{elem.modifierName}</h3>
                <h3 className="step3-Review-modifier-name-heading">({elem.selectionType })</h3>
              </div>
            </div>

            <div className="Step-3-Modifier-Section-Menu-container">
              <div className="Step-3-Modifier-Section-Each-Menu-container">
                <h3 className="Step-3-Modifier-Section-Menu-heading">Min Selection</h3>
                <h3 className="Step-3-Modifier-Section-Menu-details">{elem.minSelection || '-'}</h3>
              </div>
              <div className="Step-3-Modifier-Section-Each-Menu-container">
                <h3 className="Step-3-Modifier-Section-Menu-heading">Max Selection</h3>
                <h3 className="Step-3-Modifier-Section-Menu-details">{elem.maxSelection || '-'}</h3>
              </div>
              <div className="Step-3-Modifier-Section-Each-Menu-container">
                <h3 className="Step-3-Modifier-Section-Menu-heading">Item</h3>
                {elem.options && elem.options.map((subItem, subIndex) => (
                  <h2 key={subIndex} className="Step-3-Modifier-Section-Menu-details-items">{subItem.item}</h2>
                ))}
              </div>
              <div className="Step-3-Modifier-Section-Each-Menu-container">
                <h3 className="Step-3-Modifier-Section-Menu-heading">Price</h3>
                {elem.options && elem.options.map((price, priceIndex) => (
                  <h2 key={priceIndex} className="Step-3-Modifier-Section-Menu-details-price">₹ {price.price}</h2>
                ))}
              </div>
            </div>

            <div className="Free-Modification-Section">
              <h3 className="Step-3-Modifier-Section-Menu-heading">Free modification</h3>
              <h3 className="Step-3-free-details">{elem.freeCustomization || '-'}</h3>
            </div>

            <div className="Free-Modification-Section">
              <h3 className="Step-3-Modifier-Section-Menu-heading">Service Stream</h3>
              <h3 class   className="Step-3-free-details">{elem.selectedValue && elem.selectedValue.map((e)=> e +" "+"") || "-"}   </h3>
              <div className="Step-3-Review-Stream-Modification-container">
                {elem.serviceStreams && elem.serviceStreams.map((stream, streamIndex) => (
                  <h1 key={streamIndex} className="Step-3-Review-Stream-Modification-heading">{stream} </h1>
                ))}
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No item data available</p>
      )}
    </div>
  );
};

export default Step3Review;
