import React, { useEffect, useState, useRef } from "react";
import "./Menulisting.scss";
import dots from "../../assets/images/dots.svg";
import dollar from "../../assets/images/dollar.svg";
import removeicon from "../../assets/images/removeicon.svg";
import apple from "../../assets/images/ingredientimages/fish.svg";




import Toggle from "../Toggle/Toggle";
import Header from "../Item Customizations/MainLandingPage/Header/Header";
import closeicon from "../../assets/images/closeicon.svg";
import toggleround from "../../assets/images/toggleround.svg";
import dollaricon from "../../assets/images/dollaricon.svg";
import togglebtns from "../../assets/images/togglebtn.svg";
import Slider from "../Slider/Slider"
export const Menupage = () => {
  const firstTableBodyRef = useRef(null);
  const secondTableBodyRef = useRef(null);
  const [hovertext, sethovertext] = useState({
    index: null,
    name: null,
  });

  const handleScroll = (source) => {
    const firstTableBody = firstTableBodyRef.current;
    const secondTableBody = secondTableBodyRef.current;

    if (source === "first") {
      secondTableBody.scrollTop = firstTableBody.scrollTop;
    } else if (source === "second") {
      firstTableBody.scrollTop = secondTableBody.scrollTop;
    }
  };

  const [togglebtn, settogglebtn] = useState(false);

  const [firstRowTable, setFirstRowTable] = useState([
    { label: "Dinein1" },
    { label: "Pickup1" },
    { label: "Delivery1" },
    { label: "Dinein2" },
    { label: "Pickup2" },
    { label: "Delivery2" },
    { label: "Inventory1" },
    { label: "Customize1" },
  ]);

  const [secondRowTable, setSecondRowTable] = useState([
    ["Ac", "Nonac"], // Subheaders for Dinein
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
    ["Ac", "Nonac"], // Subheaders for another Dinein
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
    ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
    ["Total", "Threshold"], // Subheaders for Inventory
    [""], // Subheaders for Customize
  ]);

  const [selecteddragIndex, setselecteddragIndex] = useState(null);

  const truncateString = (str, length) => {
    return str.length > length ? str.substring(0, length) : str;
  };

  const [items, setitems] = useState([
    {
      id: 1,
      name: truncateString("dosa", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$100", "$100"],
        Pickup1: ["$200", "$200", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$100", "$10"],
        Customize1: ["5"],
      },
    },

    {
      id: 3,
      name: truncateString(" Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 4,
      name: truncateString("Creamy", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 5,
      name: truncateString("idly Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 2,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$1500", "$900"],
        Pickup1: ["$200", "$400", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1200", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 2,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$1500", "$900"],
        Pickup1: ["$200", "$400", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1200", "$10"],
        Customize1: ["5"],
      },
    },
  ]);
  const [itemsfood, setitemsfood] = useState([
    {
      id: 11,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$900", "$100"],
        Pickup1: ["$200", "$200", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$100", "$10"],
        Customize1: ["5"],
      },
    },

    {
      id: 31,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 41,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 51,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$400", "$600"],
        Pickup1: ["$700", "$700", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1000", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 21,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$1500", "$900"],
        Pickup1: ["$200", "$400", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1200", "$10"],
        Customize1: ["5"],
      },
    },
    {
      id: 21,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      pricingdetails: {
        Dinein1: ["$1500", "$900"],
        Pickup1: ["$200", "$400", "$200"],
        Delivery1: ["$300", "$300", "$300"],
        Dinein2: ["Enabled", "Enabled"],
        Pickup2: ["Enabled", "Enabled", "Enabled"],
        Delivery2: ["Enabled", "Enabled", "Enabled"],
        Inventory1: ["$1200", "$10"],
        Customize1: ["5"],
      },
    },
  ]);

  const [nooftypes, setnooftypes] = useState([
    {
      id: 1,
      name: items,
    },
    {
      id: 2,
      name: itemsfood,
    },
  ]);

  const initialColumnsOrder = [
    "DineIn1",
    "Pickup1",
    "Delivery1",
    "DineIn2",
    "Pickup2",
    "Delivery2",
    "Inventory",
    "Customize",
  ];
  const [initialselect, setinitialselect] = useState({
    DineIn1: true,
    Pickup1: true,
    Delivery1: true,
    DineIn2: true,
    Pickup2: true,
    Delivery2: true,
    Inventory: true,
    Customize: true,
  });

  const [draggedIndex, setDraggedIndex] = useState(null);

  const [draggedColumn, setDraggedColumn] = useState(null);
  const [draggedIndexsample, setDraggedIndexsample] = useState(null);

  const [classNames, setclassNames] = useState([
    "Dinein1-class",
    "Pickup1-class",
    "Delivery1-class",
    "Dinein2-class",
    "Pickup2-class",
    "Delivery2-class",
    "Inventory1-class",
    "Customize1-class",
  ]);
  const [classNamesinner, setclassNamesinner] = useState([
    "Dinein1",
    "Pickup1",
    "Delivery1",
    "Dinein2",
    "Pickup2",
    "Delivery2",
    "Inventory1",
    "Customize1",
  ]);

  // const handleDragStart = (index) => {
  //   setDraggedIndex(index); // Set the starting index of the drag
  // };
  const handleDragStart = (index) => {
    setDraggedIndexsample(index);
  };
  const handledragvegnonvegdragstart = (e, index) => {
    setDraggedRowIndex(index);
  };
  const handledragvegnonvegdropover = (e) => {
    e.preventDefault();
  };

  const handledragvegnonvegdropend = (e, index) => {
    e.preventDefault();
    const updatedRows = [...nooftypes];
    const draggedRow = updatedRows[draggedRowIndex];

    // Remove the dragged item and insert it at the new position
    updatedRows.splice(draggedRowIndex, 1);
    updatedRows.splice(index, 0, draggedRow);

    setnooftypes(updatedRows);
    console.log("nooftypes", nooftypes);
    setDraggedRowIndex(null); // Reset drag index
  };

  const handleDragOver = (index) => {
    if (draggedIndexsample !== index) {
      // Update header arrays
      const updatedFirstRowTable = [...firstRowTable];
      const updatedSecondRowTable = [...secondRowTable];
      const updatedclassnames = [...classNames];
      const updatedclassinnerdatanames = [...classNamesinner];
      const updatedItems = [...nooftypes];

      // Extract item arrays
      const item1 = updatedItems[0].name || []; // Default to empty array if undefined
      const item2 = updatedItems[1].name || []; // Default to empty array if undefined

      // Reorder headers and subheaders
      const draggedItem = updatedFirstRowTable[draggedIndexsample];
      const draggedSubheader = updatedSecondRowTable[draggedIndexsample];
      const draggedclassname = updatedclassnames[draggedIndexsample];
      const draggedclassinnerdata =
        updatedclassinnerdatanames[draggedIndexsample];

      updatedFirstRowTable.splice(draggedIndexsample, 1);
      updatedFirstRowTable.splice(index, 0, draggedItem);

      updatedSecondRowTable.splice(draggedIndexsample, 1);
      updatedSecondRowTable.splice(index, 0, draggedSubheader);

      updatedclassnames.splice(draggedIndexsample, 1);
      updatedclassnames.splice(index, 0, draggedclassname);

      updatedclassinnerdatanames.splice(draggedIndexsample, 1);
      updatedclassinnerdatanames.splice(index, 0, draggedclassinnerdata);

      // Reorder item1 and item2 arrays
      const draggedHeader = item1[draggedIndexsample];
      const draggedHeader2 = item2[draggedIndexsample];

      item1.splice(draggedIndexsample, 1);
      item1.splice(index, 0, draggedHeader);

      item2.splice(draggedIndexsample, 1);
      item2.splice(index, 0, draggedHeader2);

      // Update pricing details
      const updatePricingDetails = (itemsArray, index) => {
        return itemsArray.map((item) => {
          if (item && item.pricingdetails) {
            const reorderedPricingDetails = { ...item.pricingdetails };
            const reorderedKeys = Object.keys(reorderedPricingDetails);

            const draggedKey = reorderedKeys.splice(draggedIndexsample, 1)[0];
            reorderedKeys.splice(index, 0, draggedKey);

            const updatedPricingDetails = {};
            reorderedKeys.forEach((key) => {
              updatedPricingDetails[key] = reorderedPricingDetails[key];
            });

            return {
              ...item,
              pricingdetails: updatedPricingDetails,
            };
          }
          return { ...item }; // Return item unchanged if not valid
        });
      };

      const updatednooftypes = updatePricingDetails(item1, index);
      const updatednooftypes1 = updatePricingDetails(item2, index);

      // Update state
      setFirstRowTable(updatedFirstRowTable);
      setSecondRowTable(updatedSecondRowTable);
      setclassNames(updatedclassnames);
      setclassNamesinner(updatedclassinnerdatanames);
      setnooftypes([
        { ...updatedItems[0], name: updatednooftypes },
        { ...updatedItems[1], name: updatednooftypes1 },
      ]);

      setDraggedIndexsample(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndexsample(null);
  };

  const [draggedRowIndex, setDraggedRowIndex] = useState({
    objectId: null,
    index: null,
  });
  const [draggingOverIndex, setDraggingOverIndex] = useState(null);

  const handleRowDragStart = (objectId, index) => {
    setDraggedRowIndex({ objectId, index });
    document.addEventListener('mousemove', handleScroll);
    console.log("objectid",objectId)

  };
  // const [nooftypes, setnooftypes] = useState([
  //   {
  //     id: 1,
  //     name: items,
  //   },
  //   {
  //     id: 2,
  //     name: itemsfood,
  //   },
  // ]);
  const handleRowDragOver = (objectId, index) => {
    if (draggedRowIndex.objectId === null || draggedRowIndex.index === null) {
     
      return;
    }

    const draggedObjectId = draggedRowIndex.objectId;
    const draggedIndex = draggedRowIndex.index;
 

    // if (draggedObjectId === objectId && draggedIndex !== index) {

    //   if(objectId===1)
    //     {
    //       const updatedTypes = [...nooftypes[0].name];
    //       console.log(updatedTypes)

    //       const currentObject = updatedTypes.find((item) => item.id === index);
    //       if (currentObject) {
    //         const updatedItems = [...currentObject.name];
    //         const draggedItem = updatedItems[draggedIndex];
    
    //         // Remove dragged item and insert it at the new position
    //         updatedItems.splice(draggedIndex, 1);
    //         updatedItems.splice(index, 0, draggedItem);
    
    //         // Update the object in nooftypes
    //         currentObject.name = updatedItems;
    
    //         // Update state
    //         setnooftypes({...nooftypes,name:updatedTypes});
    //         setDraggedRowIndex({ objectId, index });
    //       }    
    //     }
    //     if(objectId===2)
    //       {
    //         const updatedTypes = [...nooftypes[1].name];
    //         console.log(updatedTypes)
  
    //         const currentObject = updatedTypes.find((item) => item.id === index);
    //         if (currentObject) {
    //           const updatedItems = [...currentObject.name];
    //           const draggedItem = updatedItems[draggedIndex];
    //           updatedItems.splice(draggedIndex, 1);
    //           updatedItems.splice(index, 0, draggedItem);
    //           currentObject.name = updatedItems;
    //           setnooftypes(updatedTypes);
    //           setDraggedRowIndex({ objectId, index });
    //         }    
    //       }
    // }
   
 


    if (draggedObjectId === objectId && draggedIndex !== index) {
   


      setDraggingOverIndex(index);
      const updatedTypes = [...nooftypes];
      const currentObject = updatedTypes.find((item) => item.id === objectId);
      console.log("currentObject",currentObject)

      if (currentObject) {
        const updatedItems = [...currentObject.name];
        console.log("updatedItems",updatedItems)
        const draggedItem = updatedItems[draggedIndex];
   

        // Remove dragged item and insert it at the new position
        updatedItems.splice(draggedIndex, 1);
        updatedItems.splice(index, 0, draggedItem);

        // Update the object in nooftypes
        currentObject.name = updatedItems;

        // Update state
        setnooftypes(updatedTypes);
        setDraggedRowIndex({ objectId, index });
      }
    }
  };

  // Handle row drag end
  const handleRowDragEnd = () => {
    setDraggedRowIndex({ objectId: null, index: null });
    setDraggingOverIndex(null);
    document.removeEventListener('mousemove', handleScroll);
  };
  const [listingobject, setlistingobject] = useState({
    showPricing: true,
    Dinein1: true,
    Pickup1: true,
    Delivery1: true,
    showavail: true,
    Dinein2: true,
    Pickup2: true,
    Delivery2: true,
    Inventory1: true,
    Customize1: true,
  });

  const insertlists = {
    Pricing: {
      show: "Pricing",
      dinein: "Dine-in",
      pickup: "Pickup",
      Delivery: "Delivery",
    },
    Available: {
      show: "Available",
      dinein: "Dine-in",
      pickup: "Pickup",
      Delivery: "Delivery",
    },
    Inventory: "Inventory",
    Customization: "Customization",
  };
  const [showheadinglist, setshowheadinglist] = useState(false);

  useEffect(() => {
    if (
      !listingobject.Dinein1 &&
      !listingobject.Pickup1 &&
      !listingobject.Delivery1
    ) {
      setlistingobject({ ...listingobject, showPricing: false });
    }
    if (
      listingobject.Dinein1 ||
      listingobject.Pickup1 ||
      listingobject.Delivery1
    ) {
      setlistingobject({ ...listingobject, showPricing: true });
    }
  }, [listingobject.Dinein1, listingobject.Pickup1, listingobject.Delivery1]);

  useEffect(() => {
    if (
      !listingobject.Dinein2 &&
      !listingobject.Pickup2 &&
      !listingobject.Delivery2
    ) {
      setlistingobject({ ...listingobject, showavail: false });
    }
    if (
      listingobject.Dinein2 ||
      listingobject.Pickup2 ||
      listingobject.Delivery2
    ) {
      setlistingobject({ ...listingobject, showavail: true });
    }
  }, [listingobject.Dinein2, listingobject.Pickup2, listingobject.Delivery2]);

const [modal,setmodal]=useState(false);
  const handlemodal=()=>
  {
      setmodal(true);
  }
  const containerRef = useRef(null);


  const handleScroll2 = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollAmount = 10; // Amount to scroll per tick

    if (e.clientY < rect.top + 20) {
      containerRef.current.scrollBy(0, -scrollAmount);
    } else if (e.clientY > rect.bottom - 20) {
      containerRef.current.scrollBy(0, scrollAmount);
    }
  };







  return (
    <div
      className="mainpagemenu"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <div className="headercomponent">
        {" "}
        <Header />
      </div>

      <div className="mainlistpage">
        <div className="firsttable">
          <table>
            <thead>
              <div className="firsttableheading">
                <tr className="headerrow">
                  <th className="itemimage">Image</th>
                  <th className="itemname">Item name</th>
                  <th className="itemcode">
                    <p>
                      Code
                      <button
                        style={{
                          width: "23px",
                          height: "25px",
                        }}
                        onClick={() => setshowheadinglist(true)}
                        className=".span"
                      >
                        <span> +</span>
                      </button>
                    </p>
                  </th>
                </tr>
              </div>
            </thead>
            <tbody>
              <div
                ref={firstTableBodyRef}
                className="table-body"
                onScroll={() => handleScroll("first")}
              >
                {}

                <tr>
                  {nooftypes.map((object, index) => (
                    <div key={object.id}>
                      <div
                        className={`${
                          index === 0 ? "firsttablebody" : "firsttablebody"
                        }`}
                      >
                        {object.id === 1 && (
                          <div
                            className={`${
                              index === 0 ? "itemheadingtwo" : "itemheading"
                            }`}
                          >
                            <img
                              src={dots}
                              alt=""
                              draggable
                              onDragStart={(e) =>
                                handledragvegnonvegdragstart(e, index)
                              }
                              onDragOver={handledragvegnonvegdropover}
                              onDrop={(e) =>
                                handledragvegnonvegdropend(e, index)
                              }
                            />
                            Steamed-Veg(6)
                          </div>
                        )}
                        {object.id === 2 && (
                          <div
                            className={`${
                              index === 0 ? "itemheadingtwo" : "itemheading"
                            }`}
                          >
                            <img
                              src={dots}
                              alt=""
                              draggable
                              onDragStart={(e) =>
                                handledragvegnonvegdragstart(e, index)
                              }
                              onDragOver={handledragvegnonvegdropover}
                              onDrop={(e) =>
                                handledragvegnonvegdropend(e, index)
                              }
                            />
                            Steamed-NonVeg(6)
                          </div>
                        )}

                        {object.name.map((item, index) => (
                          <React.Fragment key={index} ref={containerRef}>
                            {draggingOverIndex === index && (
                              <tr className="placeholderplace"></tr>
                            )}
                            <tr
                              draggable
                              onDragStart={() => handleRowDragStart(object.id, index)
                               
                              }
                              onDragOver={() =>
                                handleRowDragOver(object.id, index)
                               
                              }
                              onDragEnd={handleRowDragEnd}
                              className={`itemdetails ${
                                draggedRowIndex?.index === index 
                               
                                  ? "selected"
                                  : ""
                              }`}
                            >
                              <td className="itemimage2">
                                <img
                                  src={dots}
                                  alt=""
                                  // draggable
                                  // onDragStart={() =>
                                  //   handleRowDragStart(object.id, index)
                                  // }
                                  // onDragOver={() =>
                                  //   handleRowDragOver(object.id, index)
                                  // }
                                  // onDragEnd={handleRowDragEnd}
                                  className="draggableimg"
                                />
                                <img src={apple} alt="" className="foodimage" />
                              </td>
                              <td className="itemname2" onClick={handlemodal}>{item.name}</td>
                              <td className="itemcode2">{item.code}</td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  ))}
                </tr>
              </div>
            </tbody>
          </table>
        </div>
        <div className="secondtable">
          <table>
            <thead>
              <div className="headaadbtnclass">
                {showheadinglist && (
                  <div className="headingstextlist">
                    <div className="insertheading">
                      <h3>
                        <span>Insert Column</span>{" "}
                        <img
                          src={closeicon}
                          alt=""
                          onClick={() => setshowheadinglist(false)}
                        />
                      </h3>
                    </div>
                    <div className="inserbody">
                      <ul>
                        <li>
                          <div className="headtext pricingheadtext">
                            <input
                              type="checkbox"
                              checked={listingobject.showPricing}
                              onClick={() =>
                                setlistingobject({
                                  ...listingobject,
                                  showPricing: !listingobject.showPricing,
                                })
                              }
                            />
                            <span>
                              {insertlists.Pricing.show}{" "}
                              <img
                                src={dollaricon}
                                alt=""
                                className="dollaricon"
                              />{" "}
                            </span>
                          </div>
                          <ul className="indenttexts">
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Dinein1}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Dinein1: !listingobject.Dinein1,
                                    });
                                  }}
                                />
                                <span>{insertlists.Pricing.dinein}</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Pickup1}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Pickup1: !listingobject.Pickup1,
                                    });
                                  }}
                                />
                                <span>{insertlists.Pricing.pickup}</span>
                              </div>
                            </li>
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Delivery1}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Delivery1: !listingobject.Delivery1,
                                    });
                                  }}
                                />
                                <span>{insertlists.Pricing.Delivery}</span>
                              </div>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <div className="headtext availheadtext">
                            <input
                              type="checkbox"
                              checked={listingobject.showavail}
                              onClick={() =>
                                setlistingobject({
                                  ...listingobject,
                                  showavail: !listingobject.showavail,
                                })
                              }
                            />
                            <span>
                              {insertlists.Available.show}
                              <img src={toggleround} alt="" />{" "}
                              <img
                                src={togglebtns}
                                alt=""
                                className="toggleicon"
                              />
                            </span>
                          </div>
                          <ul className="indenttexts">
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Dinein2}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Dinein2: !listingobject.Dinein2,
                                    });
                                  }}
                                />
                                <span>{insertlists.Available.dinein}</span>{" "}
                              </div>
                            </li>
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Pickup2}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Pickup2: !listingobject.Pickup2,
                                    });
                                    setinitialselect({
                                      ...initialselect,
                                      Pickup2: !initialselect.Pickup2,
                                    });
                                  }}
                                />
                                <span>{insertlists.Available.pickup}</span>{" "}
                              </div>
                            </li>
                            <li>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={listingobject.Delivery2}
                                  onClick={() => {
                                    setlistingobject({
                                      ...listingobject,
                                      Delivery2: !listingobject.Delivery2,
                                    });
                                    setinitialselect({
                                      ...initialselect,
                                      Delivery2: !initialselect.Delivery2,
                                    });
                                  }}
                                />
                                <span>{insertlists.Available.Delivery}</span>{" "}
                              </div>
                            </li>
                          </ul>{" "}
                        </li>
                        <li>
                          {" "}
                          <div className="headtext inventoryheadtext">
                            <input
                              type="checkbox"
                              checked={listingobject.Inventory1}
                              onClick={() => {
                                setlistingobject({
                                  ...listingobject,
                                  Inventory1: !listingobject.Inventory1,
                                });
                              }}
                            />
                            <span>{insertlists.Inventory}</span>
                          </div>{" "}
                        </li>
                        <li>
                          <div className="headtext customheadtext">
                            <input
                              type="checkbox"
                              checked={listingobject.Customize1}
                              onClick={() => {
                                setlistingobject({
                                  ...listingobject,
                                  Customize1: !listingobject.Customize1,
                                });
                              }}
                            />
                            <span>{insertlists.Customization}</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                <div style={{ marginLeft: "20px" }}>
                  <tr className="headingonesection">
                    {firstRowTable.map(
                      (header, index) =>
                        listingobject[header.label] && (
                          <th
                            key={index}
                            colSpan={secondRowTable[index].length}
                            className={header.label.substring(
                              0,
                              header.label.length - 1
                            )}
                          >
                            <span className="dots">
                              <img
                                src={dots}
                                alt=""
                                draggable
                                onDragStart={() => handleDragStart(index)}
                                onDragOver={() => handleDragOver(index)}
                                onDragEnd={handleDragEnd}
                              />
                            </span>{" "}
                            {header.label !== "Inventory1" &&
                              header.label !== "Customize1" && (
                                <span className="dollar">
                                  {header.label.charAt(
                                    header.label.length - 1
                                  ) === "2" ? (
                                    <img src={togglebtns} alt="" />
                                  ) : (
                                    <img src={dollar} alt="" />
                                  )}
                                  {/* <img src={dollar} alt="" /> */}
                                </span>
                              )}
                            <span className="spanheadertext">
                              {header.label.substring(
                                0,
                                header.label.length - 1
                              )}
                            </span>
                            <span className="removeicon">
                              <img
                                src={removeicon}
                                alt=""
                                onClick={() =>
                                  setlistingobject({
                                    ...listingobject,
                                    [header.label]: false,
                                  })
                                }
                              />
                            </span>
                          </th>
                        )
                    )}
                  </tr>
                  <tr className="headingtwosection">
                    {secondRowTable.map(
                      (subheaders, index) =>
                        listingobject[
                          classNames[index].replace(/-class/g, "")
                        ] && (
                          <tr key={index} className={classNames[index]}>
                            {subheaders.map((subheader, subIndex) => (
                              <td key={subIndex} className={subheader}>
                                <span
                                  onMouseEnter={() =>
                                    sethovertext({
                                      index: index,
                                      name: subheader,
                                    })
                                  }
                                  onMouseLeave={() =>
                                    sethovertext({ index: null, name: null })
                                  }
                                >
                                  {hovertext.index === index &&
                                  hovertext.name === subheader
                                    ? subheader
                                    : subheader.substring(0, 5)}
                                </span>
                                <span>
                                  {hovertext.index !== index &&
                                    hovertext.name !== subheader &&
                                    subheader.length > 5 && <span>...</span>}
                                </span>
                              </td>
                            ))}
                          </tr>
                        )
                    )}
                  </tr>
                </div>
              </div>
            </thead>
            <tbody
              ref={secondTableBodyRef}
              className="table-body"
              onScroll={() => handleScroll("second")}
            >
              <tr>
                <div className="tabletwobody">
                  {nooftypes.map((item, index) => {
                    return (
                      <div>
                        {index === 1 && (
                          <div className="itemheading2">
                            {/* <img src={dots} alt="" /> */}
                            {/* Steamed-Veg(6) */}
                          </div>
                        )}
                        
                       

                        {item.name.map((item, index) => (
                          <React.Fragment key={index}>
                             {/* {draggingOverIndex === index && (
                              <tr className="placeholderplace" style={{backgroundColor:'red'}}></tr>
                            )} */}
                             
                            <tr
                              className={`tabletwobodyrow ${
                                draggingOverIndex === index ? "selected" : ""
                              }`}
                            >
                              <td className="eachobject">
                                {Object.entries(item.pricingdetails || {}).map(
                                  ([key, cellData], cellIndex) => {
                                    const className =
                                      classNamesinner[cellIndex];
                                    const items = listingobject[className];

                                    if (items && Array.isArray(cellData)) {
                                      return (
                                        <div
                                          className={className}
                                          key={cellIndex}
                                        >
                                          {cellData.map((item, itemIndex) => (
                                            <td
                                              key={`${cellIndex}-${itemIndex}`}
                                              className=""
                                            >
                                              {item === "Enabled" ||
                                              item === "Disabled" ? (
                                                <Toggle
                                                  toggle={togglebtn}
                                                  setToggle={settogglebtn}
                                                />
                                              ) : (
                                                <span>{item}</span>
                                              )}
                                            </td>
                                          ))}
                                        </div>
                                      );
                                    }
                                    return null;
                                  }
                                )}
                              </td>
                            </tr>
                          </React.Fragment>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </tr>
            </tbody>
          </table>

          {
            modal && <Slider onclose={()=>setmodal(false)}/>
          }
        </div>
      </div>
    </div>
  );
}