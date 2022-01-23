import { Button, Card, CardActions, CardContent, Paper, Typography } from '@mui/material';
import React,{useState} from 'react';

const RateCard = ({source, target, rate}) => {

    return(
        <Card>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {source}
          </Typography>
          <Typography variant="h5" component="h2">
            {target}
          </Typography>
          <Typography variant="h5" component="h2">
            {rate.toFixed(3)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    )
}

export default RateCard