import * as React from 'react';
import {Chrono} from 'react-chrono/dist/react-chrono';


const TimeSlider: React.FC = () => {
    const items: any = [
        {
            title: "January 2021"
        },
        {
            title: "February 2021"
        },
        {
            title: "March 2021"
        },
        {
            title: "April 2021"
        },
        {
            title: "May 2021"
        },
        {
            title: "June 2021"
        },
        {
            title: "July 2021"
        },
        {
            title: "August 2021"
        },
    ];
    return(
        <div>
            <Chrono items={items} itemWidth={310} hideControls={true} scrollable={true} />
        </div>
    );
};

export default TimeSlider;
