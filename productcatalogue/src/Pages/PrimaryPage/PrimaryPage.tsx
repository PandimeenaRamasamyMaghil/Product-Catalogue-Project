import React, { useState ,useEffect} from "react";
import LableComponent from "../../Components/LableComponent/LableComponent";
import InputFieldComponent from "../../Components/InputFieldComponent/InputFieldComponent";
import Dropdown from "../../Components/DropDownList/DropDownList";
import DigitInput from "../../Components/DigitInput/DigitInput";
import RadioButtonGroup from "../../Components/RadioButton/RadioButton";
import "./PrimaryPage.scss";
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import Imagepillsselection from "../../Components/ImagePillsSelection/ImagePillsSelection";
interface FormData {
  itemName: string;
  dietaryType : string;
  cuisine: string;
  mealType :string;
  bestPair:string;
  description:string;
  alcohol:string;
  itemCode:string;
  barCode:string;
  category:string;
  subCategory:string;
  coloriePoint:string;
  selectedcolorie:string;
  portionSize:string;
  selectedPortion:string;
  tax:string;
  masterCode:string;
}
interface Category {
  id: string; 
  name: string; 
}




const PrimaryPage = () => {
  const handleInputChange = (msg: string) => {
    console.log("message", msg);
  };
  const handleblur = () => {
    console.log("hi");
  };
  const [imagefromapi,setimagefromapi]=useState([]);
 

  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const categorylist = await axios.get('https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=Category');

        const imagesapi = await axios.get('https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=INGR');
        setimagefromapi(imagesapi.data && imagesapi.data);
       
        setCategories(categorylist.data);
        console.log("category",categories);

        console.log("imagefromapi",imagesapi);
      } catch (error) {
        return error;
      } 
    };
   
    fetchData();
  }, []);

  const imageslist = [
    {
      name: "gluten",
      id: "1234",
    },
    {
      name: "Coconut",
      id: "2762",
    },
    {
      name: "gluten",

      id: "9857",
    },
    {
      name: "Soy",

      id: "4199",
    },
    {
      name: "gluten",

      id: "1618",
    },
    {
      name: "Egg",

      id: "5521",
    },
    {
      name: "Egg",

      id: "2588",
    },
    {
      name: "Shellfish",

      id: "8760",
    },
    {
      name: "Dairy",

      id: "9276",
    },
    {
      name: "gluten",

      id: "2751",
    },
    ,
    {
      name: "Fish",

      id: "2625",
    },
    {
      name: "Legumes",

      id: "8307",
    },
    ,
    {
      name: "gluten",

      id: "5940",
    },
    {
      name: "nuts",

      id: "3915",
    },
    {
      name: "gluten",

      id: "9163",
    },
  ];

  const dietarytype = [
    { id: "1", name: "Vegan" },
    { id: "2", name: "vegetarian" },
    { id: "3", name: "Indian" },
    { id: "4", name: "Chinese" },
    { id: "5", name: "American" },
   
  ];

  const cuisine = [
    { id: "1", name: "French" },
    { id:"2", name: "Mexican" },
    { id: "3", name: "Indian" },
    { id: "4", name: "Chinese" },
    { id: "5", name: "American" },
  ];
  const mealType = [
    { id: "1", name: "Breakfast" },
    { id:"2", name: "Lunch" },
    { id: "3", name: "Dinner" },

  ];
  const bestPair = [
    { id: "1", name: "Chilly chutney" },
    { id: "2", name: "Idli Podi" },
    { id: "3", name: "Chicken gravy" },
   
  ];
  const subcategory = [
    { id: "1", name: "Soup" },
    { id:"2", name: "Salad" },
    { id: "3", name: "Sandwich" },
 
  ];

 
  const [masterCode, setMasterCode] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState({
    alcohol: '',
    selectedcolorie: '',
    selectedPortion: '',
  });
  const [selectedOption, setSelectedOption] = useState<string>("apple");
  const [image, setimage] = useState(imageslist);

  const handleMasterCodeChange = (code: string) => {
    setMasterCode(code);
  };
  const validImages = imageslist.filter(
    (img): img is { name: string; id: string } => img !== undefined
  );
  const alcoholradio = [
    { value: "yes", label: "yes" },
    { value: "no", label: "no" },

  ];
  const calorieponitradio = [
    { value: "per100grams ", label: "per 100 grams " },
    { value: "perserving", label: "per serving" },

  ];
  const portionsizeradio = [
    { value: "Portion(count) ", label: "Portion(count)" },
    { value: "grams/ml", label: "grams/ml" },
  ];
  const handleRadioChange = (radioname: keyof FormData, value: string) => {
    setSelectedValues(prevState => ({
      ...prevState,
      [radioname]: value,
    }));
    setValue(radioname, value);
  };
  const handleimageselection = (option: { id: string; name: string }) => {
    console.log("Selected option:", option);
  };
const { register, handleSubmit,setValue } = useForm<FormData>(
  {
    defaultValues:{
      itemName: '',
      dietaryType : '',
      cuisine: '',
      mealType :'',
      bestPair:'',
      description:'',
      alcohol:'',
      itemCode:'',
      barCode:'',
      category:'',
      subCategory:'',
      coloriePoint:'',
      selectedcolorie:'',
      portionSize:'',
      selectedPortion:'',
      tax:'',
      masterCode:''

    }
   
  }
);
const onSubmit: SubmitHandler<FormData> = data => {
  console.log("data",data);
};
  return (
    <div className="Primary-page">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="Primary-page-container-one">
        <div className="Primary-page-container-pairone">
          <div className="Primary-page-InputFields">
            {" "}
            <LableComponent lable="ItemName *" />
            <InputFieldComponent
              name="itemName"
              blurfunction={handleblur}
              register={register}
              
            />
          </div>
          <div className="Primary-page-InputFields">
            <LableComponent lable="DietaryType *" />
            <Dropdown
              options={dietarytype}
              placeholder="search for option"
           
              name="dietaryType"
              register={register}
              setValue={setValue}
            />
          </div>
          <div className="Primary-page-InputFields">
            {" "}
            <LableComponent lable="Cuisine *" />
            <Dropdown
              options={cuisine}
              placeholder="search for option"
           
              name="cuisine"
              register={register}
              setValue={setValue}

            />
          </div>
          <div className="Primary-page-InputFields">
            {" "}
            <LableComponent lable="MealType *" />
            <Dropdown
              options={mealType}
              placeholder="search for option"
           
              name="mealType"
              register={register}
              setValue={setValue}
            />
          </div>
          <div className="Primary-page-InputFields">
            {" "}
            <LableComponent lable="Best paired with food items *" />
            <Dropdown
              options={bestPair}
              placeholder="search for option"
           
              name="bestPair"
              register={register}
              setValue={setValue}
            />
          </div>
          <div className="Primary-Page-description-field">
            <LableComponent lable="Description" />
            <div >
              <textarea
                className="description"
                autoComplete="off"
                {...register('description')}
              />
            </div>
          </div>
          <div className="Primary-page-InputFields radiobutton">
          <LableComponent lable="Contains Alcohol ?" />
            <RadioButtonGroup
        options={alcoholradio}
        name="alcohol"
        selectedValue={selectedValues.alcohol}
        onChange={value => handleRadioChange('alcohol', value)}
        register={register}
      /></div>
          <div>

          </div>
        </div>
        <div className="Primary-page-container-pairtwo">
        <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="ItemCode*" />
              <InputFieldComponent
                name="itemCode"
                register={register}
                blurfunction={handleblur}
                
              />
            </div>
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="Upc / Barcode number" />
              <InputFieldComponent
                name="barCode"
                register={register}
              
                blurfunction={handleblur}
                
              />
            </div>
            
            <div className="Primary-page-InputFields PopularItem">
              <input type="checkbox" />
              <span>Popular item ( 3/10 )</span>
            </div>

            <div className="Primary-Page-categories-field">
              <div className="Primary-page-InputFields" >
              <LableComponent lable="Category*" />
              <Dropdown
              options={categories}
              placeholder="search for option"
          
              name="category"
              register={register}
              setValue={setValue}
            />

              </div>
              <div className="Primary-page-InputFields">
              <LableComponent lable="SubCategory" />
              <Dropdown
              options={subcategory}
              placeholder="search for option"
          
              name="subCategory"
              register={register}
              setValue={setValue}
              
            />

              </div>

            </div>
            <div className="Primary-page-Allergens-selection">
            <Imagepillsselection heading="Allergens*" options={validImages} handleselection={handleimageselection}/>

            </div>


        </div>
      </div>
      <div className="Primary-page-container-two">
        <div className="Primary-page-ingredients-selection" >
        <Imagepillsselection heading="Ingredients*" options={imagefromapi} handleselection={handleimageselection}/>

        </div>
        <div className="Primary-Page-Other-Details">
          <h3 className="Primary-Page-Other-Details-heading">Other Details</h3>
          <div className="Primary-Page-Other-Detail">
            <div>
            <InputFieldComponent name='coloriePoint' register={register}
                blurfunction={handleblur}  />
            </div>
            <div><RadioButtonGroup
        options={calorieponitradio}
        name="selectedcolorie"
        selectedValue={selectedValues.selectedcolorie}
        onChange={value => handleRadioChange('selectedcolorie', value)}
        register={register}
      /></div>
          </div>



          <div className="Primary-Page-Other-Detail">
            <div>
            <InputFieldComponent name='portionSize' register={register}   blurfunction={handleblur} />
            </div>
            <div><RadioButtonGroup
        options={portionsizeradio}
        name="selectedPortion"
        selectedValue={selectedValues.selectedPortion}
        onChange={value => handleRadioChange('selectedPortion', value)}
        register={register}
      /></div>

          </div>


          <div className="Primary-Page-Other-Detail">
          <div> <InputFieldComponent  name='tax' register={register} blurfunction={handleblur}/></div>
          <div className="Primary-page-Other-Detail-mastercode">  
          <LableComponent lable="Master Item Code" />
             <DigitInput name='masterCode'  register={register} setValue={setValue} inputCount={4}  /></div>
          </div>
        </div>


      </div>

      {/* <LableComponent lable="Itemname"/>
        <InputFieldComponent name="ItemName" value="Dosa" onChange={handleInputChange} blurfunction={handleblur}/>
        <Dropdown options={options} placeholder="search for option" onSelect={handleSelect} />
        <Dropdown options={options1} placeholder="search for option" onSelect={handleSelect} />
        <Dropdown options={options2} placeholder="search for option" onSelect={handleSelect} />
        <span>Master Item Code</span>
      <DigitInput inputCount={4} onComplete={handleMasterCodeChange} />
      <p>Master Code: {masterCode}</p>
      <RadioButtonGroup
        options={optionsradio}
        selectedValue={selectedOption}
        name="fruits"
        onChange={handleRadioChange}
      />

      <Imagepillsselection options={validImages} handleselection={handleimageselection}/> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PrimaryPage;
