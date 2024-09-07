import React, { useState, useEffect } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // Function to fetch weather data
  const fetchWeather = async (cityName) => {
    const apiKey = 'YOUR_API_KEY'; // replace with your real API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      
      if (response.ok) {
        setWeatherData(data);
        setError(''); // Clear any previous errors
      } else {
        setWeatherData(null);
        setError('City not found');
      }
    } catch (err) {
      setError('Error fetching weather data');
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const inputCity = e.target.value;
    setCity(inputCity);

    if (inputCity) {
      fetchWeather(inputCity);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather Forecast</h1>
      <input 
        type="text" 
        value={city} 
        onChange={handleInputChange} 
        placeholder="Enter city name" 
      />
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
