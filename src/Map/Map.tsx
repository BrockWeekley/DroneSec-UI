import ReactMapGl, {Layer, LayerProps, Marker, Source} from 'react-map-gl';
import * as React from 'react';
import { Missouri } from './Missouri';
import {GeoJSON} from 'geojson';
import droneImg from '../assets/drone-svg.svg';
import './Map.css';
import {useState} from 'react';

const drones: any = [
    {
        id: 1,
        latitude: 38.9517,
        longitude: -92.3341
    },
    {
        id: 2,
        latitude: 39.1231,
        longitude: -93.1969
    },
    {
        id: 3,
        latitude: 37.9485,
        longitude: -91.7715
    },
    {
        id: 4,
        latitude: 40.3461,
        longitude: -94.8725
    },
    {
        id: 5,
        latitude: 38.6270,
        longitude: -90.1994
    }
];

const Map: React.FC = () => {

    const [droneDisplay, setDroneDisplay] = useState({
        id: 1,
        latitude: 38.9517,
        longitude: -92.3341
    });
    const [viewport, setViewport] = React.useState({
        latitude: 37.9643,
        longitude: -91.8318,
        zoom: 6
    });

    const stateLayer: LayerProps = {
        id: 'fill',
        type: 'fill',
        source: 'missouri',
        paint: {
            'fill-color': '#3880ff',
            'fill-opacity': 0.2
        }
    };

    const geojson: GeoJSON.Feature = Missouri;

    const droneMarkers = React.useMemo(() => drones.map(
        (drone: any) => (
            <Marker latitude={drone.latitude} longitude={drone.longitude} key={drone.id}>
                <img onClick={() => {setDroneDisplay(drone)}} className="drone-icon"  src={droneImg} alt="drone" />
            </Marker>
        ),
    ), []);

    return(
        <ReactMapGl
            {...viewport}
            mapboxApiAccessToken={'pk.eyJ1IjoiYnJhY2siLCJhIjoiY2thZzZ1Ym92MDRpazJ4bzF2ZzN1MjBzbSJ9.Zy7oCF8S32eMDffK9HZkpg'}
            width="75%"
            height="100%"
            onViewportChange={(viewport: React.SetStateAction<{ latitude: number; longitude: number; zoom: number; }>) => setViewport(viewport)}
        >
            <div className="drone-info">
                Selected Drone: {droneDisplay.id}<br />
                Latitude: {droneDisplay.latitude}<br />
                Longitude: {droneDisplay.longitude}
            </div>
            {droneMarkers.length > 0 && droneMarkers}
            <Source id="missouri" type="geojson" data={geojson}>
                <Layer {...stateLayer} />
            </Source>
        </ReactMapGl>
    );
};

export default Map;
