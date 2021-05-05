import * as React from 'react';
// import {Chrono} from 'react-chrono/dist/react-chrono';
import './TimeSlider.css'
import { useState } from 'react';
const TimeSlider: React.FC<{onChangeValue:any}> = (props) => {
    const [state, setSlide] = useState(0);
    // interface Props {
    //     onChangeValue: any;
    //   }
      
    const handleChange = (e:any) => {
        props.onChangeValue(e);
        // console.log('setting level', e.target.value)
        setSlide(e.target.value);
      };
    return(
        <div className="dropdownDiv">
        <select className="dropdown" name="experiment" onChange={handleChange}>
            <option value="0">Experiment 1</option>
            <option value="1">Experiment 2</option>
            <option value="2">Experiment 3</option>
            <option value="3">Experiment 4</option>
            <option value="4">Experiment 5</option>
            <option value="5">Experiment 6</option>
            <option value="6">Experiment 7</option>
            <option value="7">Experiment 8</option>
            <option value="8">Experiment 9</option>
            <option value="9">Experiment 10</option>
            <option value="10">Experiment 11</option>
            <option value="11">Experiment 12</option>
            <option value="12">Experiment 13</option>
            <option value="13">Experiment 14</option>
            <option value="14">Experiment 15</option>
            <option value="15">Experiment 16</option>
            <option value="16">Experiment 17</option>
            <option value="17">Experiment 18</option>
            <option value="18">Experiment 19</option>
            <option value="19">Experiment 20</option>
            <option value="20">Experiment 21</option>
            <option value="21">Experiment 22</option>
            <option value="22">Experiment 23</option>
            <option value="23">Experiment 24</option>
            <option value="24">Experiment 25</option>
            <option value="25">Experiment 26</option>
            <option value="26">Experiment 27</option>
            <option value="27">Experiment 28</option>
            <option value="28">Experiment 29</option>
            <option value="29">Experiment 30</option>
            <option value="30">Experiment 31</option>
            <option value="31">Experiment 32</option>
            <option value="32">Experiment 33</option>
            <option value="33">Experiment 34</option>
            <option value="34">Experiment 35</option>
            <option value="35">Experiment 36</option>
            <option value="36">Experiment 37</option>
            <option value="37">Experiment 38</option>
        </select>
        <div className="select-icon">
        <svg focusable="false" viewBox="0 0 104 128" width="25" height="35" className="icon">
    <path d="m2e1 95a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm0-3e1a9 9 0 0 1 -9 9 9 9 0 0 1 -9 -9 9 9 0 0 1 9 -9 9 9 0 0 1 9 9zm14 55h68v1e1h-68zm0-3e1h68v1e1h-68zm0-3e1h68v1e1h-68z"></path>
  </svg>
  </div>
        </div>
    );

    //<input type="range" min="0" max="600 " value={state} onChange={handleChange} className="slider" id="myRange"/>
};

export default TimeSlider;
