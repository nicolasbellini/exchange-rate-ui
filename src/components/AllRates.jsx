import { Card, Grid, CardContent, Typography, Container } from '@mui/material';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box, minWidth } from '@mui/system';

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
        <Typography variant='h2'>
          All saved rates
        </Typography>
        <Grid container spacing={2} >
            {
              showRates && rates.map(rate => 
              <Grid item>     
                <Card sx={{ bgcolor: 'text.disabled' }}>
                  <Box paddingX={5}>
                    <CardContent>

                        <Box sx={{display: "flex", alignItems:"center"}}> 
                          <AttachMoneyIcon color='green' style={{ width: 20 }}/>
                          <Typography variant='body1' color="green" marginLeft={-0.7}>
                           {rate.source}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography all sx={{ fontSize: 12 }} color="text.secondary" >
                            to
                          </Typography>
                        </Box>

                        <Box>
                          <Typography sx={{ fontSize: 14 }} color="blue" >
                            {rate.target}
                          </Typography>
                        </Box>

                        <Box>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary">
                            {rate.rate}
                          </Typography>
                        </Box>

                    </CardContent>
                  </Box>
                </Card> 
              </Grid>
              )
            }
        </Grid>
        </>
    )

}

export default AllRates