import * as React from 'react';
import MockData from '../assets/data/MOCK_DATA.json';
interface Packet {
    id: number;
    packet_dest: string;
    latency: number;
}

const PacketBar: React.FC = () => {
      
      const packet_list = MockData.map((packet: Packet) =>
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
