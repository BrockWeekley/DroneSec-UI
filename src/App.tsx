import React from 'react';
import './App.css';
import Map from './Map/Map';
import TimeSlider from './TimeSlider/TimeSlider';
import SecurityBox from './Security/SecurityBox';
import PacketBar from './PacketBar/PacketBar';

const App: React.FC = () => {
  
  return (
    <div className="App">
      <TimeSlider />
      <div style={{"height" : "70vh", "display" : "flex"}}>
      <Map />
      <PacketBar />
      </div>
      <SecurityBox/>
    </div>
  );
};

export default App;
