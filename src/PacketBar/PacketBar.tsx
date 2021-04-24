import * as React from 'react';
import MockData from '../assets/data/MOCK_DATA.json';
import './PacketBar.css'

interface Packet {
  id: number;
  packet_dest: string;
  latency: number;
}

const PacketBar: React.FC = () => {

  const packet_list = MockData.map((packet: Packet) =>
    <p className="packet" key={packet.id}>[{packet.id}]: {packet.packet_dest} &nbsp;&nbsp;&nbsp;&nbsp; Latency: {packet.latency}</p>
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
