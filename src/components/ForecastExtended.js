import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import transformForecast from './../services/transformForecast';
import ForecastItem from './ForecastItem';


const api_key = '02cc4fcabfb716d330aba31c86b5954f';
const url = 'https://api.openweathermap.org/data/2.5/forecast'

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount () {
        this.updateCity(this.props.city);
    } 

    componentWillReceiveProps(nextProps) {
        if(nextProps.city !== this.props.city)
        {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }
    
    updateCity = city => {
        //Fetch or axios(Nivel de covertura a navegadores más antiguos)
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                this.setState({forecastData : forecastData });
            }
        )
    }

    renderForecastItemDays(forecastData){
        return forecastData.map(forecast =>
            <ForecastItem key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay} 
                hour={forecast.hour} 
                data={forecast.data}>
            </ForecastItem>);       
    }

    renderProgress = () => {
        return <h3>Cargando Pronóstico extendido ...</h3>
    }

     render(){
         const { city } = this.props;
         const { forecastData } = this.state;
         return(
         <div>
             <h2 className='forecast-title'>Pronóstico Extendido {city}</h2>
             {forecastData ? 
                this.renderForecastItemDays(forecastData) : 
                this.renderProgress() }
         </div>);
     }
}
ForecastExtended.propTypes = {
    city : PropTypes.string.isRequired,
}
export default ForecastExtended;