import ReactMapGl from 'react-map-gl';
import * as React from 'react';

const Map: React.FC = () => {

    const [viewport, setViewport] = React.useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });

    return(
        <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYnJhY2siLCJhIjoiY2thZzZ1Ym92MDRpazJ4bzF2ZzN1MjBzbSJ9.Zy7oCF8S32eMDffK9HZkpg'}
            width="100%"
            height="100%"
            onViewportChange={(viewport: React.SetStateAction<{ latitude: number; longitude: number; zoom: number; }>) => setViewport(viewport)}
        />
    );
};

export default Map;
