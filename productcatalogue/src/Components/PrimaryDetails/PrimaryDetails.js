import React, { useState, useRef, useEffect } from "react";
import "./PrimaryDetails.scss";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import addimage from "../../assets/images/addimage.png";
import dropdown from "../../assets/images/dropdown.png";
// import uparrow from "../../assets/images/uparrow.png";
import initialimage from "../imageslist/imageslist";
import ingredientimageinitial from "../imageslist/ingredientimagelist";

import searchicon from "../../assets/images/searchicon.png";
import deleteicon from "../../assets/images/delete.png";
import Savenext from "../Savenextbutton/Savenextbutton";
import Tooltip from "../Tooltip/Tooltip";
import info from "../../assets/images/info.png";
import { Link } from "react-router-dom";
import { primarypost } from "../../redux/Actions";

const PrimaryDetails = () => {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState("");
  const [portionSizeSeleted, setportionSizeSeleted] = useState("");

  const [dropdownoptionlist, setdropdownoptionlist] = useState({
    dietary: false,
    cuisine: false,
    mealType: false,
    bestPair: false,
    category: false,
    subCategory: false,
  });

  const primarydata = useSelector((state) => state.primarypage.data);
  const fetchedprimarydata = primarydata;

  const [Primarydetailsform, setPrimarydetailsform] = useState({
    itemName: "",
    dietary: "",
    cuisine: "",
    mealType: "",
    bestPair: "",
    description: "",
    alcohol: "no",
    itemCode: "",
    barCode: "",
    category: "",
    subCategory: "",
    caloriePoint: "",
    selectedOption: "100grams",
    portionSize: "",
    portionSizeSeleted: "Portion(count)",
    taxClassAssociation: "",
    masterCode: [0, 0, 0, 0],
    imageUrls: [],
    allergensFood: [],
    ingredientFood: [],
  });

  useEffect(() => {
    if (fetchedprimarydata) {
      setPrimarydetailsform({
        ...Primarydetailsform,
        itemName: fetchedprimarydata.itemName && fetchedprimarydata.itemName,
        dietary:
          (fetchedprimarydata.dietary && fetchedprimarydata.dietary) || "",
        cuisine:
          (fetchedprimarydata.cuisine && fetchedprimarydata.cuisine) || "",

        mealType:
          (fetchedprimarydata.mealType && fetchedprimarydata.mealType) || "",
        bestPair:
          (fetchedprimarydata.bestPair && fetchedprimarydata.bestPair) || "",
        description:
          fetchedprimarydata.description && fetchedprimarydata.description,
        itemCode: fetchedprimarydata.itemCode && fetchedprimarydata.itemCode,
        category:
          (fetchedprimarydata.category && fetchedprimarydata.category) || "",
        barCode: fetchedprimarydata.barCode && fetchedprimarydata.barCode,
        subCategory:
          (fetchedprimarydata.subCategory && fetchedprimarydata.subCategory) ||
          "",
        caloriePoint:
          fetchedprimarydata.caloriePoint && fetchedprimarydata.caloriePoint,
        portionSize:
          fetchedprimarydata.portionSize && fetchedprimarydata.portionSize,
        selectedOption:
          (fetchedprimarydata.selectedOption &&
            fetchedprimarydata.selectedOption) ||
          "100grams",
        portionSizeSeleted:
          (fetchedprimarydata.portionSizeSeleted &&
            fetchedprimarydata.portionSizeSeleted) ||
          "Portion(count)",
        taxClassAssociation:
          fetchedprimarydata.taxClassAssociation &&
          fetchedprimarydata.taxClassAssociation,
        masterCode:
          fetchedprimarydata.masterCode && fetchedprimarydata.masterCode,
      });
      setischecked((prevChecked) => ({
        ...prevChecked,
        dietary:
        (fetchedprimarydata.dietary && fetchedprimarydata.dietary) || "",
      cuisine:
        (fetchedprimarydata.cuisine && fetchedprimarydata.cuisine) || "",

      mealType:
        (fetchedprimarydata.mealType && fetchedprimarydata.mealType) || "",
      bestPair:
        (fetchedprimarydata.bestPair && fetchedprimarydata.bestPair) || "",
        category:
        (fetchedprimarydata.category && fetchedprimarydata.category) || "",
        subCategory:
        (fetchedprimarydata.subCategory && fetchedprimarydata.subCategory) ||
        "",
      }));
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
      // setPrimarydetailsform({
      //   ...Primarydetailsform,
      // });
    }
  }, []);

  const [dietryfoodarray, setdietryfoodarray] = useState([
    "Vegan",
    "vegetarian",
    "Indian",
    "Chinese",
    "American",
    "French",
  ]);
  const [Cuisinefoodarray, setCuisinefoodarray] = useState([
    "Indian",
    "Mexican",
    "Chinese",
    "American",
    "French",
  ]);
  const [mealtypefoodarray, setmealtypefoodarray] = useState([
    "Breakfast",
    "Lunch",
    "Dinner",
  ]);
  const [bestpairfoodarray, setbestpairfoodarray] = useState([
    "Chilly chutney",
    "Idli Podi",
    " Chicken gravy",
  ]);
  const [categoryfoodarray, setcategoryfoodarray] = useState([
    "Appetizer",
    "Main Course",
    "Dessert",
  ]);
  const [subcategoryfoodarray, setsubcategoryfoodarray] = useState([
    "Soup",
    "Salad",
    "Sandwich",
  ]);
  const [imagelisting, setimagelisting] = useState(initialimage);

  const [ingredientimagelist, setingredientimagelist] = useState(
    ingredientimageinitial
  );

  const [dropdownStates, setDropdownStates] = useState({
    dietarydropdown: false,
    cuisinedropdown: false,
    mealTypedropdown: false,
    bestPairdropdown: false,
    categorydropdown: false,
    subCategorydropdown: false,
  });

  const [ischecked, setischecked] = useState({
    dietary: "",
    cuisine: "",
    mealType: "",
    bestPair: "",
    category: "",
    subCategory: "",
  });

  const countWords = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;
  };

  // const handledescriptionChange = (event) => {
  //   // const newDescription = event.target.value;
  //   // const wordCount = newDescription;

  //   // if (newDescription <= maxLength) {
  //   //   setDescription(newDescription);

  //   // }
  //   setPrimarydetailsform({
  //     ...Primarydetailsform,
  //     description: event.target.value,
  //   });
  // };
  const [description, setDescription] = useState("");
  const [descriptionstyle,setdescriptionstyle]=useState();

  const maxLength = 100;
  const handledescriptionChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setDescription(event.target.value);
      setPrimarydetailsform({
        ...Primarydetailsform,
        description: event.target.value,
      });
    }
   

  };
  let [allergensimage, setAllergensimage] = useState([]);
  const [seletedingredients, setseletedingredients] = useState([]);

  const handlecleardata = () => {
    setPrimarydetailsform({
      ...Primarydetailsform,
      itemName: "",
      dietary: "",
      cuisine: "",
      mealType: "",
      bestPair: "",
      description: "",
      itemCode: "",
      barCode: "",
      category: "",
      subCategory: "",
      caloriePoint: "",
      selectedOption: "100grams",
      portionSize: "",
      portionSizeSeleted: "Portion(count)",
      taxClassAssociation: "",
      imageUrls: [],
      allergensFood: [],
      ingredientFood: [],
    });
    setAllergensimage([]);
    setseletedingredients([]);
    setImages([]);
  };

  const handleadimage = () => {
    document.getElementById("imgadd").click();
  };

  const [images, setImages] = useState([]);
  const maxImages = 7;

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
  
    // Filter valid files based on type and size
    const validFiles = files.filter((file) => {
      const validTypes = ['image/jpeg', 'image/png'];
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
  
    // Check if the number of valid files can be added
    if (validFiles.length + images.length > maxImages) {
      alert(`You can only upload up to ${maxImages} images.`);
      return;
    }
  
    // Convert valid files to Base64
    const readFileAsDataURL = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const dataURL = reader.result;
          const mimeType = dataURL.split(";")[0].split(":")[1];
          const base64String = dataURL.split(",")[1];
          resolve({ mimeType, base64String });
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };
  
    // Process valid files
    Promise.all(validFiles.map(readFileAsDataURL))
      .then((base64Images) => {
        console.log("basestr", base64Images);
        setPrimarydetailsform({
          ...Primarydetailsform,
          imageUrls: [...Primarydetailsform.imageUrls, ...base64Images],
        });
        setImages([...images, ...base64Images]);
      })
      .catch((error) => {
        console.error("Error converting files to Base64", error);
      });
  };
  
  const [Primarydetailsformerrors, setPrimarydetailsformerrors] = useState({
    itemNameerror: "",
    dietaryerror: "",
    cuisineerror: "",
    mealTypeerror: "",
    categoryerror: "",
    taxClassAssociationerror: "",
    masterCodeerror: "",
  });

  const handleDropdownSelection = (name, value) => {
    setPrimarydetailsform((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setischecked((prevChecked) => ({
      ...prevChecked,
      [name]: value,
    }));
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [`${name}dropdown`]: !prevStates[`${name}dropdown`],
    }));
  };

  const [showaddnewbtn, setshowaddnewbtn] = useState({
    dietary: false,
    cuisine: false,
    mealtype: false,
    bestpair: false,
    category: false,
    subCategory: false,
  });

  const [showaddnewcusine, setshowaddnewcusine] = useState(false);
  const [showaddnewdietary, setshowaddnewdietary] = useState(false);
  const [showaddnewmealtype, setshowaddnewmealtype] = useState(false);
  const [showaddnewbestpair, setshowaddnewbestpair] = useState(false);
  const [showaddnewcategory, setshowaddnewcategory] = useState(false);
  const [showaddnewsubcategory, setshowaddnewsubcategory] = useState(false);

  const errorvaliadtiondietary = () => {
    if (!Primarydetailsform.dietary) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        dietaryerror: "Dietary is required",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        dietaryerror: "",
      });
    }
  };
  const errorvaliadtioncuisine = () => {
    if (!Primarydetailsform.cuisine) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        cuisineerror: "cuisine is required",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        cuisineerror: "",
      });
    }
  };
  const errorvaliadtionmealtype = () => {
    if (!Primarydetailsform.mealType) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        mealTypeerror: "mealtype is required",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        mealTypeerror: "",
      });
    }
  };
  const errorvaliadtioncatagory = () => {
    if (!Primarydetailsform.category) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        categoryerror: "category is required",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        categoryerror: "",
      });
    }
  };
  const errorvaliadtionitemname = () => {
    if (!Primarydetailsform.itemName) {
      console.log("Primarydetailsform.itemName", Primarydetailsform.itemName);
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        itemNameerror: "Plese enter the Item name first",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        itemNameerror: "",
      });
    }
  };

  const errorvaliadtiontaxclass = () => {
    if (!Primarydetailsform.taxClassAssociation) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        taxClassAssociationerror: "Plese enter the valid data",
      });
    } else {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        taxClassAssociationerror: "",
      });
    }
  };

  const validationitemname = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      itemNameerror: "Plese enter the Item name first",
    });
  };
  const validationdietarytype = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      dietaryerror: "Plese enter the dietary type",
    });
  };

  const validationcuisine = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      cuisineerror: "Plese enter the cuisine type",
    });
  };

  const validationmealtype = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      mealType: "Plese enter the meal type",
    });
  };
  const validationcategory = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      categoryerror: "Plese enter the catagory of item",
    });
  };

  const validationtaxclass = () => {
    setPrimarydetailsformerrors({
      ...Primarydetailsformerrors,
      taxClassAssociationerror: "Plese enter the tax class",
    });
  };

  // const validationform = () => {
  //   let isValid = true;
  //   if (!Primarydetailsform.itemName) {
  //     console.log("Primarydetailsform.itemName", Primarydetailsform.itemName);
  //     isValid = false;

  //   }
  //   if (!Primarydetailsform.taxClassAssociation) {
  //     isValid = false;

  //   }
  //   if (!Primarydetailsform.dietary) {
  //     isValid = false;

  //   }
  //   if (!Primarydetailsform.cuisine) {
  //     isValid = false;

  //   }
  //   if (Primarydetailsform.mealType==="") {
  //     isValid = false;
  //     validationmealtype();

  //   }

  //   if (!Primarydetailsform.category) {
  //     isValid = false;
  //   }

  //   return isValid;
  // };

  const validationform = () => {
    let isValid = true;
    let errorsvalidate = {};

    if (!Primarydetailsform.itemName) {
      isValid = false;
      errorsvalidate.itemNameerror = "Item Name is required.";
    }

    if (!Primarydetailsform.taxClassAssociation) {
      isValid = false;
      errorsvalidate.taxClassAssociationerror =
        "Tax Class Association is required.";
    }

    if (!Primarydetailsform.dietary) {
      isValid = false;
      errorsvalidate.dietaryerror = "Dietary information is required.";
    }

    if (!Primarydetailsform.cuisine) {
      isValid = false;
      errorsvalidate.cuisineerror = "Cuisine information is required.";
    }

    if (Primarydetailsform.mealType === "") {
      isValid = false;
      // Assuming this function handles additional validation and setting errors
      errorsvalidate.mealTypeerror = "Meal Type is required.";
    }

    if (!Primarydetailsform.category) {
      isValid = false;
      errorsvalidate.categoryerror = "Category is required.";
    }
    if(!Primarydetailsform.masterCode)
    {
      isValid = false;
      errorsvalidate.masterCodeerror = "master code is required.";

    }
    setPrimarydetailsformerrors(errorsvalidate);

    return isValid;
  };
  // if (Primarydetailsform.masterCode.length !== 4) {
  //   isValid = false;
  // }

  const allFalse = Object.values(dropdownStates).every(
    (value) => value === false
  );

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setPrimarydetailsform({
      ...Primarydetailsform,
      [name]: value,
    });
    setdropdownoptionlist({
      ...dropdownoptionlist,
      [name]: true,
    });

    // if(name === "category")
    //   {
    //     setdropdownoptionlist({...dropdownoptionlist,dietary:true})
    //     setcategoryshowingdropdown(true)
    //   }

    if (name === "dietary" && value) {
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        dietaryerror: "",
      });
    }

    if (name === "dietary") {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: true,
        cuisinedropdown: false,
        mealTypedropdown: false,
        bestPairdropdown: false,
        categorydropdown: false,
        subCategorydropdown: false,
      });
    }

    if (name === "cuisine" && allFalse) {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
        cuisinedropdown: true,
        mealTypedropdown: false,
        bestPairdropdown: false,
        categorydropdown: false,
        subCategorydropdown: false,
      });
    }
    if (name === "mealType" && allFalse) {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
        cuisinedropdown: false,
        mealTypedropdown: true,
        bestPairdropdown: false,
        categorydropdown: false,
        subCategorydropdown: false,
      });
    }

    if (name === "bestPair" && allFalse) {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
        cuisinedropdown: false,
        mealTypedropdown: false,
        bestPairdropdown: true,
        categorydropdown: false,
        subCategorydropdown: false,
      });
    }

    if (name === "category" && allFalse) {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
        cuisinedropdown: false,
        mealTypedropdown: false,
        bestPairdropdown: false,
        categorydropdown: true,
        subCategorydropdown: false,
      });
    }

    if (name === "subCategoy" && allFalse) {
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
        cuisinedropdown: false,
        mealTypedropdown: false,
        bestPairdropdown: false,
        categorydropdown: false,
        subCategorydropdown: true,
      });
    }
  };

  const handleRadioChangeprimary = (e) => {
    const { name, value } = e.target;

    setPrimarydetailsform({
      ...Primarydetailsform,
      [name]: value,
    });
  };
  // const handleRadioChange = (e) => {
  //   setPrimarydetailsform({
  //     ...Primarydetailsform,
  //     selectedOption: e.target.value
  //   });
  //   console.log(e.target.value);
  // };

  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setsearching] = useState(false);

  const Dietryfiltered = dietryfoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.dietary.toLowerCase())
  );
  const Cuisinefiltered = Cuisinefoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.cuisine.toLowerCase())
  );

  const mealtypefiltered = mealtypefoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.mealType.toLowerCase())
  );
  const bestpairfiltered = bestpairfoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.bestPair.toLowerCase())
  );
  const Categoryfiltered = categoryfoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.category.toLowerCase())
  );
  const Subcategoryfiltered = subcategoryfoodarray.filter((item) =>
    item.toLowerCase().includes(Primarydetailsform.subCategory.toLowerCase())
  );
  const [search, setSearch] = useState("");
  const [searchingredients, setsearchingredients] = useState("");

  let filteredImages = imagelisting.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  let filteredimg = ingredientimagelist.filter((item) =>
    item.name.toLowerCase().includes(searchingredients.toLowerCase())
  );

  const handleImageClick = (image) => {
    setAllergensimage([
      ...allergensimage,
      { name: image.name, image: image.image, id: image.id },
    ]);
    setPrimarydetailsform({
      ...Primarydetailsform,

      allergensFood: [...Primarydetailsform.allergensFood, image.id],
    });
  };

  const handleImageClick2 = (image) => {
    setseletedingredients([
      ...seletedingredients,
      { name: image.name, image: image.image, id: image.id },
    ]);

    setPrimarydetailsform({
      ...Primarydetailsform,

      ingredientFood: [...Primarydetailsform.ingredientFood, image.id],
    });
  };
  const allergenRefs = useRef([]);

  const handleClick = (index) => {
    if (allergenRefs.current[index]) {
      allergenRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };
  const deleteallergen = (imgeitem) => {
    const updatedallergens = allergensimage.filter(
      (item) => item.id !== imgeitem.id && item.image !== imgeitem.image
    );
    setAllergensimage(updatedallergens);
  };

  const deleteingredient = (imgeitem) => {
    const updatedingredient = seletedingredients.filter(
      (item) => item.id !== imgeitem.id && item.image !== imgeitem.image
    );
    setseletedingredients(updatedingredient);
  };

  const foodimagedeletion = (index) => {
    const updatedingredient = images.filter(
      (item, itemindex) => itemindex !== index
    );
    setImages(updatedingredient);
  };

  const handleAddItem = (category) => {
    if (Primarydetailsform[category].trim() !== "") {
      if (category === "dietary") {
        setdietryfoodarray([...dietryfoodarray, Primarydetailsform[category]]);
        // setshowaddnewdietary(false);
        // setDropdownStates({
        //   ...dropdownStates,
        //   dietarydropdown: false,
        // });
        setshowaddnewbtn({ ...showaddnewbtn, dietary: false });
      } else if (category === "cuisine") {
        setCuisinefoodarray([
          ...Cuisinefoodarray,
          Primarydetailsform[category],
        ]);
        // setshowaddnewcusine(false);
        setshowaddnewbtn({ ...showaddnewbtn, cuisine: false });
        setDropdownStates({
          ...dropdownStates,
          cuisinedropdown: false,
        });
      } else if (category === "mealType") {
        setmealtypefoodarray([
          ...mealtypefoodarray,
          Primarydetailsform[category],
        ]);
        setshowaddnewbtn({ ...showaddnewbtn, mealtype: false });
        // setshowaddnewmealtype(false);
        setDropdownStates({
          ...dropdownStates,
          mealTypedropdown: false,
        });
      } else if (category === "bestPair") {
        setbestpairfoodarray([
          ...bestpairfoodarray,
          Primarydetailsform[category],
        ]);
        // setshowaddnewbestpair(false);
        setshowaddnewbtn({ ...showaddnewbtn, bestpair: false });
        setDropdownStates({
          ...dropdownStates,
          bestPairdropdown: false,
        });
      } else if (category === "category") {
        setcategoryfoodarray([
          ...categoryfoodarray,
          Primarydetailsform[category],
        ]);
        setshowaddnewbtn({ ...showaddnewbtn, category: false });
        // setshowaddnewcategory(false);
        setDropdownStates({
          ...dropdownStates,
          categorydropdown: false,
        });
      } else if (category === "subCategory") {
        setsubcategoryfoodarray([
          ...subcategoryfoodarray,
          Primarydetailsform[category],
        ]);
        setshowaddnewbtn({ ...showaddnewbtn, subCategory: false });
        // setshowaddnewsubcategory(false);
        setDropdownStates({
          ...dropdownStates,
          subCategorydropdown: false,
        });
      }
    }
  };

  const inputRefs = useRef([]);
  const [inputs, setInputs] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleInput = (event, index) => {
    const { value, maxLength, name } = event.target;
    const key = event.key;

    // Move to the next input field if a value is entered
    if (value.length === maxLength && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to the previous input field if Backspace is pressed and the field is empty
    if (key === "Backspace" && value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    const updatedInputs = { ...inputs, [name]: value };

    // Update the inputs state
    setInputs(updatedInputs);

    // Concatenate inputs and update mastercode
    const concatenatedValue = Object.values(updatedInputs).join("");
    // setMastercode(concatenatedValue);
    setPrimarydetailsform({
      ...Primarydetailsform,
      masterCode: concatenatedValue,
    });
  };

  const dropdownshowing = (dropdownname, status) => {
    setDropdownStates({
      ...dropdownStates,
      dietarydropdown: false,
      cuisinedropdown: false,
      mealTypedropdown: false,
      bestPairdropdown: false,
      categorydropdown: false,
      subCategorydropdown: false,
      [dropdownname]: status,
    });
    if (
      dropdownname === "subCategorydropdown" &&
      !Primarydetailsform.category
    ) {
      setDropdownStates({ ...dropdownStates, subCategorydropdown: false });
    }
  };

  const handleKeyDowndietry = (event) => {
    if (event.key === "click") {
      alert("hi");
    }

    if (event.key === "Enter") {
      handleAddItem("dietary");
      setischecked((prevChecked) => ({
        ...prevChecked,
        dietary: Primarydetailsform.dietary,
      }));
      setDropdownStates({
        ...dropdownStates,
        dietarydropdown: false,
      });

      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        dietaryerror: "",
      });
    }
  };
  const handleKeyDowncuisine = (event) => {
    if (event.key === "Enter") {
      handleAddItem("cuisine");
      setDropdownStates({
        ...dropdownStates,
        cuisinedropdown: false,
      });
      setischecked((prevChecked) => ({
        ...prevChecked,
        cuisine: Primarydetailsform.cuisine,
      }));
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        cuisineerror: "",
      });
    }
  };
  const handleKeyDownmealtype = (event) => {
    if (event.key === "Enter") {
      handleAddItem("mealType");
      setDropdownStates({
        ...dropdownStates,
        mealTypedropdown: false,
      });
      setischecked((prevChecked) => ({
        ...prevChecked,
        mealType: Primarydetailsform.mealType,
      }));
      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        mealTypeerror: "",
      });
    }
  };
  const handleKeyDownbestpair = (event) => {
    if (event.key === "Enter") {
      handleAddItem("bestPair");
      setischecked((prevChecked) => ({
        ...prevChecked,
        bestPair: Primarydetailsform.bestPair,
      }));
      setDropdownStates({
        ...dropdownStates,
        bestPairdropdown: false,
      });
    }
  };
  const handleKeyDowncategory = (event) => {
    if (event.key === "Enter") {
      handleAddItem("category");
      setischecked((prevChecked) => ({
        ...prevChecked,
        category: Primarydetailsform.category,
      }));

      setDropdownStates({
        ...dropdownStates,
        categorydropdown: false,
      });

      setPrimarydetailsformerrors({
        ...Primarydetailsformerrors,
        categoryerror: "",
      });
    }
  };

  const handleKeyDownsubcategory = (event) => {
    if (event.key === "Enter") {
      handleAddItem("subCategory");
      setischecked((prevChecked) => ({
        ...prevChecked,
        subCategory: Primarydetailsform.subCategory,
      }));
      setDropdownStates({
        ...dropdownStates,
        subCategorydropdown: false,
      });
    }
  };
  const dropdownRefs = {
    dietary: useRef(null),
    cuisine: useRef(null),
    mealType: useRef(null),
    bestPair: useRef(null),
    category: useRef(null),
    subCategory: useRef(null),
  };
  // if (dropdownRefs[key].current && Primarydetailsform[key] !== undefined) { }

  const handleClickOutside = (event) => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (
        dropdownRefs[key].current &&
        !dropdownRefs[key].current.contains(event.target)
      ) {
        setDropdownStates((prevState) => ({
          ...prevState,
          [`${key}dropdown`]: false,
        }));
        setshowaddnewbtn((prevState) => ({
          ...prevState,
          [`${key}`]: false,
        }));
      }
    });
  };
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handledescriptiontextcolor=()=>{
    // alert("hi");
    setdescriptionstyle(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [Primarydetailsform]);

  const handleChangemastercode = (e) => {};
  return (
    <>
      <div className="mainpage">
        <div className="Primarymain">
          <div className="primecontainer">
            <div className="primarycontainer1">
              <div className="primaryinputfield itemname">
                <label htmlFor="" className="primarylables">
                  Itemname *
                </label>
                <input
                  type="text"
                  // placeholder="Item Name*"
                  name="itemName"
                  className={
                    Primarydetailsformerrors.itemNameerror && "itemnameinput"
                  }
                  value={Primarydetailsform.itemName}
                  onChange={handleInputChange}
                  autoComplete="off"
                  onBlur={errorvaliadtionitemname}
                />
                <p className="errormsgforinputfield">
                  {Primarydetailsformerrors.itemNameerror && (
                    <span> {Primarydetailsformerrors.itemNameerror}</span>
                  )}
                  {/* {
                   errorsvalidate.itemName&&  errorsvalidate.itemName
                  } */}
                </p>
              </div>
              <div
                className="primaryselectfields DietaryType"
                ref={dropdownRefs.dietary}
              >
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      dietarydropdown: !dropdownStates.dietarydropdown,
                      cuisinedropdown: false,
                      mealTypedropdown: false,
                      bestPairdropdown: false,
                      categorydropdown: false,
                      subCategorydropdown: false,
                    })
                  }
                    className="labelandinput"
                >
                  <label htmlFor="" className="primarylables">
                    DietaryType *
                  </label>
                  <input
                    type="text"
                    className="select"
                    // placeholder="DietaryType*"
                    name="dietary"
                    style={{
                      borderColor:
                        Primarydetailsformerrors.dietaryerror && "red",
                    }}
                    value={Primarydetailsform.dietary}
                    onChange={handleInputChange}
                    autoComplete="off"
                    onBlur={errorvaliadtiondietary}
                  />
                </div>

                <button className="arrowbtn">
                  {dropdownStates.dietarydropdown ? (
                    <img
                      src={dropdown}
                      alt=""
                      className="img2"
                      onClick={() => dropdownshowing("dietarydropdown", false)}
                    />
                  ) : (
                    <img
                      src={dropdown}
                      className="img1"
                      alt=""
                      onClick={() => dropdownshowing("dietarydropdown", true)}
                    />
                  )}
                </button>
                <p className="errormsgfordropdown">
                  {" "}
                  {Primarydetailsformerrors.dietaryerror && (
                    <span> {Primarydetailsformerrors.dietaryerror}</span>
                  )}
                </p>

                {dropdownStates.dietarydropdown && (
                  <div className="dropdown-containerprimary">
                    <div className="dropscroll">
                      {searching ||
                        (dropdownStates.dietarydropdown && (
                          <ul className="dropdown">
                            {dropdownoptionlist.dietary
                              ? Dietryfiltered.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.dietary === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "dietary",
                                          food
                                        );
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          dietaryerror: "",
                                        });
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          dietary: false,
                                        });

                                        dropdownshowing(
                                          "dietarydropdown",
                                          false
                                        );
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "dietary",
                                          food
                                        );
                                        dropdownshowing(
                                          "dietarydropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          dietary: false,
                                        });

                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          dietaryerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))
                              : dietryfoodarray.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.dietary === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "dietary",
                                          food
                                        );
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          dietaryerror: "",
                                        });
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          dietary: false,
                                        });

                                        dropdownshowing(
                                          "dietarydropdown",
                                          false
                                        );
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "dietary",
                                          food
                                        );
                                        dropdownshowing(
                                          "dietarydropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          dietary: false,
                                        });

                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          dietaryerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))}
                          </ul>
                        ))}
                    </div>

                    {showaddnewbtn.dietary && (
                      <div className="addnewitem">
                        <input
                          type="text"
                          onKeyDown={handleKeyDowndietry}
                          name="dietary"
                          autoComplete="off"
                          onChange={(e) =>
                            setPrimarydetailsform({
                              ...Primarydetailsform,
                              dietary: e.target.value,
                            })
                          }
                        />

                        <button
                          onClick={() => {
                            handleAddItem("dietary");
                            setischecked((prevChecked) => ({
                              ...prevChecked,
                              dietary: Primarydetailsform.dietary,
                            }));
                            setPrimarydetailsformerrors({
                              ...Primarydetailsformerrors,
                              dietaryerror: "",
                            });
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {!showaddnewbtn.dietary && (
                      <div className="addnewlist">
                        <button
                          onClick={() =>
                            setshowaddnewbtn({
                              ...showaddnewbtn,
                              dietary: true,
                            })
                          }
                        >
                          + Add new
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div
                className="primaryselectfields cuisine"
                ref={dropdownRefs.cuisine}
              >
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      dietarydropdown: false,
                      cuisinedropdown: !dropdownStates.cuisinedropdown,
                      mealTypedropdown: false,
                      bestPairdropdown: false,
                      categorydropdown: false,
                      subCategorydropdown: false,
                    })
                  }
                    className="labelandinput"
                >
                  <label htmlFor="" className="primarylables">
                    Cuisine *
                  </label>
                  <input
                    type="text"
                    className="select"
                    name="cuisine"
                    // placeholder="Cuisine*"
                    style={{
                      borderColor:
                        Primarydetailsformerrors.cuisineerror && "red",
                    }}
                    onBlur={errorvaliadtioncuisine}
                    value={Primarydetailsform.cuisine}
                    onChange={handleInputChange}
                    autoComplete="off"
                  />
                </div>

                <button className="arrowbtn">
                  {dropdownStates.cuisinedropdown ? (
                    <img
                      src={dropdown}
                      alt=""
                      className="img2"
                      onClick={() => dropdownshowing("cuisinedropdown", false)}
                    />
                  ) : (
                    <img
                      src={dropdown}
                      className="img1"
                      alt=""
                      onClick={() => dropdownshowing("cuisinedropdown", true)}
                    />
                  )}
                </button>
                <p className="errormsgfordropdown">
                  {" "}
                  {Primarydetailsformerrors.cuisineerror && (
                    <span> {Primarydetailsformerrors.cuisineerror}</span>
                  )}
                </p>

                {dropdownStates.cuisinedropdown && (
                  <div className="dropdown-containerprimary">
                    <div className="dropscroll">
                      {searching ||
                        (dropdownStates.cuisinedropdown && (
                          <ul className="dropdown">
                            {dropdownoptionlist.cuisine
                              ? Cuisinefiltered.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.cuisine === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "cuisine",
                                          food
                                        );
                                        dropdownshowing(
                                          "cuisinedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          cuisine: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          cuisineerror: "",
                                        });
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "cuisine",
                                          food
                                        );
                                        dropdownshowing(
                                          "cuisinedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          cuisine: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          cuisineerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))
                              : Cuisinefoodarray.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.cuisine === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "cuisine",
                                          food
                                        );
                                        dropdownshowing(
                                          "cuisinedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          cuisine: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          cuisineerror: "",
                                        });
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "cuisine",
                                          food
                                        );
                                        dropdownshowing(
                                          "cuisinedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          cuisine: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          cuisineerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))}
                          </ul>
                        ))}
                    </div>

                    {showaddnewbtn.cuisine && (
                      <div className="addnewitem">
                        <input
                          type="text"
                          name="cuisine"
                          onKeyDown={handleKeyDowncuisine}
                          autoComplete="off"
                          onChange={(e) =>
                            setPrimarydetailsform({
                              ...Primarydetailsform,
                              cuisine: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => {
                            handleAddItem("cuisine");
                            setischecked((prevChecked) => ({
                              ...prevChecked,
                              cuisine: Primarydetailsform.cuisine,
                            }));
                            setPrimarydetailsformerrors({
                              ...Primarydetailsformerrors,
                              cuisineerror: "",
                            });
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {!showaddnewbtn.cuisine && (
                      <div className="addnewlist">
                        <button
                          onClick={() =>
                            setshowaddnewbtn({
                              ...showaddnewbtn,
                              cuisine: true,
                            })
                          }
                        >
                          +Add new
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div
                className="primaryselectfields mealtype"
                ref={dropdownRefs.mealType}
              >
                <div
                  onClick={() =>
                    setDropdownStates({
                      ...dropdownStates,
                      dietarydropdown: false,
                      cuisinedropdown: false,
                      mealTypedropdown: !dropdownStates.mealTypedropdown,
                      bestPairdropdown: false,
                      categorydropdown: false,
                      subCategorydropdown: false,
                    })
                  }
                    className="labelandinput"
                >
                  <label htmlFor="" className="primarylables">
                    MealType *
                  </label>
                  <input
                    type="text"
                    className="select"
                    // placeholder="mealtype*"
                    autoComplete="off"
                    name="mealType"
                    style={{
                      borderColor:
                        Primarydetailsformerrors.mealTypeerror && "red",
                    }}
                    onBlur={errorvaliadtionmealtype}
                    value={Primarydetailsform.mealType}
                    onChange={handleInputChange}
                  />
                </div>

                <button className="arrowbtn">
                  {dropdownStates.mealTypedropdown ? (
                    <img
                      src={dropdown}
                      alt=""
                      className="img2"
                      onClick={() => dropdownshowing("mealTypedropdown", false)}
                    />
                  ) : (
                    <img
                      src={dropdown}
                      className="img1"
                      alt=""
                      onClick={() => dropdownshowing("mealTypedropdown", true)}
                    />
                  )}
                </button>
                <p className="errormsgfordropdown">
                  {" "}
                  {Primarydetailsformerrors.mealTypeerror && (
                    <span> {Primarydetailsformerrors.mealTypeerror}</span>
                  )}
                </p>

                {dropdownStates.mealTypedropdown && (
                  <div className="dropdown-containerprimary">
                    <div className="dropscroll">
                      {searching ||
                        (dropdownStates.mealTypedropdown && (
                          <ul className="dropdown">
                            {dropdownoptionlist.mealType
                              ? mealtypefiltered.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.mealType === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "mealType",
                                          food
                                        );
                                        dropdownshowing(
                                          "mealTypedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          mealType: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          mealTypeerror: "",
                                        });
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "mealType",
                                          food
                                        );
                                        dropdownshowing(
                                          "mealTypedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          mealType: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          mealTypeerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))
                              : mealtypefoodarray.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.mealType === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "mealType",
                                          food
                                        );
                                        dropdownshowing(
                                          "mealTypedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          mealType: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          mealTypeerror: "",
                                        });
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "mealType",
                                          food
                                        );
                                        dropdownshowing(
                                          "mealTypedropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          mealType: false,
                                        });
                                        setPrimarydetailsformerrors({
                                          ...Primarydetailsformerrors,
                                          mealTypeerror: "",
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))}
                          </ul>
                        ))}
                    </div>

                    {showaddnewbtn.mealtype && (
                      <div className="addnewitem">
                        <input
                          type="text"
                          name="mealType"
                          autoComplete="off"
                          onKeyDown={handleKeyDownmealtype}
                          onChange={(e) =>
                            setPrimarydetailsform({
                              ...Primarydetailsform,
                              mealType: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => {
                            handleAddItem("mealType");
                            setischecked((prevChecked) => ({
                              ...prevChecked,
                              mealType: Primarydetailsform.mealType,
                            }));
                            setPrimarydetailsformerrors({
                              ...Primarydetailsformerrors,
                              mealTypeerror: "",
                            });
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {!showaddnewbtn.mealtype && (
                      <div className="addnewlist">
                        <button
                          onClick={() =>
                            setshowaddnewbtn({
                              ...showaddnewbtn,
                              mealtype: true,
                            })
                          }
                        >
                          +Add new
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div
                className="primaryselectfields bestpairfood"
                ref={dropdownRefs.bestPair}
              >
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div
                    onClick={() =>
                      setDropdownStates({
                        ...dropdownStates,
                        bestPairdropdown: !dropdownStates.bestPairdropdown,
                        dietarydropdown: false,
                        cuisinedropdown: false,
                        mealTypedropdown: false,

                        categorydropdown: false,
                        subCategorydropdown: false,
                      })
                    }
                  >
                    <label htmlFor="" className="primarylables">
                      Best paired with food items *
                    </label>
                    <input
                      type="text"
                      className="select"
                      // placeholder="Best paired with food items"
                      name="bestPair"
                      value={Primarydetailsform.bestPair}
                      onChange={handleInputChange}
                      autoComplete="off"
                    />
                  </div>
                  <div className="bestpairtooltip">
                    <Tooltip message="message">
                      <div className="icon-background">
                        <img src={info} alt="" width={20} height={20} />
                      </div>
                    </Tooltip>
                  </div>
                </div>

                <button className="arrowbtn bestpairarrowbtn">
                  {dropdownStates.bestPairdropdown ? (
                    <img
                      src={dropdown}
                      alt=""
                      className="img2"
                      onClick={() => dropdownshowing("bestPairdropdown", false)}
                    />
                  ) : (
                    <img
                      src={dropdown}
                      className="img1"
                      alt=""
                      onClick={() => dropdownshowing("bestPairdropdown", true)}
                    />
                  )}
                </button>

                {dropdownStates.bestPairdropdown && (
                  <div className="dropdown-containerprimary">
                    <div className="dropscroll">
                      {searching ||
                        (dropdownStates.bestPairdropdown && (
                          <ul className="dropdown">
                            {dropdownoptionlist.bestPair
                              ? bestpairfiltered.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.bestPair === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "bestPair",
                                          food
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          bestPair: false,
                                        });
                                        dropdownshowing(
                                          "bestPairdropdown",
                                          false
                                        );
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "bestPair",
                                          food
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          bestPair: false,
                                        });
                                        dropdownshowing(
                                          "bestPairdropdown",
                                          false
                                        );
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))
                              : bestpairfoodarray.map((food, index) => (
                                  <div key={index} className="dropdowns">
                                    <input
                                      type="radio"
                                      readOnly
                                      checked={ischecked.bestPair === food}
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "bestPair",
                                          food
                                        );
                                        dropdownshowing(
                                          "bestPairdropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          bestPair: false,
                                        });
                                      }}
                                    />
                                    <li
                                      onClick={() => {
                                        handleDropdownSelection(
                                          "bestPair",
                                          food
                                        );
                                        dropdownshowing(
                                          "bestPairdropdown",
                                          false
                                        );
                                        setdropdownoptionlist({
                                          ...dropdownoptionlist,
                                          bestPair: false,
                                        });
                                      }}
                                    >
                                      {food}
                                    </li>
                                  </div>
                                ))}
                          </ul>
                        ))}
                    </div>

                    {showaddnewbtn.bestpair && (
                      <div className="addnewitem">
                        <input
                          type="text"
                          name="bestPair"
                          autoComplete="off"
                          onKeyDown={handleKeyDownbestpair}
                          onChange={(e) =>
                            setPrimarydetailsform({
                              ...Primarydetailsform,
                              bestPair: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => {
                            handleAddItem("bestPair");
                            setischecked((prevChecked) => ({
                              ...prevChecked,
                              bestPair: Primarydetailsform.bestPair,
                            }));
                          }}
                        >
                          Add
                        </button>
                      </div>
                    )}
                    {!showaddnewbtn.bestpair && (
                      <div className="addnewlist">
                        <button
                          onClick={() =>
                            setshowaddnewbtn({
                              ...showaddnewbtn,
                              bestpair: true,
                            })
                          }
                        >
                          + Add new
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="primaryinputfield">
              <div className="countbox">
              <label htmlFor="" className="primarylables">
                  Description
                </label>
                <textarea
                  onChange={handledescriptionChange}
                  // placeholder="Description"
                  className="description"
                  name="description"
                  autoComplete="off"
                  value={Primarydetailsform.description}
                />
                <div className="character-count" style={{color:(Math.round(
                    (Math.round(description.length) / maxLength) * 100
                  ))==100 && "red"}} >
                    
                    
                  {Math.round(
                    (Math.round(description.length) / maxLength) * 100
                  )}



                  /{maxLength}

                  
                    {/* {(Math.round(
                      (Math.round(description.length) / maxLength) * 100
                    ))==100 && handledescriptiontextcolor
                    }  */}
                  
                </div>
              </div>

               

              </div>
              <div className="foodimage">
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
                        onClick={() => foodimagedeletion(index)}
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
                    src={addimage}
                    alt=""
                    className="addingimg"
                    onClick={handleadimage}
                  />
                </div>
              </div>
              <div className="primaryinputfield alcohol">
                <h3>Contains Alcohol ?</h3>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <input
                    type="radio"
                    className="alcoholradio1"
                    checked={Primarydetailsform.alcohol === "yes"}
                    value="yes"
                    name="alcohol"
                    onClick={handleRadioChangeprimary}
                  />
                  <span id="alcoholradiotext1">Yes </span>
                  <input
                    type="radio"
                    className="alcoholradio2"
                    value="no"
                    name="alcohol"
                    checked={Primarydetailsform.alcohol === "no"}
                    onClick={handleRadioChangeprimary}
                  />
                  <span id="alcoholradiotext2">No</span>
                </div>
              </div>
            </div>
            <div className="primarycontainer2">
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="primaryinputfield itemcode">
                  <div>
                    <label htmlFor="" className="primarylables">
                      ItemCode
                    </label>
                    <input
                      type="text"
                      // placeholder="Item Code"
                      name="itemCode"
                      value={Primarydetailsform.itemCode}
                      autoComplete="off"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="itemcodetooltip">
                  <Tooltip message="message">
                    <div className="icon-background">
                      <img src={info} alt="" width={20} height={20} />
                    </div>
                  </Tooltip>
                </div>
              </div>

              <div className="primaryinputfield barcode">
                <label htmlFor="" className="primarylables">
                  Upc / Barcode number
                </label>
                <input
                  type="text"
                  // placeholder="Upc / Barcode number"
                  name="barCode"
                  value={Primarydetailsform.barCode}
                  autoComplete="off"
                  onChange={handleInputChange}
                />
              </div>

              <div className=" popularitem">
                <input type="checkbox" />
                <span>Popular item ( 3/10 )</span>
              </div>
              <div className="categoryfields">
                <div
                  className="primaryselectfields category"
                  ref={dropdownRefs.category}
                >
                  <div
                    onClick={() =>
                      setDropdownStates({
                        ...dropdownStates,
                        categorydropdown: !dropdownStates.categorydropdown,
                        bestPairdropdown: false,
                        dietarydropdown: false,
                        cuisinedropdown: false,
                        mealTypedropdown: false,

                        subCategorydropdown: false,
                      })
                    }
                    className="labelandinput"
                  >
                    <label htmlFor="" className="primarylables">
                      Category*
                    </label>
                    <input
                      type="text"
                      className="select"
                      // placeholder="category*"
                      name="category"
                      autoComplete="off"
                      style={{
                        borderColor:
                          Primarydetailsformerrors.categoryerror && "red",
                      }}
                      onBlur={errorvaliadtioncatagory}
                      value={Primarydetailsform.category}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button className="arrowbtn">
                    {dropdownStates.categorydropdown ? (
                      <img
                        src={dropdown}
                        alt=""
                        className="img2"
                        onClick={() =>
                          dropdownshowing("categorydropdown", false)
                        }
                      />
                    ) : (
                      <img
                        src={dropdown}
                        className="img1"
                        alt=""
                        onClick={() =>
                          dropdownshowing("categorydropdown", true)
                        }
                      />
                    )}
                  </button>
                  <p className="errormsgfordropdown">
                    {" "}
                    {Primarydetailsformerrors.categoryerror && (
                      <span> {Primarydetailsformerrors.categoryerror}</span>
                    )}
                  </p>

                  {dropdownStates.categorydropdown && (
                    <div className="dropdown-containerprimary">
                      <div className="dropscroll">
                        {searching ||
                          (dropdownStates.categorydropdown && (
                            <ul className="dropdown">
                              {dropdownoptionlist.category
                                ? Categoryfiltered.map((food, index) => (
                                    <div key={index} className="dropdowns">
                                      <input
                                        type="radio"
                                        readOnly
                                        checked={ischecked.category === food}
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "category",
                                            food
                                          );
                                          dropdownshowing(
                                            "categorydropdown",
                                            false
                                          );

                                          setdropdownoptionlist({
                                            ...dropdownStates,
                                            category: false,
                                          });
                                          // setcategoryshowingdropdown(false);
                                          setPrimarydetailsformerrors({
                                            ...Primarydetailsformerrors,
                                            categoryerror: "",
                                          });
                                        }}
                                      />
                                      <li
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "category",
                                            food
                                          );
                                          dropdownshowing(
                                            "categorydropdown",
                                            false
                                          );
                                          setdropdownoptionlist({
                                            ...dropdownStates,
                                            category: false,
                                          });
                                          // setcategoryshowingdropdown(false);
                                          setPrimarydetailsformerrors({
                                            ...Primarydetailsformerrors,
                                            categoryerror: "",
                                          });
                                        }}
                                      >
                                        {food}
                                      </li>
                                    </div>
                                  ))
                                : categoryfoodarray.map((food, index) => (
                                    <div key={index} className="dropdowns">
                                      <input
                                        type="radio"
                                        readOnly
                                        checked={ischecked.category === food}
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "category",
                                            food
                                          );
                                          dropdownshowing(
                                            "categorydropdown",
                                            false
                                          );
                                          setdropdownoptionlist({
                                            ...dropdownStates,
                                            category: false,
                                          });
                                          setPrimarydetailsformerrors({
                                            ...Primarydetailsformerrors,
                                            categoryerror: "",
                                          });
                                        }}
                                      />
                                      <li
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "category",
                                            food
                                          );
                                          dropdownshowing(
                                            "categorydropdown",
                                            false
                                          );
                                          setdropdownoptionlist({
                                            ...dropdownStates,
                                            category: false,
                                          });
                                          setPrimarydetailsformerrors({
                                            ...Primarydetailsformerrors,
                                            categoryerror: "",
                                          });
                                        }}
                                      >
                                        {food}
                                      </li>
                                    </div>
                                  ))}
                            </ul>
                          ))}
                      </div>

                      {showaddnewbtn.category && (
                        <div className="addnewitem">
                          <input
                            type="text"
                            name="category"
                            autoComplete="off"
                            onKeyDown={handleKeyDowncategory}
                            onChange={(e) => {
                              setPrimarydetailsform({
                                ...Primarydetailsform,
                                category: e.target.value,
                              });
                            }}
                          />
                          <button
                            onClick={() => {
                              handleAddItem("category");
                              setischecked((prevChecked) => ({
                                ...prevChecked,
                                category: Primarydetailsform.category,
                              }));
                              setPrimarydetailsformerrors({
                                ...Primarydetailsformerrors,
                                categoryerror: "",
                              });
                            }}
                          >
                            Add
                          </button>
                        </div>
                      )}
                      {!showaddnewbtn.category && (
                        <div className="addnewlist">
                          <button
                            onClick={() =>
                              setshowaddnewbtn({
                                ...showaddnewbtn,
                                category: true,
                              })
                            }
                          >
                            + Add new
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div
                  className="primaryselectfields subcategory"
                  ref={dropdownRefs.subCategory}
                >
                  <div
                    onClick={() =>
                      setDropdownStates({
                        ...dropdownStates,
                        subCategorydropdown:
                          !dropdownStates.subCategorydropdown,
                        categorydropdown: false,
                        bestPairdropdown: false,
                        dietarydropdown: false,
                        cuisinedropdown: false,
                        mealTypedropdown: false,
                      })
                    }
                  >
                    <label htmlFor="" className="primarylables">
                      SubCategory
                    </label>
                    <input
                      type="text"
                      className="select"
                      // placeholder="subcategory*"
                      name="subcategory"
                      disabled={Primarydetailsform.category ? false : true}
                      style={{
                        borderColor:
                          !Primarydetailsform.category && "rgba(0, 0, 0, 0.2)",
                        opacity: !Primarydetailsform.category && "50%",
                      }}
                      autoComplete="off"
                      value={Primarydetailsform.subCategory}
                      onChange={handleInputChange}
                    />
                  </div>

                  <button className="arrowbtn">
                    {dropdownStates.subCategorydropdown ? (
                      <img
                        src={dropdown}
                        alt=""
                        className="img2"
                        onClick={() =>
                          dropdownshowing("subCategorydropdown", false)
                        }
                      />
                    ) : (
                      <img
                        src={dropdown}
                        className="img1"
                        alt=""
                        onClick={() =>
                          dropdownshowing("subCategorydropdown", true)
                        }
                      />
                    )}
                  </button>

                  {dropdownStates.subCategorydropdown && (
                    <div className="dropdown-containerprimary">
                      <div className="dropscroll">
                        {searching ||
                          (dropdownStates.subCategorydropdown && (
                            <ul className="dropdown">
                              {dropdownoptionlist.subCategory
                                ? Subcategoryfiltered.map((food, index) => (
                                    <div key={index} className="dropdowns">
                                      <input
                                        type="radio"
                                        readOnly
                                        checked={ischecked.subCategory === food}
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "subCategory",
                                            food
                                          );

                                          setdropdownoptionlist({
                                            ...dropdownoptionlist,
                                            subCategory: false,
                                          });

                                          dropdownshowing(
                                            "subCategorydropdown",
                                            false
                                          );
                                        }}
                                      />
                                      <li
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "subCategory",
                                            food
                                          );
                                          setdropdownoptionlist({
                                            ...dropdownoptionlist,
                                            subCategory: false,
                                          });
                                          dropdownshowing(
                                            "subCategorydropdown",
                                            false
                                          );
                                        }}
                                      >
                                        {food}
                                      </li>
                                    </div>
                                  ))
                                : subcategoryfoodarray.map((food, index) => (
                                    <div key={index} className="dropdowns">
                                      <input
                                        type="radio"
                                        readOnly
                                        checked={ischecked.subCategory === food}
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "subCategory",
                                            food
                                          );

                                          setdropdownoptionlist({
                                            ...dropdownoptionlist,
                                            subCategory: false,
                                          });
                                          dropdownshowing(
                                            "subCategorydropdown",
                                            false
                                          );
                                        }}
                                      />
                                      <li
                                        onClick={() => {
                                          handleDropdownSelection(
                                            "subCategory",
                                            food
                                          );
                                          setdropdownoptionlist({
                                            ...dropdownoptionlist,
                                            subCategory: false,
                                          });
                                          dropdownshowing(
                                            "subCategorydropdown",
                                            false
                                          );
                                        }}
                                      >
                                        {food}
                                      </li>
                                    </div>
                                  ))}
                            </ul>
                          ))}
                      </div>

                      {showaddnewbtn.subCategory && (
                        <div className="addnewitem">
                          <input
                            type="text"
                            name="subCategory"
                            autoComplete="off"
                            onKeyDown={handleKeyDownsubcategory}
                            onChange={(e) =>
                              setPrimarydetailsform({
                                ...Primarydetailsform,
                                subCategory: e.target.value,
                              })
                            }
                          />
                          <button
                            onClick={() => {
                              handleAddItem("subCategory");
                              setischecked((prevChecked) => ({
                                ...prevChecked,
                                subCategory: Primarydetailsform.subCategory,
                              }));
                            }}
                          >
                            Add
                          </button>
                        </div>
                      )}
                      {!showaddnewbtn.subCategory && (
                        <div className="addnewlist">
                          <button
                            onClick={() =>
                              setshowaddnewbtn({
                                ...showaddnewbtn,
                                subCategory: true,
                              })
                            }
                          >
                            + Add new
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="primaryinputfield ">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div className="description">
                    <p> Allergens*</p>
                    <div className="searchingicon">
                      <input
                        type="text"
                        placeholder="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      <img src={searchicon} alt="" />
                    </div>
                    <div className="allergensselection">
                      <div className="selectedallergens">
                        {allergensimage.length > 0 &&
                          allergensimage.map((imageitem, index) => (
                            <div
                              key={index}
                              className="imageitem"
                              ref={(el) => (allergenRefs.current[index] = el)}
                            >
                              <img
                                className="images"
                                src={imageitem.image}
                                alt={`Image ${index + 1}`}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                }}
                                className="textwbtn"
                              >
                                <p>{imageitem.name}</p>

                                <button
                                  onClick={() => deleteallergen(imageitem)}
                                >
                                  {" "}
                                  <img
                                    src={deleteicon}
                                    alt=""
                                    className="deleteimg"
                                  />{" "}
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                      <div className="allergens imgalignment">
                        {filteredImages
                          ? filteredImages.map((image, index) => (
                              <div
                                className="eachimg"
                                key={index}
                                onClick={() => handleImageClick(image)}
                              >
                                <img
                                  className="images"
                                  src={image.image}
                                  alt={`Image ${index + 1}`}
                                />
                                <p>{image.name}</p>
                              </div>
                            ))
                          : imagelisting.map((image, index) => (
                              <div
                                className="eachimg"
                                key={index}
                                onClick={() => handleImageClick(image)}
                              >
                                <img
                                  className="images"
                                  src={image.image}
                                  alt={`Image ${index + 1}`}
                                />
                                <p>{image.name}</p>
                              </div>
                            ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: "75%" }}>
                    <Tooltip message="message">
                      <div className="icon-background">
                        <img src={info} alt="" width={20} height={20} />
                        {/* <FaExclamation color="black" size={5} /> */}
                      </div>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="primarycontainer3">
            <div className="primaryinputfield ">
              <div className="description">
                <p> Ingredients*</p>
                <div className="searchingicon">
                  <input
                    type="text"
                    placeholder="search"
                    value={searchingredients}
                    onChange={(e) => setsearchingredients(e.target.value)}
                  />
                  <img src={searchicon} alt="" />
                </div>
                <div className="allergensselection">
                  <div className="selectedallergens">
                    {seletedingredients.length > 0 &&
                      seletedingredients.map((imageitem, index) => (
                        <div key={index} className="imageitem">
                          <img
                            className="images"
                            src={imageitem.image}
                            alt={`Image ${index + 1}`}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                            className="textwbtn"
                          >
                            <p>{imageitem.name}</p>
                            <button onClick={() => deleteingredient(imageitem)}>
                              {" "}
                              <img
                                src={deleteicon}
                                alt=""
                                className="deleteimg"
                              />{" "}
                            </button>
                          </div>
                        </div>
                      ))}
                  </div>
                  <div className="allergens imgalignment">
                    {filteredimg
                      ? filteredimg.map((image, index) => (
                          <div
                            className="eachimg"
                            key={index}
                            onClick={() => handleImageClick2(image)}
                          >
                            <img
                              className="images"
                              src={image.image}
                              alt={`Image ${index + 1}`}
                            />
                            <p>{image.name}</p>
                          </div>
                        ))
                      : ingredientimagelist.map((image, index) => (
                          <div
                            className="eachimg"
                            key={index}
                            onClick={() => handleImageClick2(image)}
                          >
                            <div className="imagelist">
                              <img
                                className="images"
                                src={image.image}
                                alt={`Image ${index + 1}`}
                              />
                              <p>{image.name}</p>
                            </div>
                          </div>
                        ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="otherdetails">
              <h3>Other Details</h3>
              <div className="calorie primaryinputfield">
                <div className="caloriewithsapn">
                  <label htmlFor="" className="primarylables">
                    Calorie Point
                  </label>
                  <input
                    type="text"
                    // placeholder="Calorie Point"
                    autoComplete="off"
                    name="caloriePoint"
                    value={Primarydetailsform.caloriePoint}
                    onChange={handleInputChange}
                  />{" "}
                  <span className="caloriespan">Cal</span>
                </div>

                <div className="calorieradio">
                  <input
                    type="radio"
                    className="calorieradio1"
                    name="selectedOption"
                    value="100grams"
                    readOnly
                    checked={Primarydetailsform.selectedOption === "100grams"}
                    onClick={handleRadioChangeprimary}
                  />
                  <span id="calorietext1"> per 100 grams </span>
                  <input
                    type="radio"
                    className="calorieradio2"
                    name="selectedOption"
                    value="serving"
                    readOnly
                    checked={Primarydetailsform.selectedOption === "serving"}
                    onClick={handleRadioChangeprimary}
                  />
                  <span id="calorietext2">per serving</span>
                </div>
              </div>
              <div className="portionsize primaryinputfield">
                <div className="portioninput">
                  <label htmlFor="" className="primarylables">
                    Portion Size
                  </label>
                  <input
                    type="text"
                    // placeholder="Portion Size"
                    className="portionsizeinput1"
                    name="portionSize"
                    autoComplete="off"
                    value={Primarydetailsform.portionSize}
                    onChange={handleInputChange}
                  />
                  {Primarydetailsform.portionSizeSeleted ===
                  "Portion(count)" ? (
                    <span className="portionspanpiecse">pieces</span>
                  ) : (
                    <span className="portionspangrams">grams/ml</span>
                  )}
                </div>

                <div className="portionsizeradio">
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <input
                      type="radio"
                      className="portionsizeradio1"
                      readOnly
                      checked={
                        Primarydetailsform.portionSizeSeleted ===
                        "Portion(count)"
                      }
                      value="Portion(count)"
                      name="portionSizeSeleted"
                      onClick={handleRadioChangeprimary}
                    />
                    <span id="portionsizetext1">Portion(count) </span>
                    <input
                      type="radio"
                      className="portionsizeradio2"
                      name="portionSizeSeleted"
                      value="grams/ml"
                      readOnly
                      checked={
                        Primarydetailsform.portionSizeSeleted === "grams/ml"
                      }
                      onClick={handleRadioChangeprimary}
                    />
                    <span id="portionsizetext2">grams/ml</span>
                    <div className="portionsizetooltip">
                      <Tooltip message="message">
                        <div className="icon-background">
                          <img src={info} alt="" width={20} height={20} />
                          {/* <FaExclamation color="black" size={5} /> */}
                        </div>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Taxclass primaryinputfield">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="" className="primarylables">
                      Tax class Association
                    </label>
                    <input
                      type="text"
                      // placeholder="Tax Class Association*"
                      autoComplete="off"
                      maxLength={2}
                      name="taxClassAssociation"
                      onBlur={errorvaliadtiontaxclass}
                      value={Primarydetailsform.taxClassAssociation}
                      onChange={handleInputChange}
                    />
                    <p className="errormsgforinputfield">
                      {Primarydetailsformerrors.taxClassAssociationerror && (
                        <span>
                          {Primarydetailsformerrors.taxClassAssociationerror}
                        </span>
                      )}
                    </p>
                  </div>
                  <div style={{ marginTop: "25px" }}>
                    <Tooltip message="message">
                      <div className="icon-background">
                        <img src={info} alt="" width={20} height={20} />
                        {/* <FaExclamation color="black" size={5} /> */}
                      </div>
                    </Tooltip>
                  </div>
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>

                <div className="MasterCode">
                  {/* <p>Master Item Code</p> */}
                  <span>Master Item Code</span>
                  <div className="mastecodeinputs">
                    <input
                      type="text"
                      name="input1"
                      value={inputs.input1}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      id=""
                      maxLength={1}
                      ref={(el) => (inputRefs.current[0] = el)}
                      onChange={(event) => {
                        handleInput(event, 0);
                      }}
                      onKeyUp={(event) => handleInput(event, 0)}
                    />
                    <input
                      type="text"
                      name="input2"
                      value={inputs.input2}
                      id=""
                      maxLength={1}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      ref={(el) => (inputRefs.current[1] = el)}
                      onChange={(event) => {
                        handleInput(event, 1);
                      }}
                      onKeyUp={(event) => handleInput(event, 1)}
                    />
                    <input
                      type="text"
                      name="input3"
                      value={inputs.input3}
                      maxLength={1}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      ref={(el) => (inputRefs.current[2] = el)}
                      onChange={(event) => {
                        handleInput(event, 2);
                      }}
                      onKeyUp={(event) => handleInput(event, 2)}
                    />
                    <input
                      type="text"
                      name="input4"
                      value={inputs.input4}
                      maxLength={1}
                      onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      ref={(el) => (inputRefs.current[3] = el)}
                      onChange={(event) => {
                        handleInput(event, 3);
                      }}
                      onKeyUp={(event) => handleInput(event, 3)}
                    />

                    <Tooltip message="message">
                      <div className="icon-background">
                        <img src={info} alt="" width={20} height={20} />
                        {/* <FaExclamation color="black" size={5} /> */}
                      </div>
                    </Tooltip>
                  </div>
                  
                </div>
                <p className="errormsgfordropdown erormsgformastercode">
                    {" "}
                    {Primarydetailsformerrors.masterCodeerror && (
                      <span> {Primarydetailsformerrors.masterCodeerror}</span>
                    )}
                  </p>
                </div>
               
              </div>




              
            </div>
            
          </div>
        </div>
        <div className="buttoncomponentprimary">
                <Savenext
                  selectedpage="primary"
                  formData={Primarydetailsform}
                  validation={validationform}
                  formclear={handlecleardata}
                />
              </div>
      </div>
      {/* <button
          onClick={() => {
            console.log("done",selectedOption)
            console.log("primary details", Primarydetailsform);
            
          }}
        >
          click
        </button> */}
    </>
  );
};

export default PrimaryDetails;



// {
//   "locationId":"9c485244-afd4-11eb-b6c7-42010a010026",
//   "itemCode":"",
//   "altName":"alt name",
//   "itemName":"item name",
//   "description":"desc",
//   "price":"12",
//   "categoryId":"2434d5ed-8144-408f-b75a-c0e50f8de102",
//   "subCategoryId":"",
//   "kitchenStations":["3bdfa61-0e4f-48e6-b2bb-b4bd1d103950"],
//   "taxFeeId":"",
//   "ingredients":["03348389-4b2a-4fca-affa-6ad4291b0241"],
//   "modifiers":[],
//   "availabilityId":["b1492143-2c4c-4a4f-bc49-a3b99cbb1349"],
//   "category":"",
//   "subCategory":"",
//   "itemId":null
// }
