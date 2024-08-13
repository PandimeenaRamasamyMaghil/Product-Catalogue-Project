import React, { useEffect, useState ,useRef} from "react";
import "./Menulisting.scss";
import { tr } from "date-fns/locale";
import dots from "../../assets/images/dots.svg";
import dollar from "../../assets/images/dollar.svg";
import removeicon from "../../assets/images/removeicon.svg";
import apple from '../../assets/images/ingredientimages/Chocolate.svg'
import closeicon from "../../assets/images/closeicon.svg";
import toggleround from "../../assets/images/toggleround.svg";
import togglebtn from "../../assets/images/togglebtn.svg";
import dollaricon from "../../assets/images/dollaricon.svg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
export const Menulisting = () => {

  const firstTableBodyRef = useRef(null);
  const secondTableBodyRef = useRef(null);

  const handleScroll = (source) => {
    const firstTableBody = firstTableBodyRef.current;
    const secondTableBody = secondTableBodyRef.current;

    if (source === 'first') {
      secondTableBody.scrollTop = firstTableBody.scrollTop;
    } else if (source === 'second') {
      firstTableBody.scrollTop = secondTableBody.scrollTop;
    }
  };

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

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, name: "Item 1", code: "001" },
    { id: 2, name: "Item 2", code: "002" },
    { id: 3, name: "Item 3", code: "003" },
    // Add more rows as needed
  ]);
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    // Handle dragging within the first table body
    if (
      source.droppableId === "body-rows" ||
      source.droppableId === "second-table-body-rows"
    ) {
      const reorderedBodyData = Array.from(bodyData);
      const reorderedSecondTableData = Array.from(secondTableData);

      const [removedBodyRow] = reorderedBodyData.splice(source.index, 1);
      const [removedSecondTableRow] = reorderedSecondTableData.splice(
        source.index,
        1
      );

      reorderedBodyData.splice(destination.index, 0, removedBodyRow);
      reorderedSecondTableData.splice(
        destination.index,
        0,
        removedSecondTableRow
      );

      setBodyData(reorderedBodyData);
      setSecondTableData(reorderedSecondTableData);
    }
  };

  const truncateString = (str, length) => {
    return str.length > length ? str.substring(0, length) : str;
  };

  const [items, setitems] = useState([
    {
      id: 1,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 2,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 3,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 4,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 5,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 6,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 7,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 8,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 8,
      name: truncateString("Creamy Mushroo", 14),
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
  ]);

  const [price, setprice] = useState([
    {
      id: 1,
      dineIn: {
        AC: "$100.00",
        nonAC: "$100.00",
      },
      pickup: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },
      customize: "5",
    },
    {
      id: 2,
      dineIn: {
        AC: "$200.00",
        nonAC: "$200.00",
      },
      pickup: {
        inHouse: "$200.00",
        swiggy: "$200.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$200.00",
        swiggy: "$200.00",
        zomato: "$200.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },

      customize: "5",
    },
    {
      id: 3,
      dineIn: {
        AC: "$300.00",
        nonAC: "$300.00",
      },
      pickup: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },
      customize: "5",
    },
    {
      id: 4,
      dineIn: {
        AC: "$400.00",
        nonAC: "$400.00",
      },
      pickup: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },
      customize: "5",
    },
    {
      id: 5,
      dineIn: {
        AC: "$500.00",
        nonAC: "$500.00",
      },
      pickup: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },
      customize: "5",
    },
    {
      id: 6,
      dineIn: {
        AC: "$600.00",
        nonAC: "$600.00",
      },
      pickup: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      delivery: {
        inHouse: "$100.00",
        swiggy: "$100.00",
        zomato: "$100.00",
      },
      inventory: {
        total: "1000",
        threshold: "100",
      },
      customize: "5",
    },
    // Add more objects here for additional rows if needed
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

  const [columnsOrder, setColumnsOrder] = useState(initialColumnsOrder);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const onDrag = (e, index) => {
    console.log("Dragging:", index);
    setDraggedIndex(index);
    e.dataTransfer.effectAllowed = "move";
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDropbtn = (e, index) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedColumns = [...columnsOrder];
    const [movedItem] = updatedColumns.splice(draggedIndex, 1);
    updatedColumns.splice(index, 0, movedItem);

    setColumnsOrder(updatedColumns);
    setDraggedIndex(null);
  };

  const onDrop = (e, index) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("rowdrag"), 10);
    console.log(draggedIndex);
    if (draggedIndex !== index) {
      const newModifications1 = [...items];
      const newModifications2 = [...price];

      const [draggedItem] = newModifications1.splice(draggedIndex, 1);
      const [draggedItem2] = newModifications2.splice(draggedIndex, 1);

      newModifications1.splice(index, 0, draggedItem);
      newModifications2.splice(index, 0, draggedItem2);
      setitems(newModifications1);
      setprice(newModifications2);
    }
  };
  const onDragStart = (e, index) => {
    e.dataTransfer.setData("rowdrag", index);
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
      const updatedBodyData = bodyData.map((row) => {
        // Ensure row is a valid object
        if (row && typeof row === "object") {
          const reorderedRow = Object.values(row);
          const draggedCell = reorderedRow.splice(draggedIndexsample, 1)[0];
          reorderedRow.splice(index, 0, draggedCell);

          // Preserve the original object keys
          return reorderedRow.reduce((acc, val, i) => {
            const key = Object.keys(row)[i];
            acc[key] = val;
            return acc;
          }, {});
        }
        return row; // Return row as is if it's not a valid object
      });

      setFirstRowTable(updatedFirstRowTable);
      setSecondRowTable(updatedSecondRowTable);
      setclassNames(updatedclassnames);
      setclassNamesinner(updatedclassinnerdatanames);
      console.log("classNames", classNames);
      setBodyData(updatedBodyData);
      setDraggedIndexsample(index);
    }
  };

  const handleDragEnd = () => {
    setDraggedIndexsample(null);
  };

  const handleRowDragStart = (index) => {
    setselecteddragIndex(index)
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
    setselecteddragIndex(null)
  };

  const handleRowDragEnd = () => {
    setDraggedRowIndex(null);
  };

  const columnDropfn = (e, index) => {
    // const draggedIndex = parseInt(e.dataTransfer.getData("columndrag"), 10);
    // console.log(draggedIndex);
    // if (draggedIndex !== index) {
    //   const newModifications1 = [...columnsOrder];
    //   // const newModifications2 = [...price];

    //   const [draggedItem] = newModifications1.splice(draggedIndex, 1);
    //   // const [draggedItem2] = newModifications2.splice(draggedIndex, 1);

    //   newModifications1.splice(index, 0, draggedItem);
    //   // newModifications2.splice(index, 0, draggedItem2);
    //   setColumnsOrder(newModifications1);
    //   // setprice(newModifications2);
    // }
    e.preventDefault();
    if (draggedColumn === index) return;

    const updatedColumns = [...columnsOrder];
    const [movedColumn] = updatedColumns.splice(draggedColumn, 1);
    updatedColumns.splice(index, 0, movedColumn);

    setDraggedColumn(index);
    setColumnsOrder(updatedColumns);
  };
  // const columnDragfn = (e, index) => {
  //   e.dataTransfer.setData("columndrag", index);
  // };

  const columnDragfn = (e, index) => {
    setDraggedColumn(index);
    e.dataTransfer.effectAllowed = "move";
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

  // useEffect(() => {
  //   // Check if Dinein, Delivery, and pickup are all false
  //   if (
  //     !listingobject.Pricing.Dinein &&
  //     !listingobject.Pricing.Delivery &&
  //     !listingobject.Pricing.pickup
  //   ) {
  //     // Set Pricing.show to false
  //     setlistingobject((prevState) => ({
  //       ...prevState,
  //       Pricing: {
  //         ...prevState.Pricing,
  //         show: false,
  //       },
  //     }));
  //   }
  // }, [listingobject.Pricing.Dinein, listingobject.Pricing.Delivery, listingobject.Pricing.pickup]);
  // useEffect(() => {
  //   // Check if Dinein, Delivery, and pickup are all false
  //   if (
  //     !listingobject.Availability.Dinein &&
  //     !listingobject.Availability.Delivery &&
  //     !listingobject.Availability.pickup
  //   ) {
  //     // Set Pricing.show to false
  //     setlistingobject((prevState) => ({
  //       ...prevState,
  //       Availability: {
  //         ...prevState.Availability,
  //         show: false,
  //       },
  //     }));
  //   }
  // }, [listingobject.Availability.Dinein, listingobject.Availability.Delivery, listingobject.Availability.pickup]);

  return (
    <div className="table-container menumain ">
      <div className="tableone ">

      



        <table>
          <thead>
            <tr className="headerrow">
              <th className="itemimage">Image</th>
              <th className="itemname">Item name</th>
              <th className="itemcode">
                <span>Code</span>
                <button onClick={() => setshowheadinglist(true)}>+</button>
              </th>
            </tr>
          </thead>
          <tbody   ref={firstTableBodyRef}
          className="table-body"
          onScroll={() => handleScroll('first')}>
            <tr>
              <th className="itemheading" colSpan={3}>
                <img src={dots} alt="" />
                Steamed-Veg(6)
              </th>
            </tr>
            <tr>
              <tr className="secondrow">
                {items.map((item, index) => (
                  <>
                    <tr key={index}     className={`itemdetails ${selecteddragIndex === index ? 'selected' : ''}`}>
                      <td className="itemimage2">
                        {" "}
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
                  </>
                ))}
              </tr>
            </tr>
            <div className="steamednonveg">
              <tr>
                <th className="itemheading" colSpan={3}>
                  <img src={dots} alt="" />
                  Steamed-NonVeg(6)
                </th>
              </tr>
              <tr className="secondrow">
                {items.map((item, index) => (
                  <>
                    <tr key={index} className="itemdetails">
                      <td className="itemimage2">
                        {" "}
                        <img
                          src={dots}
                          alt=""
                          draggable
                          onDragStart={() => handleRowDragStart(index)}
                          onDragOver={() => handleRowDragOver(index)}
                          onDragEnd={handleRowDragEnd}
                        />
                         <img src={apple} alt="" />
                         
                      </td>
                      <td className="itemname2">{item.name}</td>
                      <td className="itemcode2">{item.code}</td>
                    </tr>
                  </>
                ))}
              </tr>
            </div>
          </tbody>


        </table>



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
                      <img src={dollaricon} alt="" className="dollaricon" />{" "}
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
                      <img src={togglebtn} alt="" className="toggleicon" />
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
      </div>

      <div className="tabletwo ">



        <div className="secondtablename">
        <table >



          <thead>
            <tr className="headingonesection">
              {firstRowTable.map(
                (header, index) =>
                  listingobject[header.label] && (
                    <th
                      key={index}
                      draggable
                      onDragStart={() => handleDragStart(index)}
                      onDragOver={() => handleDragOver(index)}
                      onDragEnd={handleDragEnd}
                      colSpan={secondRowTable[index].length}
                      className={header.label.substring(
                        0,
                        header.label.length - 1
                      )}
                    >
                      <span className="dots">
                        <img src={dots} alt="" />
                      </span>{" "}
                      {header.label !== "Inventory1" &&
                        header.label !== "Customize1" && (
                          <span className="dollar">
                            <img src={dollar} alt="" />
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
                        <img src={removeicon} alt=""  onClick={()=>setlistingobject({...listingobject,[header.label]:false})}/>
                      </span>
                    </th>
                  )
              )}
            </tr>
            <tr className="headingtwosection">
              {secondRowTable.map(
                (subheaders, index) =>
                  listingobject[classNames[index].replace(/-class/g, "")] && (
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
          </thead>
          
          <tbody  ref={secondTableBodyRef}
          className="table-body"
          onScroll={() => handleScroll('second')}>
           

            <div className="bodydata">
              <tr className="tabletwobody">
                {bodyData.map((rowData, rowIndex) => (
                  <tr className="tabletwobodyrow" key={rowIndex}>
                    <div className="eachobject">
                      {Object.entries(rowData || {}).map(
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
                                    {item}
                                  </td>
                                ))}
                              </div>
                            );
                          }
                          return null;
                        }
                      )}
                    </div>
                  </tr>
                ))}
              </tr>
              <div className="steamednonveg">
                <tr>
                  <th className="itemheading2" colSpan={3}>
                    {/* <img src={dots} alt="" />
                    Steamed-NonVeg(6) */}
                  </th>
                </tr>

                <tr className="tabletwobody2">
                  {bodyData.map((rowData, rowIndex) => (
                    <tr
                      className="tabletwobodyrow2"
                      key={rowIndex}
                      // draggable
                      // onDragStart={() => handleRowDragStart(rowIndex)}
                      // onDragOver={() => handleRowDragOver(rowIndex)}
                      // onDragEnd={handleRowDragEnd}
                    >
                      <div className="eachobject">
                        {Object.entries(rowData || {}).map(
                          ([key, cellData], cellIndex) => {
                            const className = classNamesinner[cellIndex];
                            const items = listingobject[className];

                            // Render only if items are present and cellData is an array

                            if (items && Array.isArray(cellData)) {
                              return (
                                <div className={className} key={cellIndex}>
                                  {cellData.map((item, itemIndex) => (
                                    <td
                                      key={`${cellIndex}-${itemIndex}`}
                                      className=""
                                    >
                                      {item}
                                    </td>
                                  ))}
                                </div>
                              );
                            }
                            return null; // Do not render anything if items are not present
                          }
                        )}
                      </div>
                    </tr>
                  ))}
                </tr>
              </div>
            </div>
          </tbody>
        </table>
        </div>
      </div>

      {/* <table>
        <thead>
            <tr>
                <th>name</th>
               
            </tr>
        </thead>
        <tbody>
       
            {
                firstTableData.map((item,index)=>(
                    <tr  draggable
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, index)}>
                    <td key={index}>{item.name}</td>
                    </tr>

                ))
            }
        </tbody>

    </table> */}
      {/* <table>
        <thead>
            <tr>
                <th>age</th>
                <th>address</th>
                
            </tr>
        </thead>
        <tbody>
       
            {
                firstTableData.map((item,index)=>(
                    <tr key={index} draggable
                    onDragStart={(e) => onDragStart(e, index)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => onDrop(e, index)}>
                     <td >{item.age}</td>
                     <td> {item.address}</td>
                   
                     </tr>
                )

                )
            }
        </tbody>

    </table> */}
    </div>
  );
};
