import * as React from 'react';
import MockData from '../data/MOCK_DATA.json';
const PacketBar: React.FC = () => {

    interface Packet {
        id: number;
        packet_dest: string;
        latency: number;
      }
      
      const packet_list = MockData.map((packet) =>
        <p key={packet.id}>[{packet.id}]: {packet.packet_dest}   Latency: {packet.latency}</p>
      );

    return(
        <div style={{"backgroundColor": "powderBlue", "width": "25%", "overflowY": "auto"}}>
            PacketBar Component
            {packet_list}
        </div>
    );
};

export default PacketBar;
