import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from './../../constants/weathers'

import './styles.css';

const data = {
    temperature : 20,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s' 
};

const Weaterlocation = () => (
    <div className="weatherLocationCont" >
        <Location city={'Cali!'}/>
        <WeatherData data={data}/>
    </div>
);

export default Weaterlocation;