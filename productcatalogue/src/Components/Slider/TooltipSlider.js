import React from 'react';
import './TooltipSlider.scss';

const Tooltip = ({ message, children }) => {
    return (
        <div className="tooltipSlider-container">
            {children}
            <div className="tooltipSlider-message">
                {message}
            </div>
        </div>
    );
};

export default Tooltip;