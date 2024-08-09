import React, { useContext, useState,useEffect } from "react";
import "./Reviewpage.scss";
import axios from 'axios';

import emptyfoodimg from "../../assets/images/emptyfoodimg.png";
import edit from "../../assets/images/edit.png";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import imageslist from "../imageslist/imageslist";
import ingredientimagelist from "../imageslist/ingredientimagelist";

import Savenext from "../Savenextbutton/Savenextbutton";
import { primarypost } from "../../redux/Actions";
import { ApiPost} from "../../redux/Actions";

import Step2 from "./Step2";
import { Contextpagejs } from "../contextpage";

import Step3Review from "./Step3Review";

const Reviewpage = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const primarydata = useSelector((state) => state.primarypage.data);
  const fetchedprimarydata = primarydata;
  console.log("fetchedprimarydata",fetchedprimarydata);
  const { activeCategory, pages, setActiveCategory } =
    useContext(Contextpagejs);

    const [imagenamesfromapi,setimagenamesfromapi]=useState([])
    useEffect(() => {
   
      const fetchData = async () => {
        try {
          const imagesapi = await axios.get('https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=INGR');
          setimagenamesfromapi(imagesapi.data && imagesapi.data);

        } catch (error) {
          return error;
        } 
      };
     
      fetchData();
    }, []);

const primarypagedetails= useSelector((state)=>state);
console.log("primary",primarypagedetails);

const data=
{
  locationId:"9c485244-afd4-11eb-b6c7-42010a010026",
  itemCode:primarypagedetails.
  primarypage.data.itemCode,
  altName:"alt name",
  itemName:primarypagedetails.
  primarypage.data.itemName,
  description:primarypagedetails.
  primarypage.data.description,
  price:"12",
  categoryId:primarypagedetails.
  primarypage.data.categoryId,
  subCategoryId:"",
  kitchenStations:primarypagedetails.PricingDetailReducer
.prizingData.mainForm?.
KitchenStationId?.KitchenStationId||[],
  taxFeeId:"",
  ingredients:primarypagedetails.
  primarypage.data.ingredients && primarypagedetails.
  primarypage.data.ingredients||[],
  modifiers:[],
  availabilityId:primarypagedetails.PricingDetailReducer
  .prizingData.mainForm?.normalForm?.availabilityid?.availabilityid||primarypagedetails.PricingDetailReducer
  .prizingData.mainForm?.specialForm?.availabilityid?.availabilityid||[] ,
  category:primarypagedetails.
  primarypage.data.category,
  subCategory:primarypagedetails.
  primarypage.data.subCategory,
  itemId:null
}




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
    imagenamesfromapi.filter((item) =>
      fetchedprimarydata.ingredientFood.includes(item.id)
    );

  const handleedit = (navlink) => {
    // dispatch(primarypost(fetchedprimarydata));

    if ("Primary" === navlink) {
      setActiveCategory("Step 1: Primary Details");
    }
  };

  return (
    <div style={{display:'flex',flexDirection:'column'}}>
    <div className="reviewheading">
    <p>Review menu item - Idli</p>
  </div>
    <div className="reviewpage">
      

      <div className="reviewpagebody">

      <div className="primaryreview">
        <div className="primaryreviewdetailspart1">
          <div className="primaryreviewheading">
            <p>Step 1: Primary Details</p>
          </div>

          <div className="primaryreviews">
            <div className="primaryreviewdetails">
              <div className="primaryreviewdetails1">
                <div className="itemname">
                  <p>Item Name</p>{" "}
                  <span>
                    {fetchedprimarydata.itemName
                      ? fetchedprimarydata.itemName
                      : "-"}
                  </span>{" "}
                </div>

                <div className="dietary">
                  <p>Dietary type</p>{" "}
                  <span>
                    {fetchedprimarydata.dietary
                      ? fetchedprimarydata.dietary
                      : "-"}
                  </span>{" "}
                </div>

                <div className="mealtype">
                  <p>Meal type</p>{" "}
                  <span>
                    {fetchedprimarydata.mealType
                      ? fetchedprimarydata.mealType
                      : "-"}
                  </span>{" "}
                </div>

                <div className="Category">
                  <p>Category</p>{" "}
                  <span>
                    {fetchedprimarydata.category
                      ? fetchedprimarydata.category
                      : "-"}
                  </span>{" "}
                </div>

                {
                  <div className="Calorie">
                    <p>Calorie Point</p>{" "}
                    <span>
                      {fetchedprimarydata.caloriePoint
                        ? fetchedprimarydata.caloriePoint
                        : "-"}
                    </span>{" "}
                  </div>
                }

                {
                  <div className="PortionSize">
                    <p>Portion Size</p>{" "}
                    <span>
                      {fetchedprimarydata.portionSize
                        ? fetchedprimarydata.portionSize
                        : "-"}
                    </span>{" "}
                  </div>
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
                  <div className="itemcode">
                    <p>Item code</p>{" "}
                    <span>
                      {fetchedprimarydata.itemCode
                        ? fetchedprimarydata.itemCode
                        : "-"}
                    </span>{" "}
                  </div>
                }

                {
                  <div className="othedietarydetails">
                    <p>Other dietary details</p>{" "}
                    <span>
                      {fetchedprimarydata.itemCode
                        ? fetchedprimarydata.itemCode
                        : "-"}
                    </span>{" "}
                  </div>
                }

                <div className="cuisine">
                  <p>Cuisine</p>{" "}
                  <span>
                    {fetchedprimarydata.cuisine
                      ? fetchedprimarydata.cuisine
                      : "-"}
                  </span>{" "}
                </div>

                {
                  <div className="subcategory">
                    <p>SubCategory</p>{" "}
                    <span>
                      {fetchedprimarydata.subCategory
                        ? fetchedprimarydata.subCategory
                        : "-"}
                    </span>{" "}
                  </div>
                }

                {
                  <div className="unitofmeasurement">
                    <p>Unit of measurement</p>{" "}
                    <span>
                      {fetchedprimarydata.portionSizeSeleted
                        ? fetchedprimarydata.portionSizeSeleted
                        : "-"}
                    </span>{" "}
                  </div>
                }

                <div className="mastercode">
                  <p>Master product code</p>{" "}
                  <span>
                    {fetchedprimarydata.masterCode
                      ? fetchedprimarydata.masterCode
                      : "-"}
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="primaryreviewdetailspart2">
          <div>
            <Link
              to="/Navigationpage"
              className="primarypageedit"
              onClick={() => setActiveCategory("Step 1: Primary Details")}
            >
              <img
                src={edit}
                alt=""
                className="step3-Review-Container-heading-EditImage"
                width={15}
                height={15}
              />
              <h3 className="Edit-heading">Edit</h3>
            </Link>{" "}
          </div>
          {
            <div className="primaryimages">
              <p>Primary Image</p>
              <div className="images">
                <ol>
                  {fetchedprimarydata &&
                    fetchedprimarydata.imageUrls &&
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

                  {fetchedprimarydata && fetchedprimarydata.imageUrls&&
                    fetchedprimarydata.imageUrls.length===0 &&
                    [0].map((_, index) => (
                      <li key={index + 1}>
                        <img src={emptyfoodimg} alt={`sample ${index}`} />
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
                    {fetchedprimarydata && fetchedprimarydata.imageUrls &&
                      fetchedprimarydata.imageUrls.length===0 &&
                      [0, 1, 2, 3, 4, 5].slice(1).map((_, index) => (
                        <li key={index + 1}>
                         
                          <img src={emptyfoodimg} alt={`sample ${index}`} />
                        </li>
                      ))}
                  </div>
                </ol>
              </div>
            </div>
          }

          {fetchedprimarydata.description && (
            <div className="primarydescription">
              <p>Description</p>
              <div className="description">
                <p>{fetchedprimarydata.description}</p>
              </div>
            </div>
          )}
          {(
            <div className="primarybestpairedfood">
              <p>Best paired with</p>
              <div className="bestpairfoods">
                <p>{fetchedprimarydata.bestPair ? fetchedprimarydata.bestPair:"No item selected"}</p>
              </div>
            </div>
          )}

          <div className="allergensandingredients">
            {fetchedprimarydata &&
              fetchedprimarydata.ingredientFood &&
              fetchedprimarydata.ingredientFood.length > 0 && (
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
              )}
            {fetchedprimarydata &&
              fetchedprimarydata.allergensFood &&
              fetchedprimarydata.allergensFood.length > 0 && (
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
              )}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Step2 />
          <div className="verticalLine" />
          <Step3Review />
        </div>
        
      </div>
      <div className="buttoncomponentreview">
      <div className="saveandnextreview">
        <button className="clearall" >
          Cancel
        </button>
        <button className="saveall" onClick={()=> dispatch(ApiPost(data))} >
        Submit for review
        </button>
        
       
   
      </div>


      </div>
      </div>
    </div> </div>
  );
};

export default Reviewpage;
