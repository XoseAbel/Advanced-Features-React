import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, makeStyles } from '@material-ui/core';

//Definimos estilo Skeleton
const useStyles = makeStyles({
  main: {
    padding: 5,
  },
  borderPicture: {
    borderRadius: 5,
    width: '100%',
  },
  borderTitle: {
    marginTop: 10,
    width: '100%',
    borderRadius: 5,
  },
});

function SkeletonOneNews() {
  const classes = useStyles();

  return (
    <Grid container direction='column' justify='center' alignItems='center'>
      <Grid className={classes.borderTitle} item md={8}>
        <Skeleton
          className={classes.borderTitle}
          animation='wave'
          variant='text'
          height={35}
        />
        <Skeleton
          className={classes.borderTitle}
          animation='wave'
          variant='text'
          height={35}
        />
        <Skeleton
          className={classes.borderPicture}
          animation='wave'
          variant='rect'
          height={300}
        />
        <Skeleton
          className={classes.borderTitle}
          animation='wave'
          variant='text'
          height={25}
        />
      </Grid>
    </Grid>
  );
}
export { SkeletonOneNews };
