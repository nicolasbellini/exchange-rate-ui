import { Container, Grid } from '@mui/material';
import AllRates from "./components/AllRates";
import LeftBar from './components/LeftBar';
import ResponsiveAppBar from './components/NavBar';
import NewRate from './components/NewRate';

const App = () => {
  
    return(
    <div>
      <ResponsiveAppBar></ResponsiveAppBar>
        <Grid Container>
          <NewRate/>
          <AllRates/>
        </Grid>
    </div>
    );
};

export default App;
