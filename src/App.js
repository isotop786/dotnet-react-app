
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Dashboard from './Components/Dashboard';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import withLoader from './Components/HOCLoaderWrapper';

const drawerWidth = 200;
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

// Create a custom theme
const customTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'orange', // Set your desired hover color
          },
        },
      },
    },
  },
});
const theme = createTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

function App() {
  return (
    <>
     
      <ThemeProvider theme={theme}>
        <CssBaseline />
         <Dashboard />
    </ThemeProvider>
    </>
   
  );
}

export default withLoader(App);
