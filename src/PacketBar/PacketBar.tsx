import * as React from 'react';
// import MockData from '../assets/data/MOCK_DATA.json';
import './PacketBar.css'

// interface Packet {
//   time: number;
//   PacketsRecieved: string;
//   PacketsLost: number;
// }

const PacketBar: React.FC<{jdata:any}> = (props) =>{

  const packet_list = props.jdata.map((packet: any) =>
  <tr key={packet.time}>
    <td >{packet.time}</td>
    <td  >{packet.PacketsRecieved}</td>
    <td  >{packet.ACKsRecieved}</td>
    <td  >{packet.PacketsLost}</td>
    <td  >{packet.GoodPut}</td>
  </tr>
  );

  return (
    <div className="packet-bar-component">
    <div className="title">
      {/* <h2>Packets</h2> */}
      <table className="table">
      <thead>
        <td id="width">time</td>
        <td >recieved</td>
        <td >ack</td>
        <td >lost</td>
        <td >goodput</td>
      </thead>
      </table>
    </div>
    <div className="packets">
      <table className="ui celled table">
      {packet_list}
      </table>
    </div>
    </div>
  );
};

export default PacketBar;
