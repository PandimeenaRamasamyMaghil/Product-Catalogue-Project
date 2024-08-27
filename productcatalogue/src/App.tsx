import Landing from './Pages/Landingpage'
import React from 'react';
function App() {
  return (
 
    <>
 
<Landing/>
{/* <Dragging/> */}
 
</>
  );
}
 
export default App;
 
// const [secondRowTable, setSecondRowTable] = useState([
//   ["Ac", "Nonac"],
//   ["Inhouse", "Swiggy", "Zomato"],
//   ["Inhouse", "Swiggy", "Zomato"],
//   ["Ac", "Nonac"],
//   ["Inhouse", "Swiggy", "Zomato"],
//   ["Inhouse", "Swiggy", "Zomato"],
//   ["Total", "Threshold"],
//   [""],
// ]);
 

// import React, { useState, useRef, useEffect,useContext } from 'react';
// import dots from "./assets/images/dots.svg";
// import apple from "./assets/images/ingredientimages/fish.svg";
// import { Contextpagejs } from './Components/contextpage'
// import dollar from "./assets/images/dollar.svg";
// import removeicon from "./assets/images/removeicon.svg";

// import Toggle from "./Components/Slider/Slider";
// // import Header from "../Item Customizations/MainLandingPage/Header/Header";
// import closeicon from "./assets/images/closeicon.svg";
// import toggleround from "./assets/images/toggleround.svg";
// import dollaricon from "./assets/images/dollaricon.svg";
// import togglebtns from "./assets/images/togglebtn.svg";
// import Slider from "./Components/Slider/Slider"
// import "./App.scss";

// const App = () => {
  
//   const{active, setActive}=useContext(Contextpagejs)


//   const{isExpanded,setIsExpanded}=useContext(Contextpagejs)
//   const [togglebtn, settogglebtn] = useState(false);
//   const [draggedIndexsample, setDraggedIndexsample] = useState(null);
//   const containerReff = useRef(null);
//   const firstTableBodyRef = useRef(null);
//   const secondTableBodyRef = useRef(null);
//   const [hovertext, sethovertext] = useState({
//     index: null,
//     name: null,
//   });
//   const [draggedRowIndex, setDraggedRowIndex] = useState({
//     objectId: null,
//     index: null,
//   });
//   const [draggingOverIndex, setDraggingOverIndex] = useState(null);
//   const [modal,setmodal]=useState(false);
// const containerRef = useRef(null);

// const [showheadinglist, setshowheadinglist] = useState(false);
//   const [classNames, setclassNames] = useState([
//     "Dinein1-class",
//     "Pickup1-class",
//     "Delivery1-class",
//     "Dinein2-class",
//     "Pickup2-class",
//     "Delivery2-class",
//     "Inventory1-class",
//     "Customize1-class",
//   ]);
//   const [classNamesinner, setclassNamesinner] = useState([
//     "Dinein1",
//     "Pickup1",
//     "Delivery1",
//     "Dinein2",
//     "Pickup2",
//     "Delivery2",
//     "Inventory1",
//     "Customize1",
//   ]);
//   const [listingobject, setlistingobject] = useState({
//     showPricing: true,
//     Dinein1: true,
//     Pickup1: true,
//     Delivery1: true,
//     showavail: true,
//     Dinein2: true,
//     Pickup2: true,
//     Delivery2: true,
//     Inventory1: true,
//     Customize1: true,
//   });

//   const insertlists = {
//     Pricing: {
//       show: "Pricing",
//       dinein: "Dine-in",
//       pickup: "Pickup",
//       Delivery: "Delivery",
//     },
//     Available: {
//       show: "Available",
//       dinein: "Dine-in",
//       pickup: "Pickup",
//       Delivery: "Delivery",
//     },
//     Inventory: "Inventory",
//     Customization: "Customization",
//   };






//   const [firstRowTable, setFirstRowTable] = useState([
//     { label: "Dinein1" },
//     { label: "Pickup1" },
//     { label: "Delivery1" },
//     { label: "Dinein2" },
//     { label: "Pickup2" },
//     { label: "Delivery2" },
//     { label: "Inventory1" },
//     { label: "Customize1" },
//   ]);

//   const [secondRowTable, setSecondRowTable] = useState([
//     ["Ac", "Nonac"],
//     ["Inhouse", "Swiggy", "Zomato"], 
//     ["Inhouse", "Swiggy", "Zomato"], 
//     ["Ac", "Nonac"], 
//     ["Inhouse", "Swiggy", "Zomato"], 
//     ["Inhouse", "Swiggy", "Zomato"], 
//     ["Total", "Threshold"], 
//     [""],
//   ]);



//   const truncateString = (str, length) => {
//     return str.length > length ? str.substring(0, length) : str;
//   };


//   const [items, setitems] = useState([
//     {
//       id: 1,
//       name: truncateString("dosa", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$100", "$100"],
//         Pickup1: ["$200", "$200", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Disabled", "Disabled"],
//         Delivery2: ["Enabled", "Enabled", "Disabled"],
//         Inventory1: ["$100", "$10"],
//         Customize1: ["5"],
//       },
//     },

//     {
//       id: 3,
//       name: truncateString(" Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 4,
//       name: truncateString("Creamy", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 5,
//       name: truncateString("idly Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 1,
//       name: truncateString("dosa", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$100", "$100"],
//         Pickup1: ["$200", "$200", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Disabled", "Disabled"],
//         Delivery2: ["Enabled", "Enabled", "Disabled"],
//         Inventory1: ["$100", "$10"],
//         Customize1: ["5"],
//       },
//     },

//     {
//       id: 3,
//       name: truncateString(" Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 4,
//       name: truncateString("Creamy", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 5,
//       name: truncateString("idly Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 1,
//       name: truncateString("dosa", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$100", "$100"],
//         Pickup1: ["$200", "$200", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Disabled", "Disabled"],
//         Delivery2: ["Enabled", "Enabled", "Disabled"],
//         Inventory1: ["$100", "$10"],
//         Customize1: ["5"],
//       },
//     },

//     {
//       id: 3,
//       name: truncateString(" Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 4,
//       name: truncateString("Creamy", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 5,
//       name: truncateString("idly Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 2,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
    
    
//   ]);
//   const [itemsfood, setitemsfood] = useState([
//     {
//       id: 11,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$900", "$100"],
//         Pickup1: ["$200", "$200", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$100", "$10"],
//         Customize1: ["5"],
//       },
//     },

//     {
//       id: 31,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 41,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 51,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$400", "$600"],
//         Pickup1: ["$700", "$700", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1000", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 21,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//     {
//       id: 21,
//       name: truncateString("Creamy Mushroo", 14),
//       code: "12345",
//       pricingdetails: {
//         Dinein1: ["$1500", "$900"],
//         Pickup1: ["$200", "$400", "$200"],
//         Delivery1: ["$300", "$300", "$300"],
//         Dinein2: ["Enabled", "Enabled"],
//         Pickup2: ["Enabled", "Enabled", "Enabled"],
//         Delivery2: ["Enabled", "Enabled", "Enabled"],
//         Inventory1: ["$1200", "$10"],
//         Customize1: ["5"],
//       },
//     },
//   ]);


//   const [nooftypes, setnooftypes] = useState([
//     {
//       id: 1,
//       name: items,
//     },
//     {
//       id: 2,
//       name: itemsfood,
//     },
//   ]);






//   const [isDragging, setIsDragging] = useState(false);
//   const tableBodyRef1 = useRef(null);
//   const tableBodyRef2 = useRef(null);

//   // This function will be used to handle the scroll when dragging
//   const handleScrollWhileDragging = (e) => {
//     if (!isDragging) return;

//     const container = tableBodyRef1.current;
//     const container2 = tableBodyRef2.current;

//     const containerRect = container.getBoundingClientRect();
    
//     const containerRect2 = container2.getBoundingClientRect();


//     const mouseY = e.clientY;
//     const scrollSpeed = 10; // Adjust the scroll speed as needed

//     if (mouseY < containerRect.top + 50) {
//       container.scrollTop -= scrollSpeed;
//       container2.scrollTop-=scrollSpeed

//     } else if (mouseY > containerRect.bottom - 50) {
//       container.scrollTop += scrollSpeed;
//       container2.scrollTop+=scrollSpeed
//     }
//   };

//   // Trigger dragging
//   const handleDragStart = () => {
//     setIsDragging(true);
//   };

//   const handleDragEnd = () => {
//     setIsDragging(false);
//   };

//   useEffect(() => {
//     if (isDragging) {
//       window.addEventListener('mousemove', handleScrollWhileDragging);
//     } else {
//       window.removeEventListener('mousemove', handleScrollWhileDragging);
//     }

//     return () => {
//       window.removeEventListener('mousemove', handleScrollWhileDragging);
//     };
//   }, [isDragging]);

//   const handleScroll = (source) => {
//     const firstTableBody = firstTableBodyRef.current;
//     const secondTableBody = secondTableBodyRef.current;

//     if (source === "first") {
//       secondTableBody.scrollTop = firstTableBody.scrollTop;
//     } else if (source === "second") {
//       firstTableBody.scrollTop = secondTableBody.scrollTop;
//     }
//   };


//   const handledragvegnonvegdragstart = (e, index) => {
//     setDraggedRowIndex(index);
//   };
//   const handledragvegnonvegdropover = (e) => {
//     e.preventDefault();
//   };

//   const handledragvegnonvegdropend = (e, index) => {
//     e.preventDefault();
//     const updatedRows = [...nooftypes];
//     const draggedRow = updatedRows[draggedRowIndex];
//     updatedRows.splice(draggedRowIndex, 1);
//     updatedRows.splice(index, 0, draggedRow);
//     setnooftypes(updatedRows);
//     console.log("nooftypes", nooftypes);
//     setDraggedRowIndex(null); 
//   };
 

//   const handleColumnwiseDragStart = (index) => {
//     setDraggedIndexsample(index);
//   };
//   const handleColumnwiseDragOver = (index) => {
//     if (draggedIndexsample !== index) {
//       const updatedFirstRowTable = [...firstRowTable];
//       const updatedSecondRowTable = [...secondRowTable];
//       const updatedclassnames = [...classNames];
//       const updatedclassinnerdatanames = [...classNamesinner];
//       const updatedItems = [...nooftypes];
//       const item1 = updatedItems[0].name || []; 
//       const item2 = updatedItems[1].name || []; 
//       const draggedItem = updatedFirstRowTable[draggedIndexsample];
//       const draggedSubheader = updatedSecondRowTable[draggedIndexsample];
//       const draggedclassname = updatedclassnames[draggedIndexsample];
//       const draggedclassinnerdata =
//       updatedclassinnerdatanames[draggedIndexsample];
//       updatedFirstRowTable.splice(draggedIndexsample, 1);
//       updatedFirstRowTable.splice(index, 0, draggedItem);
//       updatedSecondRowTable.splice(draggedIndexsample, 1);
//       updatedSecondRowTable.splice(index, 0, draggedSubheader);
//       updatedclassnames.splice(draggedIndexsample, 1);
//       updatedclassnames.splice(index, 0, draggedclassname);
//       updatedclassinnerdatanames.splice(draggedIndexsample, 1);
//       updatedclassinnerdatanames.splice(index, 0, draggedclassinnerdata);
//       const updatePricingDetails = (itemsArray, index) => {
//         return itemsArray.map((item) => {
//           if (item && item.pricingdetails) {
//             const reorderedPricingDetails = { ...item.pricingdetails };
//             const reorderedKeys = Object.keys(reorderedPricingDetails);

//             const draggedKey = reorderedKeys.splice(draggedIndexsample, 1)[0];
//             reorderedKeys.splice(index, 0, draggedKey);

//             const updatedPricingDetails = {};
//             reorderedKeys.forEach((key) => {
//               updatedPricingDetails[key] = reorderedPricingDetails[key];
//             });

//             return {
//               ...item,
//               pricingdetails: updatedPricingDetails,
//             };
//           }
//           return { ...item }; 
//         });
//       };
//       const updatednooftypes = updatePricingDetails(item1, index);
//       const updatednooftypes1 = updatePricingDetails(item2, index);
//       setFirstRowTable(updatedFirstRowTable);
//       setSecondRowTable(updatedSecondRowTable);
//       setclassNames(updatedclassnames);
//       setclassNamesinner(updatedclassinnerdatanames);
//       setnooftypes([
//         { ...updatedItems[0], name: updatednooftypes },
//         { ...updatedItems[1], name: updatednooftypes1 },
//       ]);
//       setDraggedIndexsample(index);
//     }
//   };
//   const handleColumnwiseDragEnd = () => {
//     setDraggedIndexsample(null);
//   };



//   const handleRowDragStart = (objectId, index) => {
//     setDraggedRowIndex({ objectId, index });
   

//   };
 
 
//   const handleRowDragOver = (objectId, index) => {
    
   
//     if (draggedRowIndex.objectId === null || draggedRowIndex.index === null) { 
//       return;
//     }
//     const draggedObjectId = draggedRowIndex.objectId;
//     const draggedIndex = draggedRowIndex.index;
//     if (draggedObjectId === objectId && draggedIndex !== index) {
//       setDraggingOverIndex(index);
//       const updatedTypes = [...nooftypes];
//       const currentObject = updatedTypes.find((item) => item.id === objectId);
//       const indexofvalue = nooftypes.findIndex(item => item.id === objectId);
//       if (currentObject) {
//         // const updatedItems = [...currentObject.name];
//         // const draggedItem = updatedItems[draggedIndex];
//         // console.log(currentObject)

//         // // Remove dragged item and insert it at the new position
//         // updatedItems.splice(draggedIndex, 1);
//         // updatedItems.splice(index, 0, draggedItem);

//         // // Update the object in nooftypes
//         // currentObject.name = updatedItems;

//         // // Update state
//         const updatednooftypes=[...nooftypes[indexofvalue].name]
//         const draggingitme=updatednooftypes[draggedIndex];
//         updatednooftypes.splice(draggedIndex,1);
//         updatednooftypes.splice(index,0,draggingitme)
//         console.log("indexofvalue",updatednooftypes)
//         updatedTypes[indexofvalue].name=updatednooftypes;
//         setnooftypes(updatedTypes);
//         setDraggedRowIndex({ objectId, index });
//       }
//     }
//   };
//   const handleRowDragEnd = () => {
//     setDraggedRowIndex({ objectId: null, index: null });
//     setDraggingOverIndex(null);
//   };
  
//   const handlemodal=()=>
//     {
//         setmodal(true);
//     }
  
//  const showsidebar=(key)=>{

//   if(key==="Dinein1"||key==="Pickup1"||key==="Delivery1")
//   {
//     handlemodal();
//     setActive("Availability");
//   }

//  }
  
 

//   useEffect(() => {
//     if (
//       !listingobject.Dinein1 &&
//       !listingobject.Pickup1 &&
//       !listingobject.Delivery1
//     ) {
//       setlistingobject({ ...listingobject, showPricing: false });
//     }
//     if (
//       listingobject.Dinein1 ||
//       listingobject.Pickup1 ||
//       listingobject.Delivery1
//     ) {
//       setlistingobject({ ...listingobject, showPricing: true });
//     }
//   }, [listingobject.Dinein1, listingobject.Pickup1, listingobject.Delivery1]);

//   useEffect(() => {
//     if (
//       !listingobject.Dinein2 &&
//       !listingobject.Pickup2 &&
//       !listingobject.Delivery2
//     ) {
//       setlistingobject({ ...listingobject, showavail: false });
//     }
//     if (
//       listingobject.Dinein2 ||
//       listingobject.Pickup2 ||
//       listingobject.Delivery2
//     ) {
//       setlistingobject({ ...listingobject, showavail: true });
//     }
//   }, [listingobject.Dinein2, listingobject.Pickup2, listingobject.Delivery2]);
//   useEffect(() => {
//     const syncScroll = () => {
//       tableBodyRef2.current.scrollTop = tableBodyRef1.current.scrollTop;
//     };
  
//     const table1 = tableBodyRef1.current;
//     const table2 = tableBodyRef2.current;
  
//     table1.addEventListener('scroll', syncScroll);
//     table2.addEventListener('scroll', syncScroll);
  
//     return () => {
//       table1.removeEventListener('scroll', syncScroll);
//       table2.removeEventListener('scroll', syncScroll);
//     };
//   }, []);
  
//   const handleDragScroll = (e, tableRef1, tableRef2) => {
//     const table1 = tableRef1.current;
//     const table2 = tableRef2.current;
  
//     const offset = 100;
  
//     if (e.clientY < 100) {
//       table1.scrollTop -= offset;
//       table2.scrollTop -= offset;
//     }
  
//     if (e.clientY > window.innerHeight - 100) {
//       table1.scrollTop += offset;
//       table2.scrollTop += offset;
//     }
//   };
  

 

//   return (

//     <div className="mainlistpage">

//     <div className="firsttable">

// <table>
// <thead>
//               <div className="firsttableheading">
//                 <tr className="headerrow">
//                   <th className="itemimage">Image</th>
//                   <th className="itemname">Item name</th>
//                   <th className="itemcode">
//                     <p>Code   
//                       <button
//                         onClick={() => setshowheadinglist(true)}
//                         className="span">
//                         <span> +</span>
//                       </button>
//                     </p>
//                   </th>
//                 </tr>
//               </div>
//             </thead>
 


//     <tbody >
//       <div
//         ref={tableBodyRef1}
//         className="table-body"
      
//       >
//         <tr>
//           {nooftypes.map((object, index) => (
//             <div key={object.id}>
//               <div className="firsttablebody">
//                 {object.id === 1 && (
//                   <div
//                     className={`${index === 0 ? "itemheading" : "itemheadingtwo"}`}
//                   >
//                     <img
//                       src={dots}
//                       alt=""
//                       draggable
//                       onDragStart={(e) => {
//                         handledragvegnonvegdragstart(e, index);
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)
//                       }}
//                       onDragOver={(e)=>{handledragvegnonvegdropover()
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)

//                       }}
//                       onDrop={(e) => {
//                         handledragvegnonvegdropend(e, index);
                       
//                       }}
//                     />
//                     Steamed-Veg(6)
//                   </div>
//                 )}
//                 {object.id === 2 && (
//                   <div
//                     className={`${index === 1 ? "itemheadingtwo" : "itemheading"}`}
//                   >
//                     <img
//                       src={dots}
//                       alt=""
//                       draggable
//                       onDragStart={(e) => {
//                         handledragvegnonvegdragstart(e, index);
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)
//                       }}
//                       onDragOver={(e)=>{handledragvegnonvegdropover()
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)

//                       }}
//                       onDrop={(e) => {
//                         handledragvegnonvegdropend(e, index);
                      
//                       }}
//                     />
//                     Steamed-NonVeg(6)
//                   </div>
//                 )}
//                 {object.name.map((item, itemIndex) => (
//                   <React.Fragment key={itemIndex}>
//                     {draggingOverIndex === itemIndex && (
//                       <tr className="placeholderplace"></tr>
//                     )}
//                     <tr
//                       draggable
//                       onDragStart={(e) => {
//                         handleRowDragStart(object.id, itemIndex);
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)
//                       }}
//                       onDragOver={(e) =>{ handleRowDragOver(object.id, itemIndex)
//                         handleDragScroll(e, tableBodyRef1, tableBodyRef2)

//                       }}
//                       onDragEnd={(e) => {
//                         handleRowDragEnd();
                       
//                       }}
//                       className={`itemdetails ${
//                         draggedRowIndex?.index === itemIndex ? "selected" : ""
//                       }`}
//                     >
//                       <td className="itemimage2">
//                         <img src={dots} alt="" className="draggableimg" />
//                         <img src={apple} alt="" className="foodimage" />
//                       </td>
//                       <td className="itemname2" onClick={handlemodal}>
//                         {item.name}
//                       </td>
//                       <td className="itemcode2">{item.code}</td>
//                     </tr>
//                   </React.Fragment>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </tr>
//       </div>
//     </tbody>
    
//     </table>
//     </div>





    



//     <div className="firsttable">

// <table>
// <thead>
//               <div className="firsttableheading">
//                 <tr className="headerrow">
//                   <th className="itemimage">Image</th>
//                   <th className="itemname">Item name</th>
//                   <th className="itemcode">
//                     <p>Code   
//                       <button
//                         onClick={() => setshowheadinglist(true)}
//                         className="span">
//                         <span> +</span>
//                       </button>
//                     </p>
//                   </th>
//                 </tr>
//               </div>
//             </thead>
 


//     <tbody >
//       <div
//         ref={tableBodyRef2}
//         className="table-body"
      
//       >
//         <tr>
//         {nooftypes.map((itemobject, indexvalue) => {
//                     return (
//                       <div>
//                         {indexvalue === 1 && (
//                           <div className="itemheading2">
//                             {/* <img src={dots} alt="" /> */}
//                             {/* Steamed-Veg(6) */}
//                           </div>
//                         )}
                        
                       

//                         {itemobject.name.map((item, index) => (
//                           <React.Fragment key={index}>
//                              {/* {draggingOverIndex === index && (
//                               <tr className="placeholderplace" style={{backgroundColor:'red'}}></tr>
//                             )} */}
                             
//                             <tr
//                               className={`tabletwobodyrow   ${itemobject.id===1  && indexvalue===0 && index===0?"borderforrow1":"borderforrow2"} ${
//                                 draggingOverIndex === index ? "selected" : ""
//                               }   ${itemobject.id===2 && indexvalue===0 && index==0 ? "secondpartborder":'secondpartborder1' }  ${itemobject.id===1 && index==1 ? "firstpartborder":'firstpartborder1' }`}
//                             >
//                               <td className="eachobject">
//                                 {Object.entries(item.pricingdetails || {}).map(
//                                   ([key, cellData], cellIndex) => {
//                                     const className =
//                                       classNamesinner[cellIndex];
//                                     const items = listingobject[className];
                                    
                                    

//                                     if (items && Array.isArray(cellData)) {
//                                       return (
//                                         <div
//                                           className={className}
//                                           key={cellIndex}
//                                         >
//                                           {cellData.map((item, itemIndex) =>
//                                           {
                                            

//                                             return(<td
//                                               key={`${cellIndex}-${itemIndex}`}
//                                               className=""
//                                             >
//                                               {item === "Enabled" ||
//                                               item === "Disabled" ? (
//                                                 <Toggle
//                                                   toggle={togglebtn}
//                                                   setToggle={settogglebtn}
//                                                   togglevalue={item==="Enabled"?1:0}
//                                                 />
//                                               ) : (
//                                                 <span onClick={()=>showsidebar(key)}>{item}</span>
//                                               )}
//                                             </td>);
//                                           }
                                          
                                          
//                                         )}
//                                         </div>
//                                       );
//                                     }
//                                     return null;
//                                   }
//                                 )}
//                               </td>
//                             </tr>
//                           </React.Fragment>
//                         ))}
//                       </div>
//                     );
//                   })}
//         </tr>
//       </div>
//     </tbody>
    
//     </table>
//     </div>







//     </div>
//   );
// };

// export default App;
