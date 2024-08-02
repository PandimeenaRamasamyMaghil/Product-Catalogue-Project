  import React, { useState } from "react";
  import "./ItemCustomizations.scss";
  import dotted from "./dotted.png";
  import Toggle from "../Toggle/Toggle";
  import Polygon1 from "./Polygon 1.png";
  import Polygon2 from "./Polygon 2.png";
  import { useDispatch } from "react-redux";
  import { itemCustomizationPost } from "../../redux/Actions";
  import { useSelector } from "react-redux";
  import { useNavigate } from "react-router-dom";
  import Step3 from '../Reviewpage/Step3Review'
  import { useEffect } from "react";

  import Savenextbutton from "../Savenextbutton/Savenextbutton";
  import Serachicon from '../../assets/images/searchicon.png'
  import Dropdown from "./DropDown";
  import { isValid } from "date-fns";
  import { tr } from "date-fns/locale";

  const ItemCustomizations = () => {
    const navigate1=useNavigate();
    const dispatch = useDispatch();
      const itemCustomizationData = useSelector((state) => state.itemCustomizationsReducer1.itemData);
      
    const [showModifiers, setShowModifiers] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const [options, setOptions] = useState(['Option3', 'Option2', 'Option 3']);
    const [selectedValue, setSelectedValue] = useState('');

    const [customItemavailability, setCustomItemavailability] = useState(false);
    const [isvalid, setIsValid] = useState(false);

    const [modifications, setModifications] = useState([
      {
        modifierName: "",
        options: [
          {
            item: "",
            price: "",
          },
        ],
        minSelection: 1,
        maxSelection: 1,
        freeCustomization:1 ,
        selectedValue: "",      
      }])
    
    const [filteredModifications, setFilteredModifications] = useState([]);




    useEffect(() => {

      if(showModifiers===false){
        setIsValid(true)
      }
      // Ensuring data consistency
      if(itemCustomizationData.length>0){

      
      const mappedModifications = itemCustomizationData.map((item) => ({
        modifierName: item.modifierName || "",
        options: item.options ? item.options.map(option => ({
          item: option.item || "",
          price: option.price || "",
        })) : [{ item: "", price: "" }],
        minSelection: item.minSelection||1,
        maxSelection: item.maxSelection||1,
        freeCustomization:item.freeCustomization||1 ,

        
        selectedValue: item.selectedValue || "",
        endDate: item.endDate || "",
        startDate: item.startDate || "",
        selectionType: item.selectionType || "",
      }));
      setModifications(mappedModifications);
      
    }
    }, [itemCustomizationData]);

   
    

    const addModifier = () => {
      setModifications([
        ...modifications,
        {
          modifierName: "",
          options: [
            {
              item: "",
              price: "",
            },
          ],
          minSelection: 1,
          maxSelection: 1,
          freeCustomization:1 ,
          selectedValue: "",      },
      ]);
    };

    const [modificationError,setmodificationError]=useState({


      modifierName: "",
      item: "",
      price: "",
    })






    

    const handleModifierChange = (index, e) => {
      const { name, value } = e.target;
      const newModifications = [...modifications];
      const property = name.split("-")[0]; // Extract the property name from name attribute

      newModifications[index][property] = value;
      setModifications(newModifications);
    };
    const addOption = (index) => {
      const newOption = [...modifications];
      newOption[index].options.push({
        item: "",
        price: "",
      });
      setModifications(newOption);
    };
    const addOption1 = (newOption) => {
      setOptions([...options, newOption]);
    };
    
  
  
    const handleBlur = (e,modIndex,optIndex) => {
      const { name, value } = e.target;
      let error = "";

      if (!value.trim()) {
        error = `Please Enter ${name.charAt(0).toUpperCase() + name.slice(1)}`;
        setIsValid(false)
      } else {
        setIsValid(true)
        
      }
      


      setmodificationError(prevErrors => {
        // Ensure prevErrors is an array
        const newErrors = Array.isArray(prevErrors) ? [...prevErrors] : [];
    
        // Ensure the specific index exists
        if (!newErrors[modIndex]) {
          newErrors[modIndex] = { options: [] };
        }
        if (optIndex !== undefined) {
          // Ensure the options array exists for the current modifier
          if (!newErrors[modIndex].options[optIndex]) {
            newErrors[modIndex].options[optIndex] = {};
          }
          newErrors[modIndex].options[optIndex] = {
            ...newErrors[modIndex].options[optIndex],
            [name]: error,
          };
        } else {
          newErrors[modIndex] = { ...newErrors[modIndex], [name]: error };
        }
        return newErrors;
      });
    };


    const addOptionChange = (modIndex, optIndex, e) => {
      const newModifier = [...modifications];
      newModifier[modIndex].options[optIndex][e.target.name] = e.target.value;
      setModifications(newModifier);
    };

    const incrementSpinner = (index, field) => {
      const newModifier = [...modifications];
      if (newModifier[index][field] === "NaN") {
        newModifier[index][field] = 0;
      } else {
        newModifier[index][field] = parseInt(newModifier[index][field], 10) + 1;
        setModifications(newModifier);
      }
    };

    const decrementSpinner = (index, field) => {
      const newModifier = [...modifications];
      if (newModifier[index][field] === "NaN") {
        newModifier[index][field] = 0;
      } else {
        newModifier[index][field] = parseInt(newModifier[index][field]) - 1;
        setModifications(newModifier);
      }
    };

    const deleteOption = (modIndex, optIndex) => {
      const newModifications = [...modifications];
      newModifications[modIndex].options.splice(optIndex, 1);
      setModifications(newModifications);
    };

    const dispatch1 = () => {
      dispatch(itemCustomizationPost(modifications));
    };

    const onDragStart = (e, index) => {
      e.dataTransfer.setData("index", index);
    };

    const onDrop = (e, index) => {
      const draggedIndex = parseInt(e.dataTransfer.getData("index"), 10);
      console.log(draggedIndex);
      if (draggedIndex !== index) {
        const newModifications = [...modifications];
        const [draggedItem] = newModifications.splice(draggedIndex, 1);
        newModifications.splice(index, 0, draggedItem);
        setModifications(newModifications);
      }
    };



    console.log(itemCustomizationData)
    

    const validationforitemcustom=()=>{
    
      return isvalid

    }
    const clerall=()=>{
      console.log("item cleard")



    }


    const handleSelectedValueChange = (index, value) => {
      setSelectedValue(value);
      const newarrary=[...modifications];
      newarrary[index].selectedValue=value;
      setModifications(newarrary)
    
    };

    const handleSelect = (index, value) => {
      handleSelectedValueChange(index, value);
    };

    useEffect(() => {
      const filtered = modifications.filter(modifier =>
        modifier.modifierName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredModifications(filtered);
    }, [searchQuery, modifications]);


      
      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      console.log(isvalid)
      return (
        <div className="mainItemCustomizations">
          <div className="AddModifiersSection">
            <div>
              <h3 className="headingItemCustomizations">Add Modifiers</h3>
            </div>
            <div>
              <Toggle toggle={showModifiers} setToggle={setShowModifiers} />
            </div>
            <a
              className="Add-Modification-btn-ItemCustomizations"
              onClick={addModifier}
            >
              + Add Modification
            </a>
            
          </div>

          <div className="searchbox">
            <input  placeholder="Search"  className="searchBox-input"type="text" value={searchQuery} 
              onChange={handleSearchChange} ></input>
            <img src={Serachicon} alt="" className="searchIcon" />
          </div>

    <div className="modifiersitem">

      
          
          {filteredModifications.length === 0 ? (
              <div className="modifier-no-content">No modifiers found</div>): (filteredModifications.map((modifier, modIndex) =>(

            
          

        
          

            <div
                
            
            
              className={modifier.options.length>1?'modifier-div-margin':'modifier-div-margin2' }
              
              key={modIndex}
              draggable
              onDragStart={(e) => onDragStart(e, modIndex)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, modIndex)}
              style={{ }}
            >
              {showModifiers && (
                <div className="AddModifiersMainInputSection">
                  <div className="AddModifiersInputSection">
                    <img
                      className="dotedimageItemCustomizations"
                      src={dotted}
                      alt="dotted"
                    />
                    <h3 className="paraItemCustomizations">{modIndex + 1}.</h3>
                    <input
                      placeholder="Modifier Name"
                      className="inputItemCustomizations"
                      name="modifierName"
                      value={filteredModifications[modIndex].modifierName}
                      onChange={(e) => handleModifierChange(modIndex, e)}
                      onBlur={(e)=>handleBlur(e,modIndex)}
                      
                    />
                  
                  
                  
                </div>
            {modificationError[modIndex] && modificationError[modIndex].modifierName && (
  <div className="error-message">{modificationError[modIndex].modifierName}</div>
)}
                
                <div className="flexofradio">
                  <div className="radiobtnMargin">
                    <input
                      type="radio"
                      className="radioItemCustomizations"
                      name={`selectionType-${modIndex}`}
                      value="Mandatory"
                      checked={modifier.selectionType === "Mandatory"} // Bind the checked property to the state
                      onChange={(e) => handleModifierChange(modIndex, e)}
                    />
                    <label className="labelItemCustomizations">Mandatory</label>
                  </div>
                  <div className="radiobtnMargin">
                    <input
                      type="radio"
                      className="radioItemCustomizations"
                      name={`selectionType-${modIndex}`}
                      value="Optional"
                      checked={modifier.selectionType === "Optional"} // Bind the checked property to the state
                      onChange={(e) => handleModifierChange(modIndex, e)}
                    />
                    <label className="labelItemCustomizations">Optional</label>
                  </div>
                </div>
                <div className="option-input-ItemCustomizations">
                  {modifier.options &&
                    modifier.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={
                          modifier.options.length - 1 >= 1
                            ? "option-input-flex-column1-ItemCustomizations"
                            : "option-input-flex-column-ItemCustomizations"
                        }
                      >

                        <div>
                      
                        <input
                          placeholder="Option (Item)*"
                          className="input2ItemCustomizations"
                          name="item"
                          type="text"
                          value={modifier.options[optIndex].item}
                          onChange={(e) => addOptionChange(modIndex, optIndex, e)}
                          onBlur={(e)=>handleBlur(e,modIndex,optIndex)}
                        />
                        {modificationError[modIndex] && modificationError[modIndex].options[optIndex] && modificationError[modIndex].options[optIndex].item && (
  <div className="error-message1  ">{modificationError[modIndex].options[optIndex].item}</div>
)}
                        </div>

                        <div>
                  
                
                      
                        <input
                          placeholder="Price*"
                          className="input2ItemCustomizations"
                          name="price"
                          type="number"
                          value={modifier.options[optIndex].price}
                          onChange={(e) => addOptionChange(modIndex, optIndex, e)}
                          onBlur={(e)=>handleBlur(e,modIndex,optIndex)}
                          
                        />
                          {modificationError[modIndex] && modificationError[modIndex].options[optIndex] && modificationError[modIndex].options[optIndex].price && (
  <div className="error-message1">{modificationError[modIndex].options[optIndex].price}</div>
)}

                        </div>
                      
                        
                        <div
                          className={
                            modifier.options.length - 1 >= 1 ? "btn1" : "btn2"
                          }
                        >
                          {optIndex===0&& (
                              <a
                                className={
                                  modifier.options.length - 1 >= 1
                                    ? "btn-ItemCustomizations"
                                    : "btn-ItemCustomizations2"
                                }
                                onClick={() => addOption(modIndex)}
                              >
                              <span className={ modifier.options.length - 1 >= 1?"spanOption-button2":"spanOption-button"}>+<span className="spanadd">Add option</span> </span> 
                              </a>
                            )}
                          {optIndex>0 && (
                            <a
                              className="btn-ItemCustomizations-del"
                              onClick={() => deleteOption(modIndex, optIndex)}
                            >
                              - Delete option
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="Spinner-input-ItemCustomizations">
                  <div className="Spinner-inputlabel-ItemCustomizations">
                    <label className="labelItemCustomizations" htmlFor="">
                      Minimum selection
                    </label>
                    <input
                      placeholder=""
                      className="input3ItemCustomizations"
                      value={filteredModifications[modIndex].minSelection}
                      name="minSelection"
                      onChange={(e) => handleModifierChange(modIndex, e)}
                    />
                    <div className="polydiv-ItemCustomizations">
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon1}
                        alt=""
                        onClick={() => incrementSpinner(modIndex, "minSelection")}
                      />
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon2}
                        alt=""
                        onClick={() => decrementSpinner(modIndex, "minSelection")}
                      />
                    </div>
                  </div>
                  <div className="Spinner-inputlabel-ItemCustomizations">
                    <label className="labelItemCustomizations" htmlFor="">
                      Maximum selection
                    </label>
                    <input
                      placeholder=""
                      className="input3ItemCustomizations"
                      value={filteredModifications[modIndex].maxSelection}
                      name="maxSelection"
                      onChange={(e) => handleModifierChange(modIndex, e)}
                    />
                    <div className="polydiv-ItemCustomizations">
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon1}
                        alt=""
                        onClick={() => incrementSpinner(modIndex, "maxSelection")}
                      />
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon2}
                        alt=""
                        onClick={() => decrementSpinner(modIndex, "maxSelection")}
                      />
                    </div>
                  </div>
                  <div className="Spinner-inputlabel-ItemCustomizations">
                    <label className="label1ItemCustomizations" htmlFor="">
                      No. Free customization
                    </label>
                    <input
                      placeholder=""
                      className="input3ItemCustomizations"
                      name="freeCustomization"
                      value={filteredModifications[modIndex].freeCustomization}
                      onChange={(e) => handleModifierChange(modIndex, e)}
                    />
                    <div className="polydiv-ItemCustomizations">
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon1}
                        alt=""
                        onClick={() =>
                          incrementSpinner(modIndex, "freeCustomization")
                        }
                      />
                      <img
                        className="polyimg-ItemCustomizations"
                        src={Polygon2}
                        alt=""
                        onClick={() =>
                          decrementSpinner(modIndex, "freeCustomization")
                        }
                      />
                    </div>
                  </div>
                  <div className="dropDown-item" >
                  <Dropdown
                  selectedValues={modifier.selectedValue}


                  onSelect={(value) => handleSelect(modIndex, value)}
            options={options}
            addOption={addOption1}
            placeholder="Available Service Stream* "
            onChange={(e)=>handleSelectedValueChange(modIndex,e.target.value)}
            label="Meal Type*"
          />
          </div>
                </div>
              </div>
            )}
          </div>
        )))}
        </div>
        {/* <div
          className={
            showModifiers
              ? "Custom-Item-availability-container"
              : "Custom-Item-availability-container2"
          }
        >
          <h3 className="Custom-Item-availability-container-heading">
            Custom Item availability
          </h3>
          <Toggle
            toggle={customItemavailability}
            setToggle={setCustomItemavailability}
          />
        </div> */}
        {/* {customItemavailability && (
          <div>
            <div className="Set-as-special-item-container">
              <div className="checkbox-container">
              <input type="checkbox" className="Set-as-special-item" />
              <label className="">Set as special item</label>

              </div>

              <h3 className="Available-between">Available between</h3>
            </div>
            <div className="calander-Custom-Item-availability-container-heading">
              <input
                className="date-Custom-item"
                type="date"
                name="startDate"
                onChange={(e) => handleModifierChange(0, e)}
              />
              <input
                className="date-Custom-item"
                type="date"
                name="endDate"
                onChange={(e) => handleModifierChange(0, e)}
              />
            </div>
          </div>
        )} */}
        <div className="dropdown-container">

        <div className="footer-save-next">
        <Savenextbutton
        selectedpage="ItemCustomization"
        formData={modifications}
        validation={validationforitemcustom}
        formclear={clerall}
        />
        </div>
        </div>



      </div>
    );
  };

  export default ItemCustomizations;
