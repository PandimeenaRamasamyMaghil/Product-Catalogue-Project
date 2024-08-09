import { useState, useEffect } from "react";
import React from "react";
import "./Navigation.scss";
import {
  useNavigate,
  useLocation,
  Outlet as RouterOutlet,
} from "react-router-dom";

const Navigationpage = ({}) => {
  const categories = [
    "Primary Details",
    "Pricing and kitchen details",
    "Item customizations",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const { pagename } = location.state || {};
  console.log("pagename", pagename);
  const handleCategoryClick = (category) => {
    const path = category.replace(/\s+/g, "");
    navigate(`/Navigationpage/${path}`, { state: { pagename: category } });
  };

  useEffect(() => {
    if (!pagename) {
      navigate(`/Navigationpage/PrimaryDetails`, {
        state: { pagename: "Primary Details" },
      });
    }
  }, [pagename, navigate]);
  
  return (
    <>
      <div className="navigation">
        <h1 className="Mainheading"> Creating new menu item</h1>
        <nav className="nav">
          <ul className="listofnavigation">
            {categories.map((category, index) => (
              <li
                key={category}
                className="lists"
                onClick={() => handleCategoryClick(category)}
              >
                <h1
                  className={`list-text  ${
                    category === pagename ? "activetext" : ""
                  }
                    }`}
                >
                  {`Step ${index + 1}: ${category}`}
                </h1>
                <div
                  className={` navbar  ${category === pagename ? "active" : ""}
                    }`}
                ></div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <RouterOutlet />
    </>
  );
};

export default Navigationpage;
// <>
//   <div className="navigation">
//     <h1 className="Mainheading"> Creating new menu item</h1>

//     <nav>
//       <ul className="listofnavigation">
//         {pages.map((page, index) => (
//           <div key={index}>
//             <li className="lists" onClick={() => handleCategoryClick(page)}>
//               <h1
//                 className={`list-text ${
//                   activeCategory === page ? "activetext" : ""
//                 }`}
//               >
//                 {page}
//               </h1>
//               <div
//                 className={` navbar ${
//                   activeCategory === page ? "active" : ""
//                 }`}
//               ></div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </nav>
//     <div>
//       {activeCategory === "Step 1: Primary Details" && <PrimaryDetails />}
//       {activeCategory === "Step 2: Pricing and kitchen details" && (
//         <PricingDetails />
//       )}
//       {activeCategory === "Step 3: Item customizations" && (
//         <ItemCustomizations />
//       )}
//     </div>
//   </div>
// </>
