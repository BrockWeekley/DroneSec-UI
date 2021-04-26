import React from 'react';
import './App.css';
import Map from './Map/Map';
import TimeSlider from './TimeSlider/TimeSlider';
import SecurityBox from './Security/SecurityBox';
import PacketBar from './PacketBar/PacketBar';
import { useState } from 'react';
const App: React.FC = () => {
  const [index, setIndex] = useState(0);

  const changeIndex= (i:any) =>{
    // console.log(index);
    setIndex(i.target.value);
  }
  return (
    <div className="App">
      <TimeSlider onChangeValue={changeIndex} />
      <div style={{ "height": "70vh", "display": "flex" }}>
        <Map dataIndex = {index}/>
        <PacketBar />
      </div>
      <SecurityBox />
    </div>
  );
};

export default App;
