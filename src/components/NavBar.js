import { AppBar, createTheme, makeStyles, Typography } from '@mui/material';
import React,{useState} from 'react';

function NavBar(){

    const useStyles = createTheme({
        root: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          border: 0,
          borderRadius: 3,
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          color: 'white',
          height: 48,
          padding: '0 30px',
        },
      });

    return(
        <AppBar>
            <Typography variant='h2' component="span" >
                Exchange Rate App
            </Typography>
        </AppBar>
    )

}

export default NavBar