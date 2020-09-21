import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import Picture404 from './404.png';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles({
  error: {
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  img: {
    width: '90%',
  },
});

const ErrorMessage = (props: any) => {
  //obtenemos funcion para recargar pagina
  const { tryAgain, errorData } = props;
  const classes = useStyles();
  return (
    <div className={classes.error}>
      {errorData.code === 404 ? (
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
          <Typography variant='h6' gutterBottom={true}>
            Looks like you lost your way home
          </Typography>
        </Grid>
      ) : (
        <>
          <Typography variant='h6'>Code:{errorData.code}</Typography>
          <Typography variant='h6'>Message:{errorData.message}</Typography>
        </>
      )}
      <Button variant='outlined' color='secondary' onClick={tryAgain}>
        Try Again
      </Button>
    </div>
  );
};

export { ErrorMessage };
