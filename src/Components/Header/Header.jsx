import React from 'react';
import styles from "./Header.module.css";
import { Typography } from '@material-ui/core';


const Header = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h3">CovidTracker</Typography>
    </div>
  )
}


export default Header;
