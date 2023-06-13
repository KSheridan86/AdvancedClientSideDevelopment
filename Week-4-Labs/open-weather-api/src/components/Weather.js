import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchWeatherData();
    };

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c1ae647a4105e040b40a113d61f67bda`
            );
            console.log(response.data)
            setWeatherData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={handleChange}
            />
            <br></br>
            <button type="submit">Get Weather</button>
            </form>
            {weatherData && (
            <div>
                <h2>Weather in {weatherData.name}</h2>
                <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}℃</p>
                <p>Feels like: {Math.round(weatherData.main.feels_like - 273.15)}℃</p>
                <p>Description: {weatherData.weather[0].description}</p>
            </div>
            )}
        </div>
    );
};

export default Weather;