import { createTheme, ThemeOptions } from "@mui/material/styles";

// Base theme
const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
    h1: { fontSize: "2rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 700 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded corners
          textTransform: "none", // Prevent text transform
          margin: "8px", // Add margin around buttons
          transition: "background-color 0.3s ease, transform 0.2s ease", // Smooth transition for background and transform
        },
      },
    },
  },
};

// Light theme
const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#555555",
    },
    // Button styling for light theme
    action: {
      active: "#000000", // Color for buttons in light theme
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#000000", // Dark button color for light theme
          color: "#ffffff", // Text color white for contrast
          "&:hover": {
            backgroundColor: "#333333", // Darker on hover
            transform: "scale(1.05)", // Hover effect
          },
        },
      },
    },
  },
});

// Dark theme
const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
    },
    // Button styling for dark theme
    action: {
      active: "#ffffff", // Color for buttons in dark theme
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff", // White button color for dark theme
          color: "#000000", // Text color dark for contrast
          "&:hover": {
            backgroundColor: "#eeeeee", // Lighter on hover
            transform: "scale(1.05)", // Hover effect
          },
        },
      },
    },
  },
});

// Google Theme (example)
const googleTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: { main: "#4285F4" }, // Google's blue
    secondary: { main: "#DB4437" }, // Google's red
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: "#202124", // Google's dark text
      secondary: "#5F6368", // Google's secondary text
    },
  },
});

// GitHub Theme (example)
const githubTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: { main: "#4285F4" }, // GitHub dark gray
    secondary: { main: "#0366d6" }, // GitHub blue
    background: {
      default: "#f6f8fa", // GitHub background
      paper: "#ffffff",
    },
    text: {
      primary: "#24292f", // GitHub dark text
      secondary: "#4285F4", // GitHub secondary text
    },
  },
});

export { lightTheme, darkTheme, googleTheme, githubTheme };
