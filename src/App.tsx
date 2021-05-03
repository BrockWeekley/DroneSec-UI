import React from 'react';
import './App.css';
import Map from './Map/Map';
import TimeSlider from './TimeSlider/TimeSlider';
import SecurityBox from './Security/SecurityBox';
import PacketBar from './PacketBar/PacketBar';
import JsonData from './assets/data/MOCK_DATA.json';
import { useState } from 'react';
const App: React.FC = () => {
  const [index, setIndex] = useState(0);

  const changeIndex= (i:any) =>{
    setIndex(i.target.value);
  }
  console.log(JsonData[index]);
  
  return (
    <div className="App">
      <TimeSlider onChangeValue={changeIndex} />
      <div style={{ "height": "70vh", "display": "flex" }}>
        <Map dataIndex = {index}/>
        <PacketBar jdata = {JsonData[index].networkData} />
      </div>
      <SecurityBox jdata = {JsonData[index].ContainerStatus}/>
    </div>
  );
};

export default App;
