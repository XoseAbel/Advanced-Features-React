import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { teal } from '@material-ui/core/colors';
import Picture404 from './404.png';

const useStyles = makeStyles({
  img: {
    width: '90%',
  },
  button: {
    paddingBottom: 10,
    textDecoration: 'none',
    '& > *': {
      backgroundColor: teal[700],
      color: 'white',
    },
  },
});

function NotFound() {
  const classes = useStyles();
  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        item
        xs={8}
        sm={10}
        md={8}
      >
        <img className={classes.img} src={Picture404} alt='404 - Not Found' />
      </Grid>
      <Typography variant='h6' gutterBottom={true}>
        Looks like you lost your way home
      </Typography>
      <Link className={classes.button} to='/news'>
        <Button variant='contained'>Take me back</Button>
      </Link>
    </Grid>
  );
}

export { NotFound };
