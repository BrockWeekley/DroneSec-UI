import ReactMapGl, { Layer, LayerProps, Marker, Source } from 'react-map-gl';
import * as React from 'react';
import { Missouri } from './Missouri';
import { GeoJSON } from 'geojson';
import droneImg from '../assets/drone-svg.svg';
import './Map.css';
import { useState } from 'react';
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

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

const Map: React.FC<{dataIndex:any}> = (props) => {
  // console.log(FlightData[props.dataIndex].latitude);
  
  const [dronePos] = useState(drones);
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

  const droneCount: number[] = [1,1,1,2,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5];
  let count: number = droneCount[props.dataIndex];
  console.log("index: " + props.dataIndex + " value: " + droneCount[props.dataIndex]);
  console.log("size: " + dronePos.slice(0, count).length);

  const droneMarkers = React.useMemo(() => dronePos.slice(0, count).map(
    (drone: any) => (
      <Marker latitude={drone.latitude} longitude={drone.longitude} key={drone.id} className="marker">
        <img onClick={() => { setDroneDisplay(drone) }} className="drone-icon" src={droneImg} alt="drone" />
      </Marker>
    ),
  ), [dronePos]);
  // const changeDrone= () => {
  //   console.log(dronePos);
  //   setDronePos( [ {
  //     id: 1,
  //     latitude: FlightData[props.dataIndex].latitude,
  //     longitude: FlightData[props.dataIndex].longitude,
  //   },
  //   {
  //     id: 2,
  //     latitude: 39.1231,
  //     longitude: -93.1969
  //   },
  //   {
  //     id: 3,
  //     latitude: 37.9485,
  //     longitude: -91.7715
  //   },
  //   {
  //     id: 4,
  //     latitude: 40.3461,
  //     longitude: -94.8725
  //   },
  //   {
  //     id: 5,
  //     latitude: 38.6270,
  //     longitude: -90.1994
  //   }]);
  //   // drones[1].latitude = 0;
  //   // console.log(dronePos);
  // };

  return (
    <div className="map-container">
      <div className="drone-info">
        <strong>Selected Drone: {droneDisplay.id}</strong><br />
        Latitude: {droneDisplay.latitude}<br />
        Longitude: {droneDisplay.longitude}
      </div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={'pk.eyJ1IjoiYnJhY2siLCJhIjoiY2thZzZ1Ym92MDRpazJ4bzF2ZzN1MjBzbSJ9.Zy7oCF8S32eMDffK9HZkpg'}
        width="100%"
        height="100%"
        onViewportChange={(viewport: React.SetStateAction<{ latitude: number; longitude: number; zoom: number; }>) => setViewport(viewport)}
      >
        {droneMarkers.length > 0 && droneMarkers}
        <Source id="missouri" type="geojson" data={geojson}>
          <Layer {...stateLayer} />
        </Source>
      </ReactMapGl>
      {/* <button onClick={() =>{
        changeDrone();
      }}>Clickme</button> */}
    </div>
  );
};

export default Map;
