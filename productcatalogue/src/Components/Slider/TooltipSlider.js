import React from 'react';
import './TooltipSlider.scss';
import Rectangle from "../../assets/images/Rectangle 938.png"


const Tooltip = ({ message, children }) => {
    return (
        <div className="tooltipSlider-container">
            {children}
            

            <div className="tooltipSlider-message">
               
                {message}
                <img src={Rectangle} className='Rectangle-Slider'></img>
                
            </div>
        </div>
    );
};

export default Tooltip;