// "use client"
import React from 'react';
import ReactMapGL from 'react-map-gl';

interface MapProps {
  mapboxApiAccessToken: string;
}

const Map: React.FC<MapProps> = ({ mapboxApiAccessToken }) => {
  const [viewport, setViewport] = React.useState({
    width: '100%',
    height: '100%',
    latitude: 30.2672, // default latitude
    longitude: - 97.7431, // default longitude
    zoom: 7, // default zoom level
  });

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxApiAccessToken}
      onViewportChange={(newViewport) => setViewport(newViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
    />
  );
};

export default Map;

