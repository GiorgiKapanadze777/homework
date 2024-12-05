import React, { useState, useEffect, useMemo, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Custom hook for theme toggling
function useTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  return [theme, toggleTheme];
}

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  // useMemo to prevent unnecessary recalculations
  const isEven = useMemo(() => count % 2 === 0, [count]);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Count: {count}</h2>
      <p>{isEven ? "Even" : "Odd"}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const About = () => <h1>About Page</h1>;

const Contacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <Router>
      <div className={theme}>
        <header>
          <nav>
            <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
            <Link to="/contacts">Contacts</Link>
          </nav>
          <button onClick={toggleTheme}>
            Toggle Theme (Current: {theme})
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
