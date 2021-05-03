import * as React from 'react';
import MockData from '../assets/data/MOCK_DATA.json';
import './PacketBar.css'

// interface Packet {
//   time: number;
//   PacketsRecieved: string;
//   PacketsLost: number;
// }

const PacketBar: React.FC<{jdata:any}> = (props) =>{

  const packet_list = props.jdata.map((packet: any) =>
    <p className="packet" key={packet.time}>[{packet.time}]: {packet.PacketsRecieved} &nbsp;&nbsp;&nbsp;&nbsp; Packets Lost: {packet.PacketsLost}</p>
  );

  return (
    <div className="packet-bar-component">
      <div className="title"><h4>Packets</h4></div>
      <div className="packets">
        {packet_list}
      </div>
    </div>
  );
};

export default PacketBar;
