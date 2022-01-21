import { Alert, Box, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React,{useState} from 'react';

const NewRate = () => {
    const [src,setSource] = useState([''])
    const [trg,setTarget] = useState([''])
    const [showAlert, setShowAlert] = useState(null);
    const [showAlert404, setShowAlert404] = useState(null);


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
            window.location.reload(false);
        }).catch(reason => {
            setSource("")
            setTarget("")
            setShowAlert404(true)
        })
    } 

    return(
        <>
        <Typography variant='h2'>
            Save a new rate
        </Typography>
        <Box component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField label="SOURCE" focused  onChange={handleChangeSource}/>
            <TextField label="TARGET" focused  onChange={handleChangeTarget}/>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
            {showAlert && <Alert severity="success" onClose={() => {setShowAlert(false)}}>Rate succesfully added!</Alert>}
            {showAlert404 && <Alert severity="error" onClose={() => {setShowAlert404(false)}}>That rate does not exist!</Alert>}
        </Box>
        </>
    )


}

export default NewRate