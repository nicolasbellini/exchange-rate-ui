import { Card, Grid, CardContent, Typography } from '@mui/material';
import axios from 'axios';
import React,{useEffect, useState} from 'react';

const AllRates = () => {
    const [rates,setRates] = useState([])
    const [showRates,setShow] = useState(false);
    console.log()

    useEffect(()=>{
        getPost()
      },[])


    const getPost = () =>{
        axios.get("https://exchange-rate-back.herokuapp.com/api/exchangeRate/getAllRates").then(response=>{
            let responseRates = JSON.parse(JSON.stringify(response.data.result))
            setRates(responseRates)
            setShow(true)
        }).catch((error)=> console.log("Error: ", error));
    }

    return(
        <>
        <Typography variant='h2' component="div">
          All saved rates
        </Typography>
        <Grid container spacing={1} justify="center">
            {
                showRates && rates.map(rate => <Grid item>     <Card sx={{ minWidth: 275 }}>
                    <CardContent sx={{ bgcolor: 'text.disabled' }}>
                      <Typography variant="h5" component="div">
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="green" gutterBottom>
                        {rate.source}
                      </Typography>
                      <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
                        to
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="blue" gutterBottom>
                        {rate.target}
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {rate.rate}
                      </Typography>
                    </CardContent>
                  </Card> </Grid>)
            }
        </Grid>
        </>
    )

}

export default AllRates