import { Container, Grid } from '@mui/material';
import AllRates from "./components/AllRates";
import LeftBar from './components/LeftBar';
import NewRate from './components/NewRate';

const App = () => {
  
    return(
    <div>
      <LeftBar></LeftBar>
        <Grid Container>
          <NewRate/>
          <AllRates/>
        </Grid>
    </div>
    );
};

export default App;
