import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WeatherLocation city={'Cali,col'} />
        <WeatherLocation city={'Buenos Aires,ar'} />
        <WeatherLocation city={'Bogota,col'} />
    </div>
);

export default LocationList;