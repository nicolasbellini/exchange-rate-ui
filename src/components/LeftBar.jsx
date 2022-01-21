import { AppBar, createTheme, makeStyles, Typography } from '@mui/material';
import React,{useState} from 'react';

const  LeftBar = () => {
    

    return(
        <AppBar >
            <Typography variant='h2' component="span" >
                Exchange Rate App
            </Typography>
        </AppBar>
    )

}

export default LeftBar