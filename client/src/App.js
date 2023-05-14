import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Container,
} from "@mui/material";
import { NavigationBar } from "./components/navBar/NavigationBar";
import "./App.css";

/* Setting up 
the main Theme */

const quanTheme = createTheme({
  palette: {
    primary: {
      main: "#130a29",
    },
    secondary: {
      main: "#362a51",
    },
    text: {
      primary: "#ffff",
      secondary: "#ffcd35",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={quanTheme}>
      <CssBaseline />
      <div className="App">
        <NavigationBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
