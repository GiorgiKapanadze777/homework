import React, { useEffect, useState } from 'react';

const WeatherPage = ({ city }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
      )
        .then((res) => res.json())
        .then((data) => setWeather(data));
    }
  }, [city]);

  return (
    <div className="flex justify-center items-center h-screen">
      {weather ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">{weather.name}</h1>
          <p className="text-xl">{Math.round(weather.main.temp - 273.15)}°C</p>
          <p className="text-lg">{weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WeatherPage;
