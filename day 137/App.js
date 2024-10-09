import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

const DisplayTheme = () => {
  const { theme } = useTheme();
  return <p>Current Theme: {theme}</p>;
};

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Toggle Example</h1>
        <DisplayTheme />
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
