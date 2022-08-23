import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Item';

function Home(){
    return (

        <Container>
        <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
                <Item>xs=6 md=8</Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
            <Grid item xs={6} md={4}>
                <Item>xs=6 md=4</Item>
            </Grid>
        </Grid>
        </Container>

    )
}

export default Home;