// import React, { useState } from "react";

// const Menupage = () => {
//   const [firstRowTable, setFirstRowTable] = useState([
//     { label: "Dinein" },
//     { label: "Pickup" },
//     { label: "Delivery" },
//     { label: "Dinein" },
//     { label: "Pickup" },
//     { label: "Delivery" },
//     { label: "Inventory" },
//     { label: "Customize" }
//   ]);

//   const [secondRowTable, setSecondRowTable] = useState([
//     ["Ac", "Nonac"], // Subheaders for Dinein
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
//     ["Ac", "Nonac"], // Subheaders for another Dinein
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Pickup
//     ["Inhouse", "Swiggy", "Zomato"], // Subheaders for Delivery
//     ["Total", "Threshold"], // Subheaders for Inventory
//     ["Customize"] // Subheaders for Customize
//   ]);

//   const [bodyData, setBodyData] = useState([
//     {
//       dinein1: ["Ac1", "Ac2"],
//       pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
//       dinein2: ["Ac1", "Ac2"],
//       pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
//       inventory: ["Total1", "Threshold1"],
//       customize: ["Customize1"]
//     },
//     {
//       dinein1: ["Bc1", "Bc2"],
//       pickup1: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery1: ["Inhouse2", "Swiggy2", "Zomato2"],
//       dinein2: ["Ac1", "Ac2"],
//       pickup2: ["Inhouse1", "Swiggy1", "Zomato1"],
//       delivery2: ["Inhouse2", "Swiggy2", "Zomato2"],
//       inventory: ["Total1", "Threshold1"],
//       customize: ["Customize1"]
//     },
//     // Add more data as needed
//   ]);

//   const [draggedIndexsample, setDraggedIndexsample] = useState(null);
//   const [draggedRowIndex, setDraggedRowIndex] = useState(null);

//   const handleDragStart = (index) => {
//     setDraggedIndexsample(index);
//   };

//   const handleDragOver = (index) => {
//     if (draggedIndexsample !== index) {
//       const updatedFirstRowTable = [...firstRowTable];
//       const updatedSecondRowTable = [...secondRowTable];

//       const draggedItem = updatedFirstRowTable[draggedIndexsample];
//       const draggedSubheader = updatedSecondRowTable[draggedIndexsample];

//       updatedFirstRowTable.splice(draggedIndexsample, 1);
//       updatedFirstRowTable.splice(index, 0, draggedItem);

//       updatedSecondRowTable.splice(draggedIndexsample, 1);
//       updatedSecondRowTable.splice(index, 0, draggedSubheader);

//       // Update body data according to header drag
//       const updatedBodyData = bodyData.map(row => {
//         // Ensure row is a valid object
//         if (row && typeof row === 'object') {
//           const reorderedRow = Object.values(row);
//           const draggedCell = reorderedRow.splice(draggedIndexsample, 1)[0];
//           reorderedRow.splice(index, 0, draggedCell);

//           // Preserve the original object keys
//           return reorderedRow.reduce((acc, val, i) => {
//             const key = Object.keys(row)[i];
//             acc[key] = val;
//             return acc;
//           }, {});
//         }
//         return row; // Return row as is if it's not a valid object
//       });

//       setFirstRowTable(updatedFirstRowTable);
//       setSecondRowTable(updatedSecondRowTable);
//       setBodyData(updatedBodyData);
//       setDraggedIndex(index);
//     }
//   };

//   const handleDragEnd = () => {
//     setDraggedIndex(null);
//   };

//   const handleRowDragStart = (index) => {
//     setDraggedRowIndex(index);
//   };

//   const handleRowDragOver = (index) => {
//     if (draggedRowIndex !== index) {
//       const updatedBodyData = [...bodyData];
//       const draggedRow = updatedBodyData[draggedRowIndex];

//       updatedBodyData.splice(draggedRowIndex, 1);
//       updatedBodyData.splice(index, 0, draggedRow);

//       setBodyData(updatedBodyData);
//       setDraggedRowIndex(index);
//     }
//   };

//   const handleRowDragEnd = () => {
//     setDraggedRowIndex(null);
//   };

//   return (
//     <table>
//       <thead>
//         <tr>
//           {firstRowTable.map((header, index) => (
//             <th
//               key={index}
//               draggable
//               onDragStart={() => handleDragStart(index)}
//               onDragOver={() => handleDragOver(index)}
//               onDragEnd={handleDragEnd}
//               colSpan={secondRowTable[index].length}
//             >
//               {header.label}
//             </th>
//           ))}
//         </tr>
//         <tr>
//           {secondRowTable.flat().map((subheader, subIndex) => (
//             <td key={subIndex}>{subheader}</td>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {bodyData.map((rowData, rowIndex) => (
//           <tr
//             key={rowIndex}
//             draggable
//             onDragStart={() => handleRowDragStart(rowIndex)}
//             onDragOver={() => handleRowDragOver(rowIndex)}
//             onDragEnd={handleRowDragEnd}
//           >
//             {Object.values(rowData || {}).flat().map((cellData, cellIndex) => (
//               <td key={cellIndex}>{cellData}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default Menupage;