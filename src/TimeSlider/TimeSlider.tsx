import * as React from 'react';

const TimeSlider: React.FC = () => {

    return(
        <div>
            <label htmlFor="time">Time:</label>
            <input id="time" type="range"/>
        </div>
    );
};

export default TimeSlider;
