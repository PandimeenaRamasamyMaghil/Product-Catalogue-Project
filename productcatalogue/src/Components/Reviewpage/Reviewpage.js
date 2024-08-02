import React,{useContext} from "react";
import "./Reviewpage.scss";
import emptyfoodimg from "../../assets/images/emptyfoodimg.png";
import edit from "../../assets/images/edit.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import imageslist from "../imageslist/imageslist";
import ingredientimagelist from '../imageslist/ingredientimagelist'

import Savenext from '../Savenextbutton/Savenextbutton'
import { primarypost } from "../../redux/Actions";
import Step2 from "./Step2";
import { Contextpagejs } from "../contextpage";


import Step3Review from "./Step3Review";

const Reviewpage = () => {
  let navigate = useNavigate();
  const dispatch=useDispatch();

  const primarydata = useSelector((state) => state.primarypage.data);

  const fetchedprimarydata = primarydata;
  const {activeCategory,pages,setActiveCategory}=useContext(Contextpagejs);


  // const imageslist = [
  //   {
  //     name: "Egg",
  //     image: Egg2,
  //   },
  //   {
  //     name: "Shellfish",
  //     image: Shellfish,
  //   },
  //   {
  //     name: "Dairy",
  //     image: Dairy,
  //   },

  //   {
  //     name: "Fish",
  //     image: Fish,
  //   },
  //   {
  //     name: "Legumes",
  //     image: Legumes,
  //   },

  //   {
  //     name: "nuts",
  //     image: nuts,
  //   },
  // ];
  const foundItemsallergens =
    fetchedprimarydata &&
    fetchedprimarydata.allergensFood &&
    imageslist.filter((item) =>
      fetchedprimarydata.allergensFood.includes(item.id)
    );
  const foundItemsingredient =
    fetchedprimarydata &&
    fetchedprimarydata.ingredientFood &&
    ingredientimagelist.filter((item) =>
      fetchedprimarydata.ingredientFood.includes(item.id)
    );

    const handleedit=(navlink)=>{
      // dispatch(primarypost(fetchedprimarydata));
   
      if("Primary"===navlink)
      {
        setActiveCategory("Step 1: Primary Details")

      }
      




    }
    
  return (
    <div className="reviewpage">

      



      <div className="reviewheading">
        <p>Review menu item - Idli</p>
      </div>

      <div className="primaryreview">
        <div className="primaryreviewdetailspart1">
          <div className="primaryreviewheading">
            <p>Step 1: Primary Details</p>
          </div>

          <div className="primaryreviews">
            <div className="primaryreviewdetails">
              <div className="primaryreviewdetails1">


                <div className="itemname">
                  <p>Item Name</p> <span>{fetchedprimarydata.itemName}</span>{" "}
                </div>

                <div className="dietary">
                  <p>Dietary type</p> <span>{fetchedprimarydata.dietary}</span>{" "}
                </div>

                <div className="mealtype">
                  <p>Meal type</p> <span>{fetchedprimarydata.mealType}</span>{" "}
                </div>

                <div className="Category">
                  <p>Category</p> <span>{fetchedprimarydata.category}</span>{" "}
                </div>

                { fetchedprimarydata.caloriePoint && (
                 <div className="Calorie">
                 <p>Calorie Point</p>{" "}
                 <span>
                  
                     {fetchedprimarydata.caloriePoint} Cal
                    
                 </span>{" "}
               </div>)

                }

               
               {
                fetchedprimarydata.portionSize && (
                  <div className="PortionSize">
                  <p>Portion Size</p>{" "}
                  <span>
                    {fetchedprimarydata.portionSize
                      ? fetchedprimarydata.portionSize
                      : "-"}
                  </span>{" "}
                  {
                    fetchedprimarydata.portionSizeSeleted ==="Portion(count)"? <span>Pieces</span>:
                    <span>Grams</span>

                  }
                </div>

                )
               }



               

                <div className="taxclass">
                  <p>Tax Class Association</p>{" "}
                  <span>
                    {fetchedprimarydata.taxClassAssociation
                      ? fetchedprimarydata.taxClassAssociation
                      : "-"}
                  </span>{" "}
                </div>
              </div>



              <div className="primaryreviewdetails2">
                
              {
                fetchedprimarydata.itemCode && (
                  <div className="itemcode">
                  <p>Item code</p>{" "}
                  <span>
                    {fetchedprimarydata.itemCode
                      ? fetchedprimarydata.itemCode
                      : "-"}
                  </span>{" "}
                </div>
                  
                )

              }
              
              { fetchedprimarydata.itemCode &&(
                <div className="othedietarydetails">
                <p>Other dietary details</p>{" "}
                <span>
                  {fetchedprimarydata.itemCode
                    ? fetchedprimarydata.itemCode
                    : "-"}
                </span>{" "}
               </div>
              )
 
              }

               

                <div className="cuisine">
                  <p>Cuisine</p> <span>{fetchedprimarydata.cuisine}</span>{" "}
                </div>


{
  fetchedprimarydata.subCategory && (
    <div className="subcategory">
                  <p>SubCategory</p>{" "}
                  <span>
                    {fetchedprimarydata.subCategory
                      ? fetchedprimarydata.subCategory
                      : "-"}
                  </span>{" "}
                </div>

  )
}


{
  fetchedprimarydata.portionSizeSeleted && (
    <div className="unitofmeasurement">
                  <p>Unit of measurement</p>{" "}
                  <span>
                    {/* {fetchedprimarydata.portionSizeSeleted
                      ? fetchedprimarydata.portionSizeSeleted
                      : "-"} */}
                      Per plate
                  </span>{" "}
                </div>

  )
}



                
                

                <div className="mastercode">
                  <p>Master product code</p>{" "}
                  <span>{fetchedprimarydata.masterCode}</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="primaryreviewdetailspart2">
          <div >
           
          
            <Link to="/Navigationpage" className="primarypageedit" onClick={()=>setActiveCategory("Step 1: Primary Details")}>
              <img src={edit} alt=""  className="step3-Review-Container-heading-EditImage" width={15} height={15}/>
              <h3 className="Edit-heading" >Edit</h3>
              </Link>{" "}
          
          </div>
          <div className="primaryimagepart">
          {
           
              <div className="primaryimages">
              <p>Primary Image</p>
              <div className="images">
                <ol>
                  {fetchedprimarydata && fetchedprimarydata.imageUrls&&
                    fetchedprimarydata.imageUrls.length > 0 && (
                      <li>
                        <img
                          src={`data:${
                            fetchedprimarydata.imageUrls[0] &&
                            fetchedprimarydata.imageUrls[0].mimeType &&
                            fetchedprimarydata.imageUrls[0].mimeType
                          };base64,${
                            fetchedprimarydata.imageUrls[0] &&
                            fetchedprimarydata.imageUrls[0].base64String &&
                            fetchedprimarydata.imageUrls[0].base64String
                          }`}
                          alt=""
                        />
                      </li>
                    )}
                    {  fetchedprimarydata &&
                     ! fetchedprimarydata.imageUrls &&
                     
        [0].map((_, index) => (

          <li key={index+1}>
            
            <img
              src={emptyfoodimg}
              alt={`sample ${index}`}
            />
          </li>

        ))}
       
  
                  <div className="selectediagelist">
                    {/* {imageslist.slice(1).map((image, index) => (
                      <li key={index + 1}>
                        <img src={image.image} alt="" />
                      </li>
                    ))} */}
  
                    {fetchedprimarydata &&
                      fetchedprimarydata.imageUrls &&
                      fetchedprimarydata.imageUrls
                        .slice(1)
                        .map((image, index) => (
                          <li key={index + 1}>
                            <img
                              src={`data:${image.mimeType};base64,${image.base64String}`}
                              alt={`uploaded ${index}`}
                            />
                          </li>
                        ))}

                         {  fetchedprimarydata &&
                      fetchedprimarydata.imageUrls &&
                     fetchedprimarydata.imageUrls.length < 7 &&
        Array.from({ length: 7 - fetchedprimarydata.imageUrls.length }).map((_, index) => (

          <li key={`sample-${index}`}>
            
            <img
              src={emptyfoodimg}
              alt={`sample ${index}`}
            />
          </li>

        ))}

{  fetchedprimarydata &&
                     ! fetchedprimarydata.imageUrls &&
                     
        [0,1,2,3,4,5].slice(1).map((_, index) => (

          <li key={index+1}>
            
            <img
              src={emptyfoodimg}
              alt={`sample ${index}`}
            />
          </li>

        ))}
       
                  </div>
                </ol>
              </div>
            </div>
              
            

          }

         {
          fetchedprimarydata.description &&(
            <div className="primarydescription">
            <p>Description</p>
            <div className="description">
              <p>{fetchedprimarydata.description}</p>
            </div>
          </div>

          )

         }
{
  fetchedprimarydata.bestPair &&(
    <div className="primarybestpairedfood">
    <p>Best paired with</p>
    <div className="bestpairfoods">
      <p>{fetchedprimarydata.bestPair}</p>
    </div>
  </div>

  )
}



         
        
          <div className="allergensandingredients">

            {
               fetchedprimarydata &&
               fetchedprimarydata.ingredientFood && fetchedprimarydata.ingredientFood.length>0 &&(
                <div className="ingredients">
                <p>Ingredients</p>
                <div className="imagesingredients">
                  {foundItemsingredient &&
                    foundItemsingredient.map((image) => (
                      <div className="selectedingredientsimage">
                        <img src={image.image} alt="image" />
                        <span>{image.name}</span>
                      </div>
                    ))}
                </div>
              </div>

              )
            }
            {
               fetchedprimarydata &&
               fetchedprimarydata.allergensFood && fetchedprimarydata.allergensFood.length>0  &&
             
              <div className=" allergens">
              <p> Allergens</p>
              <div className="imagesallergens">
                {foundItemsallergens &&
                  foundItemsallergens.map((image) => (
                    <div className="selectedallergensimage">
                      <img src={image.image} alt="image" />
                      <span>{image.name}</span>
                    </div>
                  ))}
              </div>
            </div>

            }
          
           
          </div>

          </div>





        </div>
      
     
        <div style={{ display: 'flex', alignItems: 'center' }}>
      <Step2 />
      <div  className="verticalLine" />
      <Step3Review />
    </div>
        <div className="Itemcustomizationpreview"></div>

        
      </div>
      <div className="buttoncomponent">

              
                 
             

        
        </div>

       



        </div>








   

  );
};

export default Reviewpage;
