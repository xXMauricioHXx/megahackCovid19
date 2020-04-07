import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({ destination, origin, onReady }) => (
  <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={'AIzaSyAHejuKuhRUyhTZ6xbb8gwbqEqGeDNIyeg'}
    strokeWidth={3}
    strokeColor="#222"
    onReady={onReady}
  />
);

export default Directions;
