import * as React from 'react';
// import {Chrono} from 'react-chrono/dist/react-chrono';
import './TimeSlider.css'
import { useState } from 'react';
const TimeSlider: React.FC = () => {
    const [state, setSlide] = useState(0);
    // const items: any = [
    //     {
    //         title: "January 2021"
    //     },
    //     {
    //         title: "February 2021"
    //     },
    //     {
    //         title: "March 2021"
    //     },
    //     {
    //         title: "April 2021"
    //     },
    //     {
    //         title: "May 2021"
    //     },
    //     {
    //         title: "June 2021"
    //     },
    //     {
    //         title: "July 2021"
    //     },
    //     {
    //         title: "August 2021"
    //     },
    // ];
    const handleChange = (e:any) => {
        console.log('setting level', e.target.value)
        setSlide(e.target.value);
      };
    return(
        <div>
             <input type="range"
      min="0" max="100  " 
      value={state}
      onChange={handleChange} className="slider" id="myRange"/>
        </div>
    );
};

export default TimeSlider;
