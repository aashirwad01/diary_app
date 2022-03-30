

import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router,Routes,Route,useRoutes, useLocation, useParams} from 'react-router-dom';
import { responsiveFontSizes } from '@mui/material';

import AddDiary from "./pages/AddDiary";
import DashBoard from "./pages/DashBoard";
import NavBar from "./components/cardDashboard/NavBar";
import SandBox from "./pages/sandbox/SandBox";
import { ToastContainer } from "react-toastify";
import ModalManager from "./components/modals/ModalManager";
import ErrorComponent from "./components/errors/ErrorComponent";


let theme = createTheme();
theme = responsiveFontSizes(theme);

const Board = () => {
  
  let routes = useRoutes([
    { path: "/", element: <> <NavBar/> <DashBoard /></>  },
    { path: "/add", element: <> <NavBar /> <AddDiary />
    </> },
     { path: "/edit/:id", element: <> <NavBar /> <AddDiary />
     </> },
    { path: "/sandbox", element: <> <NavBar/> <SandBox /></>  },
    { path: "/error", element: <> <NavBar/> <ErrorComponent /></>  },
    // ...
  ]);
  return routes;
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <ModalManager />
        <ToastContainer position="bottom-right" theme="colored" />
    <CssBaseline />
    <Router>
    
    <Board/>
    </Router>
    
    
  </ThemeProvider>
    
  );
}

export default App;
