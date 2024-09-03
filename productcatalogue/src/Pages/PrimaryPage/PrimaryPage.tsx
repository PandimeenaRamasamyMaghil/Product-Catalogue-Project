import React, { useState, useEffect } from "react";
import LableComponent from "../../ProductCatalogue/Components/LableComponent/LableComponent";
import InputFieldComponent from "../../ProductCatalogue/Components/InputFieldComponent/InputFieldComponent";
import Dropdown from "../../ProductCatalogue/Components/DropDownList/DropDownList";
import DigitInput from "../../ProductCatalogue/Components/DigitInput/DigitInput";
import RadioButtonGroup from "../../ProductCatalogue/Components/RadioButton/RadioButton";
import "./PrimaryPage.scss";
import { ImCross } from "react-icons/im";
import ImgaeUploading from "../../assets/png/addimage.png";
import axios from "axios";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useDispatch } from 'react-redux';
import {ApiPost} from '../../redux/Actions'
import Imagepillsselection from "../../ProductCatalogue/Components/ImagePillsSelection/ImagePillsSelection";
import SaveAndNext from "../../ProductCatalogue/Components/Savenextbutton/SaveAndNext";

interface Ingredients
{
  id:string,
  name:string
}
interface Allergens
{
  id:string,
  name:string
}

interface FormData {
  itemName: string;
  dietaryType: string;
  cuisine: string;
  mealType: string;
  bestPair: string;
  description: string;
  imageUrls:Base64Image[]
  alcohol: string;
  itemCode: string;
  barCode: string;
  category: string;
  categoryId:string;
  subCategory: string;
  Ingredients:Ingredients[];
  allergens:Allergens[]
  coloriePoint: string;
  selectedcolorie: string;
  portionSize: string;
  selectedPortion: string;
  tax: string;
  masterCode: string;
}
interface Category {
  id: string;
  name: string;
}
interface Base64Image {
  mimeType: string;
  base64String: string;
}

const PrimaryPage = () => {
 
 
  const [imagefromapi, setimagefromapi] = useState([]);
  const [charCount, setCharCount] = useState(0);
  const maxLength=100;
  const handledescriptioninputchange = (value: string) => {
    const length = value.length;
    if (length <= maxLength) {
      setCharCount(length);
    }
  };

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (name: string) => {
    setOpenDropdown(prev => (prev === name ? null : name));
  };

  const [categories, setCategories] = useState<Category[]>([]);
  const categoryUrl = process.env.React_App_Category || "";
  const IngredientsURL= process.env.React_App_INGR || ""
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categorylist = await axios.get("https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=Category");

        const imagesapi = await axios.get("https://api.magilhub.com/magilhub-data-services/merchants/itemAttributes?locationId=9c485244-afd4-11eb-b6c7-42010a010026&id=&option=INGR"
        );
        setimagefromapi(imagesapi.data && imagesapi.data);

        setCategories(categorylist.data);
        console.log("category", categories);

        console.log("imagefromapi", imagesapi);
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
    { id: "2", name: "Mexican" },
    { id: "3", name: "Indian" },
    { id: "4", name: "Chinese" },
    { id: "5", name: "American" },
  ];
  const mealType = [
    { id: "1", name: "Breakfast" },
    { id: "2", name: "Lunch" },
    { id: "3", name: "Dinner" },
  ];
  const bestPair = [
    { id: "1", name: "Chilly chutney" },
    { id: "2", name: "Idli Podi" },
    { id: "3", name: "Chicken gravy" },
  ];
  const subcategory = [
    { id: "1", name: "Soup" },
    { id: "2", name: "Salad" },
    { id: "3", name: "Sandwich" },
  ];

  const [masterCode, setMasterCode] = useState<string>("");
  const [selectedValues, setSelectedValues] = useState({
    alcohol: "",
    selectedcolorie: "",
    selectedPortion: "",
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
    { value: "per100grams", label: "per 100 grams " },
    { value: "perserving", label: "per serving" },
  ];
  const portionsizeradio = [
    { value: "Portion(count)", label: "Portion(count)" },
    { value: "grams/ml", label: "grams/ml" },
  ];
  const handleRadioChange = (radioname: keyof FormData, value: string) => {
    setSelectedValues((prevState) => ({
      ...prevState,
      [radioname]: value,
    }));
    setValue(radioname, value);
  };
  const handleimageselection = (option: { id: string; name: string }) => {
    console.log("Selected option:", option);
  };
  const [images, setImages] = useState<Base64Image[]>([]);
  const maxImages = 7;

  const handleAddImage = () => {
    document.getElementById("imgadd")?.click();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const validFiles = files.filter((file) => {
      const validTypes = ["image/jpeg", "image/png"];
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (!validTypes.includes(file.type)) {
        alert(`Invalid file type: ${file.name}. Only PNG and JPG are allowed.`);
        return false;
      }

      if (file.size > maxSizeInBytes) {
        alert(`File too large: ${file.name}. Maximum size is 2MB.`);
        return false;
      }

      return true;
    });

    if (validFiles.length + images.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images.`);
      return;
    }

    const readFileAsDataURL = (file: File): Promise<Base64Image> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataURL = reader.result as string;
          const mimeType = dataURL.split(";")[0].split(":")[1];
          const base64String = dataURL.split(",")[1];
          resolve({ mimeType, base64String });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    Promise.all(validFiles.map(readFileAsDataURL))
      .then((base64Images) => {
        console.log("basestr", base64Images);
        setImages([...images, ...base64Images]);
       
        setValue('imageUrls',base64Images);
        const imagess=getValues('imageUrls');
        console.log("selecd Images from browser",imagess);
       
      })
      .catch((error) => {
        console.error("Error converting files to Base64", error);
      });
      
  };

  const handleImageDeletion = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };
  const handleOnblur =(value:string)=>{
    return value;

  }
  
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    control,
    formState: { errors },
    trigger,
    reset
  } = useForm<FormData>({
    defaultValues: {
      itemName: "",
      dietaryType: "",
      cuisine: "",
      mealType: "",
      bestPair: "",
      description: "",
      imageUrls:[],
      alcohol: "",
      itemCode: "",
      barCode: "",
      category: "",
      categoryId:"",
      subCategory: "",
      Ingredients:[],
      allergens:[],
      coloriePoint: "",
      selectedcolorie: "per100grams",
      portionSize: "",
      selectedPortion: "Portion(count)",
      tax: "",
      masterCode: "",

    },
  });
  const dispatch = useDispatch();


  


  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("formData", data);
    // const dataToDispatch = extractFields(data);
    // dispatch(ApiPost(dataToDispatch));
  };
  
  return (
    <div className="Primary-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="Primary-page-container-one">
          <div className="Primary-page-container-pairone">
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="ItemName *" />
              <Controller
                name="itemName"
                control={control}
                render={({ field }) => (
                  <InputFieldComponent
                    {...field}
                    register={register}
                    trigger={trigger}
                    // validation={{ required: "Item name is required" }}
                    error={errors.itemName}
                   
                  />
                )}
              />
            </div>
            <div className="Primary-page-InputFields">
              <LableComponent lable="DietaryType *" />
              <Controller
                name="dietaryType"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={dietarytype}
                    placeholder="search for option"
                    register={register}
                    trigger={trigger}
                    setValue={setValue}
                    getValues={getValues}
                    // validation={{ required: "dietaryType is required" }}
                    error={errors.dietaryType}
                    {...field}
                    isOpen={openDropdown === 'dietaryType'}
                    onToggle={() => handleDropdownToggle('dietaryType')}
                  />
                )}
              />
            </div>
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="Cuisine *" />
              <Controller
                name="cuisine"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={cuisine}
                    placeholder="search for option"
                    register={register}
                    trigger={trigger}
                    setValue={setValue}
                    // validation={{ required: "cuisine is required" }}
                    error={errors.cuisine}
                    {...field}
                    getValues={getValues}
                    isOpen={openDropdown === 'cuisine'}
        onToggle={() => handleDropdownToggle('cuisine')}
                  />
                )}
              />
            </div>
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="MealType *" />
              <Controller
                name="mealType"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={mealType}
                    placeholder="search for option"
                    {...field}
                    register={register}
                    trigger={trigger}
                    setValue={setValue}
                    getValues={getValues}
                    // validation={{ required: "Mealtype is required" }}
                    error={errors.mealType}
                    isOpen={openDropdown === 'mealType'}
        onToggle={() => handleDropdownToggle('mealType')}
                  />
                )}
              />
            </div>
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="Best paired with food items *" />
              <Controller
                name="bestPair"
                control={control}
                render={({ field }) => (
                  <Dropdown
                    options={bestPair}
                    placeholder="search for option"
                    {...field}
                    register={register}
                    trigger={trigger}
                    setValue={setValue}
                    getValues={getValues}
                    isOpen={openDropdown === 'bestPair'}
        onToggle={() => handleDropdownToggle('bestPair')}

                  />
                )}
              />
            </div>
            <div className="Primary-Page-description-field">
              <LableComponent lable="Description" />
              <div>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <>
                    <textarea
                      className="description"
                      autoComplete="off"
                      value={field.value || ""}
              onChange={(e) => {
                handledescriptioninputchange(e.target.value);
                field.onChange(e);
              }}
              maxLength={maxLength}
              style={{ borderColor: charCount === maxLength ? 'red' : '#979797' }}
 
                    />
                    <p  style={{ color: charCount === maxLength ? 'red' : '#979797' }} className="Primary-page-description-charcount">{`${charCount}/100`}</p>
                    </>
                    
                  )}
                />{" "}
              </div>
            </div>
            <div className="Primary-Page-Foodimages">
              <h3>Food image</h3>
              <p>Image size should be under 2MB, in PNG or JPEG format.</p>
              <div className="imagealignment">
                <input
                  type="file"
                  className="imgfile"
                  id="imgadd"
                  accept="image/png, image/jpeg"
                  multiple
                  onChange={handleImageUpload}
                />

                {images.map((image, index) => (
                  <div key={index} className="image-container">
                    <button
                      onClick={() => handleImageDeletion(index)}
                      className="imcrossstyres"
                    >
                      <ImCross style={{ fontSize: "7px", color: "white" }} />
                    </button>
                    <img
                      src={`data:${image.mimeType};base64,${image.base64String}`}
                      alt={`uploaded ${index}`}
                      className="uploaded-image"
                    />
                  </div>
                ))}

                <img
                  src={ImgaeUploading}
                  alt="Add"
                  className="addingimg"
                  onClick={handleAddImage}
                />
              </div>
            </div>
            <div className="Primary-page-InputFields alcoholradiobutton">
            <h3>Contains Alcohol ?</h3>
              <RadioButtonGroup
                options={alcoholradio}
                name="alcohol"
                selectedValue={selectedValues.alcohol}
                onChange={(value) => handleRadioChange("alcohol", value)}
                register={register}
                defaultvalue="no"
              />
            </div>
            <div></div>
          </div>
          <div className="Primary-page-container-pairtwo">
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="ItemCode" />
              <Controller
                name="itemCode"
                control={control}
                render={({ field }) => (
                  <InputFieldComponent
                    {...field}
                    register={register}
                    trigger={trigger}
                    type="number"
                  />
                )}
              />
            </div>
            <div className="Primary-page-InputFields">
              {" "}
              <LableComponent lable="Upc / Barcode number" />
              <Controller
                name="barCode"
                control={control}
                render={({ field }) => (
                  <InputFieldComponent
                    {...field}
                    register={register}
                    trigger={trigger}
                   
                  
                  />
                )}
              />
            </div>

            <div className="Primary-page-InputFields PopularItem">
              <input type="checkbox" />
              <span>Popular item ( 3/10 )</span>
            </div>

            <div className="Primary-Page-categories-field">
              <div className="Primary-page-InputFields">
                <LableComponent lable="Category*" />
                <Controller
                  name="category"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      options={categories}
                      placeholder="search for option"
                      {...field}
                      register={register}
                      setValue={setValue}
                      trigger={trigger}
                      getValues={getValues}
                      // validation={{ required: "category is required" }}
                      error={errors.category}
                      isOpen={openDropdown === 'category'}
        onToggle={() => handleDropdownToggle('category')}
                    />
                  )}
                />
              </div>
              <div className="Primary-page-InputFields">
                <LableComponent lable="SubCategory" />
                <Controller
                  name="subCategory"
                  control={control}
                  render={({ field }) => (
                    <Dropdown
                      options={subcategory}
                      placeholder="search for option"
                      {...field}
                      register={register}
                      trigger={trigger}
                      setValue={setValue}
                      getValues={getValues}
                      isOpen={openDropdown === 'subCategory'}
        onToggle={() => handleDropdownToggle('subCategory')}
                    />
                  )}
                />
              </div>
            </div>
            <div className="Primary-page-Allergens-selection">
              <Imagepillsselection heading="Allergens*" options={validImages}  setValue={setValue} name="Allergens"/>
            </div>
          </div>
        </div>
        <div className="Primary-page-container-two">
          <div className="Primary-page-ingredients-selection">
            <Imagepillsselection
              heading="Ingredients*"
              options={imagefromapi}
              setValue={setValue}
              name="Ingredients"
            />
          </div>
          <div className="Primary-Page-Other-Details">
            <h3 className="Primary-Page-Other-Details-heading">
              Other Details
            </h3>
            <div className="Primary-Page-Other-Detail">
              <div>
                <Controller
                  name="coloriePoint"
                  control={control}
                  render={({ field }) => (
                    <InputFieldComponent
                      {...field}
                      trigger={trigger}
                      register={register}
                      placeholder="Cal"
                    />
                  )}
                />
              </div>
              <div>
                <RadioButtonGroup
                  options={calorieponitradio}
                  name="selectedcolorie"
                  selectedValue={selectedValues.selectedcolorie}
                  onChange={(value) =>
                    handleRadioChange("selectedcolorie", value)
                  }
                  register={register}
                  defaultvalue="per100grams"
                />
              </div>
            </div>

            <div className="Primary-Page-Other-Detail">
              <div>
                <Controller
                  name="portionSize"
                  control={control}
                  render={({ field }) => (
                    <InputFieldComponent
                      {...field}
                      trigger={trigger}
                      register={register}
                      placeholder={getValues('selectedPortion')}
                    />
                  )}
                />
              </div>
              <div>
                <RadioButtonGroup
                  options={portionsizeradio}
                  name="selectedPortion"
                  selectedValue={selectedValues.selectedPortion}
                  onChange={(value) =>
                    handleRadioChange("selectedPortion", value)
                  }
                  register={register}
                  defaultvalue="Portion(count)"
                />
              </div>
            </div>

            <div className="Primary-Page-Other-Detail">
              <div>
                {" "}
                <Controller
                  name="tax"
                  control={control}
                  render={({ field }) => (
                    <InputFieldComponent
                      {...field}
                      trigger={trigger}
                      register={register}
                    />
                  )}
                />
              </div>
              <div className="Primary-page-Other-Detail-mastercode">
                <LableComponent lable="Master Item Code" />
                <Controller
                  name="masterCode"
                  control={control}
                  render={({ field }) => (
                    <DigitInput
                      {...field}
                      setValue={setValue}
                      register={register}
                      inputCount={4}
                      error={errors.masterCode}
                      // validation={{ required: "Master code is required" }}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <button type="submit" className="Primary-Page-Formsubmitbutton">Submit</button> */}
        <SaveAndNext getFormData={getValues} seletedpage="Primary" reset={reset}/>

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
      
      </form>
    </div>
  );
};

export default PrimaryPage;
