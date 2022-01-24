import { Button, Card, CardActions, CardContent, Paper, Stack, Typography } from '@mui/material';
import React,{useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import axios from 'axios';

const RateCard = ({src, trg, rate}) => {

    const handleDeleteButton = () =>{
      axios.delete(`http://localhost:1337/api/exchangeRate/deleteRate/${src}/${trg}`).then((response)=>{
        window.location.reload(false);

      })
    }

    return(
        <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {src}
          </Typography>
          <Typography variant="h5" component="h2">
            {trg}
          </Typography>
          <Typography variant="h5" component="h2">
            {rate.toFixed(3)}
          </Typography>
        </CardContent>
        <CardActions>
        <Stack direction="row" spacing={1}>
          <Button size="small">Learn More</Button>
          <IconButton aria-label="delete" onClick={handleDeleteButton}>
            <DeleteIcon />
          </IconButton>
          </Stack>
        </CardActions>
      </Card>
    )
}

export default RateCard