import React, { useState } from "react";
import "./Menulisting.scss";
import { tr } from "date-fns/locale";
import dots from '../../assets/images/dots.png'
import dollar from '../../assets/images/dollar.png'
export const Menulisting = () => {
  const items = [
    {
      id: 1,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 2,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 3,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 4,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 5,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
    {
      id: 6,
      name: "Creamy Mushroom",
      code: "12345",
      prices: [100, 100, 100, 100, 100, 100, 100, 100],
    },
  ];
  const listingobject = {
    Pricing: {
      show: true,
      Dinein: true,
      pickup: true,
      Delivery: true,
    },
    Availability: {
      show: true,
      Dinein: true,
      pickup: true,
      Delivery: true,
    },
    Inventory: false,
    Customization: false,
  };
  const [firstTableData, setFirstTableData] = useState([
    { id: 1, name: "John", age: 25, address: " Street" },
    { id: 2, name: "Doe", age: 30, address: " Avenue" },
  ]);

  const [secondTableData, setSecondTableData] = useState([
    { id: 1, age: 25, address: " Street" },
    { id: 2, age: 30, address: " Avenue" },
  ]);
  const onDrop = (e, index) => {
    const draggedIndex = parseInt(e.dataTransfer.getData("index"), 10);
    console.log(draggedIndex);
    if (draggedIndex !== index) {
      const newModifications1 = [...firstTableData];
      const newModifications2 = [...secondTableData];

      const [draggedItem] = newModifications1.splice(draggedIndex, 1);
      const [draggedItem2] = newModifications2.splice(draggedIndex, 1);

      newModifications1.splice(index, 0, draggedItem);
      newModifications2.splice(index, 0, draggedItem2);
      setFirstTableData(newModifications1);
      setSecondTableData(newModifications2);
    }
  };
  const onDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  return (
    <div className="table-container menumain ">
      <table className="tableone">
        <thead>
          <tr className="headerrow">
            <th className="itemimage">Image</th>
            <th className="itemname">Item name</th>
            <th className="itemcode">
              <span>Code</span>
              <button>+</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="itemheading" colSpan={3}>Steamed-Veg(6)</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="itemimage">{item.id}</td>
              <td className="itemname">{item.name}</td>
              <td className="itemcode">{item.code}</td>
            </tr>
          ))}
          <tr>
            <th className="itemheading" colSpan={3}>Steamed-Veg(6)</th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="itemimage">{item.id}</td>
              <td className="itemname">{item.name}</td>
              <td className="itemcode">{item.code}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tabletwo">
      <table >
        <thead>
          <tr className="headingonesection">
            <th colSpan={2} className="dinein1"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="dineintext">Dine in </span></th>
            <th colSpan={3} className="pickup1"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="pickuptext">Pickup</span></th>
            <th colSpan={3} className="delivery1"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="deliverytext">Delivery</span></th>
            <th colSpan={2} className="dinein2"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="dineintext">Dine in </span></th>
            <th colSpan={3} className="pickup2"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="pickuptext">Pickup</span></th>
            <th colSpan={3} className="delivery2"><span className="dots"><img src={dots} alt="" /></span> <span className="dollar"><img src={dollar} alt="" /></span><span className="deliverytext"> Delivery</span></th>
          </tr>
          <tr className="headingtwosection">
            <th>AC</th>
            <th>Non Ac</th>
            <th>In house</th>
            <th>Swiggy</th>
            <th>Zomato</th>
            <th>In house</th>
            <th>Swiggy</th>
            <th>Zomato</th>
            <th>AC</th>
            <th>Non Ac</th>
            <th>In house</th>
            <th>Swiggy</th>
            <th>Zomato</th>
            <th>In house</th>
            <th>Swiggy</th>
            <th>Zomato</th>
          </tr>
        </thead>
        <tbody>
        

        </tbody>
      </table>
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
