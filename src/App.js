import "./App.css";
import RouteApp from "./routes/RouteApp";
import LayoutApp from "./layouts/LayoutApp";
import NavBar from "./components/NavBar";
import { createTheme,ThemeProvider } from "@mui/material/styles";
import AuthContextProvider from "./contexts/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f49d2c",
    },
    secondary:{
       main:"#157eae"
    },
  },
  
});

function App() {
  return (
    <>
  
     <ThemeProvider theme={theme}>
      <NavBar />
      <LayoutApp>
      <AuthContextProvider>
        <RouteApp />
      </AuthContextProvider>
      </LayoutApp>
     </ThemeProvider>
    </>
  );
}

export default App;
