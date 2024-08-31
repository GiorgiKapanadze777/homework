import { useState, useEffect } from "react";

export default function App() {
  const [info, setInfo] = useState({});

  const fetchData = async () => {
    const response = await fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=london&appid=8005e0a1974f974d81c999400dd12dc9"
    );
    const data = await response.json();

    setInfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <p>Temp: {info.main.temp}</p>
    </div>
  );
}