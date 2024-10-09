import React, { createContext, useState, useContext } from "react";

// 1. Create the ThemeContext
const ThemeContext = createContext();

// 2. Create the ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);
