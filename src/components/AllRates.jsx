import { Card, Grid, CardContent, Typography, Container } from '@mui/material';
import axios from 'axios';
import React,{useEffect, useState} from 'react';
import RateCard from './RateCard';


const AllRates = () => {
    const [rates,setRates] = useState([])
    const [showRates,setShow] = useState(false);

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
        <Grid container spacing={2} >
            {
              showRates && rates.map(rate => 
              <Grid item>     
                <RateCard src= {rate.source} trg = {rate.target} rate ={rate.rate}/>
              </Grid>
              )
            }
        </Grid>
        </>
    )

}

export default AllRates