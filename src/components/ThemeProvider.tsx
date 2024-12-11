"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, CssBaseline } from "@mui/material";
import { darkTheme, lightTheme } from "../styles/theme";

// Create a context to manage theme state
const ThemeContext = createContext({
  toggleTheme: () => {},
  isDarkMode: false,
});

// Custom hook to use theme context
export const useTheme = () => useContext(ThemeContext);

// Main ThemeProvider component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // Toggle theme between dark and light
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Provide theme context and wrap children with MUI ThemeProvider
  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      <MUIThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
