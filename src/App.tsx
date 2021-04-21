import React from 'react';
import './App.css';
import Map from './Map/Map';
import TimeSlider from './TimeSlider/TimeSlider';
import SecurityBox from './Security/SecurityBox';
import PacketBar from './PacketBar/PacketBar';
const App: React.FC = () => {
  return (
    <div className="App">
      <TimeSlider></TimeSlider>
      <div style={{"height" : "60%", "display" : "flex"}}>
      <Map />
      <PacketBar></PacketBar>
      </div>
      <SecurityBox/>
    </div>
  );
};

export default App;
