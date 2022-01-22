import { Container, Grid } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import RateCard from './components/RateCard';

const App = () => {
  
    return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Container><NavBar/></Container>}/>
        </Routes>
      </div>
    </Router>
    );
};

export default App;
