import './App.css';
import React from 'react';
import { AppBar, Container, Grid } from '@mui/material';
import AllRates from "./rates/AllRates";
import NewRate from './rates/NewRate';

class App extends React.Component {
  render(){
    return(
    <div className="App">
      <header className="App-header">
        <Container >
            <AppBar>
            <h1>Exchange Rates </h1>
          </AppBar>
          <NewRate/>
          <AllRates/>
        </Container>
      </header>
    </div>
    )};
}

export default App;
