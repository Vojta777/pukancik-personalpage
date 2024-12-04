import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { googleTheme, githubTheme } from "../theme/theme"; // Adjusted path to the theme file

const App: React.FC = () => {
  // You can switch between themes by changing the state
  const [theme, setTheme] = useState(googleTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === googleTheme ? githubTheme : googleTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 20 }}>
        <h1>Welcome to the Themed App!</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === googleTheme ? 'GitHub' : 'Google'} Theme
        </button>
        {/* Add more components here */}
      </div>
    </ThemeProvider>
  );
};

export default App;
