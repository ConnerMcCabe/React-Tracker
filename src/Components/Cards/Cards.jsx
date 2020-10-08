import React from 'react';
import styles from "./Cards.module.css"
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate }}) => {
  console.log(confirmed)
  if(!confirmed) {
    return 'Loading...';
  }
  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Infected</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Active Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Recovered Cases</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color="textSecondary">Dummy Date</Typography>
            <Typography variant="h5">Death count</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cards;