import { Container, Grid } from '@mui/material';
import AllRates from "./components/AllRates";
import NewRate from './components/NewRate';

const App = () => {
    return(
    <div>
        <Grid Container>
          <NewRate/>
          <AllRates/>
        </Grid>
    </div>
    );
};

export default App;
