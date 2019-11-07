import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY'
export const SET_FORECAST_DATA =  SET_FORECAST_DATA;
export const setCity = payload => ({ type: SET_CITY, payload });
export const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const api_key = '02cc4fcabfb716d330aba31c86b5954f';
const url = 'https://api.openweathermap.org/data/2.5/forecast'

export const setSelectedCity = payload => {

    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                dispatch(setForecastData({city: payload, forecastData}));
            }
        )
    }
    
    
}