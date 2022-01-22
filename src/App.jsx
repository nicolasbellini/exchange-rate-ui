import { Container, Grid } from '@mui/material';
import AllRates from "./components/AllRates";
import NavBar from './components/NavBar';
import NewRate from './components/NewRate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  
    return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NavBar/>}/>
        </Routes>
      </div>
    </Router>
    );
};

export default App;
