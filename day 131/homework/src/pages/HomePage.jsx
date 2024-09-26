import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ setCity }) => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(input);
    navigate('/weather');
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          className="border p-2"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white p-2">
          Get Weather
        </button>
      </form>
    </div>
  );
};

export default HomePage;
