import { createTheme, Theme } from '@mui/material/styles';

// Google-inspired theme
export const googleTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#4285F4', // Google Blue
    },
    secondary: {
      main: '#EA4335', // Google Red
    },
    error: {
      main: '#FBBC04', // Google Yellow
    },
    success: {
      main: '#34A853', // Google Green
    },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#202124',
      secondary: '#5F6368',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Arial', sans-serif`,
  },
});

// GitHub-inspired theme
export const githubTheme: Theme = createTheme({
  palette: {
    primary: {
      main: '#24292E', // GitHub Dark Gray
    },
    secondary: {
      main: '#6E7681', // GitHub Light Gray
    },
    background: {
      default: '#F6F8FA', // GitHub Background
      paper: '#FFFFFF', // Card Background
    },
    text: {
      primary: '#24292E',
      secondary: '#57606A',
    },
  },
  typography: {
    fontFamily: `'Segoe UI', 'Helvetica Neue', sans-serif`,
  },
});
