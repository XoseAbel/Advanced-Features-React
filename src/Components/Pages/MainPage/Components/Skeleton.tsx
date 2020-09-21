import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, makeStyles } from '@material-ui/core';

//Definimos estilo Skeleton
const useStyles = makeStyles({
  main: {
    padding: 5,
  },
  border: {
    borderRadius: 15,
  },
});

function SkeletonCard(props: any) {
  const classes = useStyles();
  const { qty } = props;
  const arr = Array.from({ length: qty });

  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {arr.map((row: any, index: number) => (
        <Grid item md={6} xs={12} className={classes.main} key={'ske' + index}>
          <Skeleton
            className={classes.border}
            animation='wave'
            variant='rect'
            height={300}
          />
        </Grid>
      ))}
    </Grid>
  );
}
export { SkeletonCard };
