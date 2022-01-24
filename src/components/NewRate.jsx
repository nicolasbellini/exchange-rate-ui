import { Alert, Autocomplete, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React,{useEffect, useState} from 'react';

const NewRate = () => {
    const [src,setSource] = useState([''])
    const [trg,setTarget] = useState([''])
    const [showAlert, setShowAlert] = useState(null);
    const [showAlert404, setShowAlert404] = useState(null);
    const [currencies,setCurrencies] = useState([])
    const [showCurrencies,setShow] = useState(false);

    useEffect(()=>{
        getCurrencies()
      },[])

    const getCurrencies = () =>{
        axios.get("https://exchange-rate-back.herokuapp.com/api/exchangeRate/getAllCurrencies").then(response=> {
          let responseCurrencies = JSON.parse(JSON.stringify(response.data.orderedResult)) 
          setCurrencies(responseCurrencies)
          setShow(true)
        })
      }


    const handleChangeSource = e => {
        setSource(e.target.value.toUpperCase());
      };

    const handleChangeTarget = e => {
        setTarget(e.target.value.toUpperCase());
    };

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://exchange-rate-back.herokuapp.com/api/exchangeRate/createOrUpdate", {src, trg}).then(r => {
            setSource("")
            setTarget("")
            setShowAlert(true)
        }).catch(reason => {
            setSource("")
            setTarget("")
            setShowAlert404(true)
        })
    } 

    return(
        <>
        {showCurrencies && 
        <Grid container spacing={3} direction="column" alignItems="center" >
            <Grid item>
                <Autocomplete id="combo-box" options={currencies} sx={{ width: 300 }}
                     renderInput={(params) => <TextField focused {...params} label="SOURCE" onChange={handleChangeSource}/>}/>
            </Grid>
            <Grid item>
                <Autocomplete id="combo-box" options={currencies} sx={{ width: 300 }}
                     renderInput={(params) => <TextField focused {...params} label="TARGET" onChange={handleChangeTarget}/>}/>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Grid>
            <Grid item>
            {showAlert && <Alert severity="success" onClose={() => {setShowAlert(false)}}>Rate succesfully added!</Alert>}
            {showAlert404 && <Alert severity="error" onClose={() => {setShowAlert404(false)}}>That rate does not exist!</Alert>}
            </Grid>
        </Grid>}
        </>
    )


}

export default NewRate