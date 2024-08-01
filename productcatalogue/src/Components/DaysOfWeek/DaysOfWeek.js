import React from 'react';
import "./DaysOfWeek.scss";

const DaysOfWeek = ({ days = [], setDays }) => {
    const daysOfWeek = ["S", "M", "T", "W", "Th", "F", "S"];

    const toggleHighlight = (index) => {
        if (days.includes(index)) {
            setDays(prevState => prevState.filter(day => day !== index));
        } else {
            setDays(prevState => [...prevState, index]);
        }
    };

    return (
        <ul className='DaysOfWeek'>
            {daysOfWeek.map((day, index) => (
                <li 
                    key={index} 
                    className={`list ${days.includes(index) ? "included" : ""}`} 
                    onClick={() => toggleHighlight(index)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => { if (e.key === 'Enter') toggleHighlight(index); }}
                >
                    {day}
                </li>
            ))}
        </ul>
    );
}

export default DaysOfWeek;
