import ItemCustomizations from "./Components/Item Customizations/ItemCustomizations";
import Navigation from "./Components/Navigation/Navigation"
import Landing from './Components/Landingpage'
import  {BrowserRouter}  from 'react-router-dom';
import Sidenav from "./Components/SideNav/Sidenav"
import Header from "./Components/Item Customizations/MainLandingPage/Header/Header";
import Slider from "./Components/Slider/Slider";
import Dragging from "./Components/Menulisting/Dragging";
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
