import React, { useEffect } from "react";
import "./Filter.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Filter = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const data1 = [
    {
      mainHeading: "Meal Type",
      items: ["Breakfast", "Lunch", "Dinner", "Happy Hours"],
    },
    {
      mainHeading: "Kitchen Station",
      items: ["Main Kitchen", "Chinese Kitchen", "Juice Kitchen"],
    },
    {
      mainHeading: "Allergens content",
      items: ["Contain Allergens", "Allergens free", "Prepared allergen-free"],
    },
  ];
  
  const data2 = [
    {
      mainHeading: "Cuisine",
      items: ["South Indian", "North Indian", "Chinese", "Italian", "Japanese"],
    },
    {
      mainHeading: "Dietary",
      items: ["Vegan Food", "Jain Food", "Halal Food", "Veg Food"],
    },
    {
      mainHeading: "Unavailable items",
      items: ["Popular items", "Special available", "Hidden"],
    },
  ];
  

  
  const allData = [data1, data2, ];
  

  



  return (
    <div className="Filter-Container " data-aos="fade-left">
      <div className="Filter-Heading-container">
        <h3 className="Filter-Heading-org">Filter</h3>

      </div>
      <table className="data-table">
      <div className="items-container">
        {allData.map((datas,dataIndex)=>{
          return(
            <>
            
       

        <div >
        <div className="items-container-flex-justify">
            {datas.map((elem,index)=>{
                return(
                    <>
                    <div >
                      <tr>
                      <td>
              <input className="check-items" type="checkbox" />
            </td>
            <td>
              <a className="heading-items">{elem.mainHeading}</a>
            </td>
                      </tr>
                      <div className="items-container-flex-direction">
                        {elem.items && elem.items.map((items,itemIndex)=>{
                            return(
                                <>
                                <div><input className="input-subitems" type="checkbox" /><a className="heading-subitems">{items}</a></div>
                                
                                </>	
                            )
                        })}

                    </div>
                    


                    
                    </div>
                    
                    </>
                )
            })} 



        </div>
        </div>

        </>
          )
        })}



     

      </div>
      </table>
    </div>
  );
};

export default Filter;
