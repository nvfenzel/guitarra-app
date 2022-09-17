// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Nosotros from './Components/Nosotros';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Mimetodo from './Components/Mimetodo';
import Contacto from './Components/Contacto';
import Footer from './Components/Footer';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#d79c5a',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
        // light: will be calculated from palette.primary.main,
        main: '#007bff',
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
      },
    },
    typography: {
    button: {
      textTransform: 'none',
    }
  }
  });

  return (
    <div className="App">
    <ThemeProvider theme={theme}>
      <header className="App-header">
      <Nav className='navegador'/>
      <Home/>
      <Nosotros/>
      <Mimetodo/>
      <Contacto/>
      <Footer/>
      </header>
    </ThemeProvider>
    </div>
  );
}

export default App;
