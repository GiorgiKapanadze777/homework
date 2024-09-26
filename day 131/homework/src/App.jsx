import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';

const App = () => {
  const [city, setCity] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setCity={setCity} />} />
        <Route path="/weather" element={<WeatherPage city={city} />} />
      </Routes>
    </Router>
  );
};

export default App;
