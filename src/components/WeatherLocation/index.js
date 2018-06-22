import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from './../../services/transformWeather';
import './styles.css';
import { CircularProgress } from 'material-ui';


const api_key = '02cc4fcabfb716d330aba31c86b5954f';
const url = 'http://api.openweathermap.org/data/2.5/weather'

class Weaterlocation extends Component {

    /* Sin Constructor
    state = {
        data: data1,
        city: 'Cali!'
    };
    */
    constructor ({ city }) {
        super();
        this.state = {
            data: null,
            city
        };
        /*console.log("ctor");*/
    }
    
    componentWillMount() {
        const { city } = this.state;
        const api_weather = `${url}?q=${city}&appid=${api_key}`; 

        fetch(api_weather).then( data => {
            /*console.log(data);*/
            return data.json();
        }).then( weather_data => {
            const data = transformWeather(weather_data);
            this.setState({ data });

            /*console.log(weather_data);*/
        });
    }
    /*componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps", nextProps);
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate" , nextProps, nextState);
    }
    componentDidMount() {
        console.log("componentDidMount");
    }
    componentDidCatch(error, info) {
        console.log("componentDidCatch" , info);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }*/

     
    render = () => {
        /*console.log("render");*/
        
        const { city , data } = this.state;

        return(
            <div className="weatherLocationCont" >
                <Location city={city}/>
                { data ? <WeatherData data={data}/> : 
                    <CircularProgress size={60} thickness={7} />}
                
            </div>
        );
    };
} 
Weaterlocation.propTypes = {
    city : PropTypes.string,
}
export default Weaterlocation;