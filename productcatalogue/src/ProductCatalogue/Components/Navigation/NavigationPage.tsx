import { useState, useEffect, useContext } from "react";
import React from "react";
import "./Navigation.scss";
import { Contextpagejs } from '../../../Pages/contextpage'
import {
  useNavigate,
  useLocation,
  Outlet as RouterOutlet,
} from "react-router-dom";

const Navigationpage = () => {
  const { isExpanded, setIsExpanded } = useContext(Contextpagejs);

  const categories = [
    "Primary Details",
    "Pricing and kitchen details",
    "Item customizations",
  ];
  const navigate = useNavigate();
  const location = useLocation();
  const { pagename } = location.state || {};
  console.log("pagename", pagename);

  const handleCategoryClick = (category:string) => {
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
        <h1 className="Mainheading">Creating new menu item</h1>
        <nav className="nav">
          <ul className={!isExpanded ? "listofnavigationExpanded" : "listofnavigation"}>
            {categories.map((category, index) => (
              <li
                key={category}
                className="lists"
                onClick={() => handleCategoryClick(category)}
              >
                <h1
                  className={`list-text ${category === pagename ? "activetext" : ""}`}
                >
                  {`Step ${index + 1}: ${category}`}
                </h1>
                <div
                  className={`${isExpanded ? "navbar" : "navbarExpanded"} ${category === pagename ? "active" : ""}`}
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
