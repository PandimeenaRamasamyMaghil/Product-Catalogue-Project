import React, { useEffect, useState, useRef } from "react";
import "./Menulisting.scss";
import dots from "../../assets/images/dots.svg";
import dollar from "../../assets/images/dollar.svg";
import removeicon from "../../assets/images/removeicon.svg";
import apple from "../../assets/images/ingredientimages/Chocolate.svg";
import Toggle from "../Toggle/Toggle";
import Header from "../Item Customizations/MainLandingPage/Header/Header";
import closeicon from "../../assets/images/closeicon.svg";
import toggleround from "../../assets/images/toggleround.svg";
import dollaricon from "../../assets/images/dollaricon.svg";
import togglebtns from "../../assets/images/togglebtn.svg";
export const Menulisting = () => {
  const firstTableBodyRef = useRef(null);
  const secondTableBodyRef = useRef(null);

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

  const [bodyData, setBodyData] = useState([
    {
      Dinein1: ["$100", "$100"],
      Pickup1: ["$200", "$200", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$100", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$1500", "$900"],
      Pickup1: ["$200", "$400", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$640"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$730", "$628", "$334"],
      Inventory1: ["$1200", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },

    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },
    {
      Dinein1: ["$400", "$600"],
      Pickup1: ["$700", "$700", "$200"],
      Delivery1: ["$300", "$300", "$300"],
      Dinein2: ["$440", "$440"],
      Pickup2: ["$345", "$280", "$123"],
      Delivery2: ["$780", "$648", "$334"],
      Inventory1: ["$1000", "$10"],
      Customize1: ["5"],
    },

    // Add more data as needed
  ]);

  const [selecteddragIndex, setselecteddragIndex] = useState(null);

  const truncateString = (str, length) => {
    return str.length > length ? str.substring(0, length) : str;
  };

  const [items, setitems] = useState([
    {
      id: 1,
      name: truncateString("Creamy Mushroo", 14),
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
      id: 3,
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
      id: 4,
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
      id: 5,
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

  const onDrag = (e, index) => {
    console.log("Dragging:", index);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const [draggedColumn, setDraggedColumn] = useState(null);
  const [draggedIndexsample, setDraggedIndexsample] = useState(null);
  const [draggedRowIndex, setDraggedRowIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndexsample(index);
  };
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

  const handleDragEnd = () => {
    setDraggedIndexsample(null);
  };

  const handleDragOver = (index) => {
    if (draggedIndexsample !== index) {
      const updatedFirstRowTable = [...firstRowTable];
      const updatedSecondRowTable = [...secondRowTable];
      const updatedclassnames = [...classNames];
      const updatedclassinnerdatanames = [...classNamesinner];

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

      // Update body data according to header drag
      const updatedItems = items.map((item) => {
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
      });

      setFirstRowTable(updatedFirstRowTable);
      setSecondRowTable(updatedSecondRowTable);
      setclassNames(updatedclassnames);
      setclassNamesinner(updatedclassinnerdatanames);
      setitems(updatedItems);
      setDraggedIndexsample(index);
    }
  };

  const handleRowDragStart = (index) => {
    setselecteddragIndex(index);
    setDraggedRowIndex(index);
  };

  const handleRowDragOver = (index) => {
    if (draggedRowIndex !== index) {
      const updatedBodyData = [...bodyData];
      const updataeditemnames = [...items];
      const draggedRow = updatedBodyData[draggedRowIndex];
      const draggedRow1 = updataeditemnames[draggedRowIndex];

      updatedBodyData.splice(draggedRowIndex, 1);
      updatedBodyData.splice(index, 0, draggedRow);

      updataeditemnames.splice(draggedRowIndex, 1);
      updataeditemnames.splice(index, 0, draggedRow1);

      setBodyData(updatedBodyData);
      setitems(updataeditemnames);
      setDraggedRowIndex(index);
    }
    setselecteddragIndex(null);
  };

  const handleRowDragEnd = () => {
    setDraggedRowIndex(null);
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
                          height: "25px"
                         
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
                <div className="itemheading">
                  <img src={dots} alt="" />
                  Steamed-Veg(6)
                </div>

                <tr>
                  <div className="firsttablebody">
                    {items.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr
                          className={`itemdetails ${
                            selecteddragIndex === index ? "selected" : ""
                          }`}
                        >
                          <td className="itemimage2">
                            <img
                              src={dots}
                              alt=""
                              draggable
                              onDragStart={() => handleRowDragStart(index)}
                              onDragOver={() => handleRowDragOver(index)}
                              onDragEnd={handleRowDragEnd}
                              className="draggableimg"
                            />
                            <img src={apple} alt="" />
                          </td>
                          <td className="itemname2">{item.name}</td>
                          <td className="itemcode2">{item.code}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                    <div className="itemheading">
                      <img src={dots} alt="" />
                      Steamed-Veg(6)
                    </div>

                    {items.map((item, index) => (
                      <React.Fragment key={index}>
                        <tr
                          className={`itemdetails ${
                            selecteddragIndex === index ? "selected" : ""
                          }`}
                        >
                          <td className="itemimage2">
                            <img
                              src={dots}
                              alt=""
                              draggable
                              onDragStart={() => handleRowDragStart(index)}
                              onDragOver={() => handleRowDragOver(index)}
                              onDragEnd={handleRowDragEnd}
                              className="draggableimg"
                            />
                            <img src={apple} alt="" />
                          </td>
                          <td className="itemname2">{item.name}</td>
                          <td className="itemcode2">{item.code}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </div>
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
                              <img src={dots} alt=""  draggable
                            onDragStart={() => handleDragStart(index)}
                            onDragOver={() => handleDragOver(index)}
                            onDragEnd={handleDragEnd}/>
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
                              {" "}
                              {header.label.substring(
                                0,
                                header.label.length - 1
                              )}{" "}
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
                                <span>{subheader.substring(0, 5)}</span>{" "}
                                <span>
                                  {subheader.length > 5 && <span>...</span>}
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
                  {items.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr
                        className={`tabletwobodyrow ${
                          selecteddragIndex === index ? "selected" : ""
                        }`}
                      >
                        <td className="eachobject">
                          {Object.entries(item.pricingdetails || {}).map(
                            ([key, cellData], cellIndex) => {
                              const className = classNamesinner[cellIndex];
                              const items = listingobject[className];

                              if (items && Array.isArray(cellData)) {
                                return (
                                  <div className={className} key={cellIndex}>
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
              </tr>
              <div className="itemheading2">
                {/* <img src={dots} alt="" /> */}
                {/* Steamed-Veg(6) */}
              </div>
              <tr>
                <div className="tabletwobody">
                  {items.map((item, index) => (
                    <React.Fragment key={index}>
                      <tr
                        className={`tabletwobodyrow ${
                          selecteddragIndex === index ? "selected" : ""
                        }`}
                      >
                        <td className="eachobject">
                          {Object.entries(item.pricingdetails || {}).map(
                            ([key, cellData], cellIndex) => {
                              const className = classNamesinner[cellIndex];
                              const items = listingobject[className];

                              if (items && Array.isArray(cellData)) {
                                return (
                                  <div className={className} key={cellIndex}>
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
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  );
};
