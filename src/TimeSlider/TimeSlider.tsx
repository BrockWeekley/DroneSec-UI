import * as React from 'react';
// import {Chrono} from 'react-chrono/dist/react-chrono';
import './TimeSlider.css'
import { useState } from 'react';
const TimeSlider: React.FC<{onChangeValue:any}> = (props) => {
    const [state, setSlide] = useState(0);
    interface Props {
        onChangeValue: any;
      }
      
    const handleChange = (e:any) => {
        props.onChangeValue(e);
        // console.log('setting level', e.target.value)
        setSlide(e.target.value);
      };
    return(
        <div>
             <input type="range"
      min="0" max="600 " 
      value={state}
      onChange={handleChange} className="slider" id="myRange"/>
        </div>
    );
};

export default TimeSlider;
