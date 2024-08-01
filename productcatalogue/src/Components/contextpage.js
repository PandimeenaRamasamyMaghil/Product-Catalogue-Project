
import React, { createContext, useState } from 'react';

// Create a context
export const Contextpagejs = createContext();

// Create a provider component
export const Contextpage = ({ children }) => {
    const pages=['Step 1: Primary Details','Step 2: Pricing and kitchen details','Step 3: Item customizations']
    
    
    const [activeCategory, setActiveCategory] = useState('Step 1: Primary Details');


 


  return (
    <Contextpagejs.Provider value={{ 
        pages,activeCategory, setActiveCategory
      }}>
      {children}
    </Contextpagejs.Provider>
  );
};