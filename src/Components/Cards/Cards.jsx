import React from 'react';
import styles from "./Cards.module.css"
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = (props) => {
  console.log(props)
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">Dummy Data</Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">Dummy Data</Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">Dummy Data</Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Death count</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;