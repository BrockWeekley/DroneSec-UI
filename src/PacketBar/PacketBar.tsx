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
  <tr>
    <td id="width">{packet.time}</td>
    <td id="width">{packet.PacketsRecieved}</td>
    <td id="width">{packet.ACKsRecieved}</td>
    <td id="width">{packet.PacketsLost}</td>
    <td id="width">{packet.GoodPut}</td>
  </tr>
  );

  return (
    <div className="packet-bar-component">
      <div className="title">
        <table className="ui celled table">
          <thead>
            <th style={{fontSize:"0.7em"}} id="width " scope="col">time</th>
            <th style={{fontSize:"0.7em"}} id="width" scope="col">recieved</th>
            <th style={{fontSize:"0.7em"}} id="width" scope="col">ack</th>
            <th style={{fontSize:"0.7em"}} id="width" scope="col">lost</th>
            <th style={{fontSize:"0.7em"}} id="width" scope="col">goodput</th>
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
