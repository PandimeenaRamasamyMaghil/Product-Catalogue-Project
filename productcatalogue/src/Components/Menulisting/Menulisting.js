import React, { useState } from "react";
import "./Menulisting.scss";
import { tr } from "date-fns/locale";
import dots from "../../assets/images/dots.svg";
import dollar from "../../assets/images/dollar.svg";
import removeicon from "../../assets/images/removeicon.svg";
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
  const price = [
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },
      customize:"5"
    },
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },

      customize:"5"
    },
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },
      customize:"5"
    },
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },
      customize:"5"
    },
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },
      customize:"5"
    },
    {
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
      inventory:{
        total:"1000",
        threshold:"100"
      },
      customize:"5"
    },
    // Add more objects here for additional rows if needed
  ];

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
            <th className="itemheading" colSpan={3}>
              Steamed-Veg(6)
            </th>
          </tr>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="itemimage">{item.id}</td>
              <td className="itemname">{item.name}</td>
              <td className="itemcode">{item.code}</td>
            </tr>
          ))}
          <tr>
            <th className="itemheading" colSpan={3}>
              Steamed-Veg(6)
            </th>
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
        <table>
          <thead>
            <tr className="headingonesection">
              <th colSpan={2} className="dinein1">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="dineintext">Dine in </span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={3} className="pickup1">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="pickuptext">Pickup</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={3} className="delivery1">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="deliverytext">Delivery</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={2} className="dinein2">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="dineintext">Dine in </span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={3} className="pickup2">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="pickuptext">Pickup</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={3} className="delivery2">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
                <span className="dollar">
                  <img src={dollar} alt="" />
                </span>
                <span className="deliverytext"> Delivery</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={1} className="inventory">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
               
                <span className="deliverytext">Inventory</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
              <th colSpan={1} className="customization">
                <span className="dots">
                  <img src={dots} alt="" />
                </span>{" "}
               
                <span className="deliverytext">Customize</span>
                <span className="removeicon">
                  <img src={removeicon} alt="" />
                </span>
              </th>
            </tr>
          
          </thead>
          <tbody>
          <tr className="headingtwosection">
            <div className="dinein1div">
            <th className="secondhead dineinsubfirst1 dineinsub1 dinein1ac">AC</th>
            <th className="secondhead dineinsub1 dinein1nonac">Non Ac</th>
            </div>
            <div className="pickup1div">
            <th className="secondhead pickupsufirst1 pickupsub1  pickup1inhouse">
      Inhou...
    </th>
    <th className="secondhead  pickupsub1 pickup1swiggy">Swiggy</th>
    <th className="secondhead  pickupsub1 pickup1zomato">Zoma...</th>
            </div>
   <div className="delivery1div">
   <th className="secondhead deliverysubfirst1 deliverysub1 delivery1inhouse">
      Inhou...
    </th>
    <th className="secondhead deliverysub1 delivery1swiggy">
      Swiggy
    </th>
    <th className="secondhead deliverysub1 delivery1zomato">
      Zoma...
    </th>
   </div>
   <div className="dinein2div">
   
    <th className="secondhead dineinsubfirst2 dineinsub2 dinein2ac">AC</th>
    <th className="secondhead dineinsub2 dinein2nonac">Non Ac</th></div>
    <div className="pickup2div">
    <th className="secondhead pickupsufirst2 pickupsub2 pickup2inhouse">Inhou...</th>
    <th className="secondhead pickupsub2 pickup2swiggy">Swiggy</th>
    <th className="secondhead pickupsub2 pickup2zomato">Zomato</th>

    </div>
    <div className="delivery2div">
    <th className="secondhead deliverysubfirst2 deliverysub2 delivery2inhouse">
      InHou...
    </th>
    <th className="secondhead deliverysub2 delivery2swiggy">
      Swiggy
    </th>
    <th className="secondhead deliverysub2 delivery2zomato">
      Zoma...
    </th>
    </div>
   <div className="inventorydiv">
   <th className="secondhead inventoryfirst inventorytotal">Total</th>
   <th className="secondhead inventorythreshold">Thers...</th>
   </div>
   
    
    <th></th>
  </tr>
  <tr className="tabletwobody">
          {
  price.map((item, index) => (
    <>
    
    <tr key={index} className="tabletwobodyrow">
      <div className="dineindiv">
      <td className="dieninac">{item.dineIn.AC}</td>
      <td className="dineinnonac">{item.dineIn.nonAC}</td>
      </div>
      <div className="pickupdiv">
      <td className="pickupfirst pickupinhouse">{item.pickup.inHouse}</td>
      <td className="pickupswiggy">{item.pickup.swiggy}</td>
      <td className="pickupzomato">{item.pickup.zomato}</td>
      </div>
      <div className="deliverydiv">
      <td className="deliveryfirst deliveryinhouse">{item.delivery.inHouse}</td>
      <td className="deliveryswiggy">{item.delivery.swiggy}</td>
      <td className="deliveryzomato">{item.delivery.zomato}</td>
      
      </div>
      <div className="availabilitydineindiv">
      <td className="dieninac">{item.dineIn.AC}</td>
      <td className="dineinnonac">{item.dineIn.nonAC}</td>
      </div>
      <div className=" availabilitypickupdiv">
      <td className="pickupfirst pickupinhouse">{item.pickup.inHouse}</td>
      <td className="pickupswiggy">{item.pickup.swiggy}</td>
      <td className="pickupzomato">{item.pickup.zomato}</td>
      </div>
      <div className="availabilitydeliverydiv">
      <td className="deliveryfirst deliveryinhouse">{item.delivery.inHouse}</td>
      <td className="deliveryswiggy">{item.delivery.swiggy}</td>
      <td className="deliveryzomato">{item.delivery.zomato}</td>

      
      </div>
      <div className="inventorydivtion">
        <td className="inventorytotaldata">{item.inventory.total}</td>

        <td className="inventorythresholddata">{item.inventory.threshold}</td>

      </div>
      <div className="customizediv">
        <td className="customizedata">{item.customize}</td>
      </div>
     
    
     
    </tr>
    </>
  ))

  
  
  
}

</tr>
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
