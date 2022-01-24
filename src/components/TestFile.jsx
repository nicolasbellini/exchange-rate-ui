import { Card, CardMedia, Container, Grid } from '@mui/material';
import * as React from 'react';

const TestFile = () => {


    return (
        <>
        Preconteiner
        <Container>
            <Grid container spacing={10}>
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia component="img" height={140} src='https://mui.com/static/images/cards/contemplative-reptile.jpg'/>                     
                    </Card>
                </Grid>
                <Grid item>
                    <Card sx={{maxWidth: 345}}>
                        <CardMedia component="img" height={140} src='https://mui.com/static/images/cards/contemplative-reptile.jpg'/>                     
                    </Card>
                </Grid>
            </Grid>

        </Container>
        </>
    )

}

export default TestFile