import React from 'react';
import "./DaysOfWeek.scss";

const DaysOfWeek = ({ days = [], setDays }) => {
    const daysOfWeek = ["S", "M", "T", "W", "Th", "F", "S"];

    const toggleHighlight = (index) => {
        // Convert index to a number (though index is already a number in this case)
        const numericIndex = Number(index);

        // Convert the days array strings to numbers
        const numericDays = days.map(day => Number(day));

        if (numericDays.includes(numericIndex)) {
            setDays(prevState => prevState.filter(day => Number(day) !== numericIndex));
        } else {
            setDays(prevState => [...prevState, numericIndex.toString()]);
        }
    };

    return (
        <ul className='DaysOfWeek'>
            {daysOfWeek.map((day, index) => (
                <li 
                    key={index} 
                    className={`list ${Array.isArray(days) && days.includes(index.toString()) ? "included" : ""}`}
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
