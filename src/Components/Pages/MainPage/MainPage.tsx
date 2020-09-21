import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connectWithApi } from '../../../api/connectWithApi';
import { GET, NEWS_URL } from '../../../api/const';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectNewsLoading,
  selectNewsError,
  selectNewsData,
} from '../../../Redux/mainNews/selectors';
import { Grid, Typography } from '@material-ui/core';
import {
  errorFecth,
  startFecth,
  successfulFecth,
} from '../../../Redux/mainNews/mainNewsSlice';
import { FullfilmentMainArea } from './Components/FullfilmentMainArea';
import { SkeletonCard } from './Components/Skeleton';
import { teal } from '@material-ui/core/colors';

//Definimos estilo de nuestra MainPage
const useStyles = makeStyles({
  main: {
    paddingBottom: 20,
  },
  title: {
    backgroundColor: teal[50],
    width: '100%',
    marginBottom: 15,
    paddingTop: 15,
    paddingBottom: 10,
    color: teal[700],
    fontFamily: 'Works Sans',
  },
});

const MainPage = () => {
  //selector de cargando noticias
  const isLoading = useSelector(selectNewsLoading);
  const errorData = useSelector(selectNewsError);
  const newsData = useSelector(selectNewsData);

  //iniciamos dispatch
  const dispatch = useDispatch();

  //useEffect para llamar a la API
  useEffect(() => {
    getMainNews();
  }, []);
  const getMainNews = async () => {
    dispatch(startFecth());
    try {
      // const result = await connectWithApi('hola', GET);
      const result = await connectWithApi(NEWS_URL, GET);
      dispatch(successfulFecth(result));
    } catch (error) {
      dispatch(errorFecth({ code: error.code, message: error.message }));
    }
  };

  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.main}
      direction='row'
      justify='center'
      alignItems='center'
    >
      <Grid item className={classes.title}>
        <Typography variant='h5' align='center'>
          OUR MAIN NEWS
        </Typography>
      </Grid>
      {isLoading || (!errorData && !newsData) ? (
        <SkeletonCard qty={4} />
      ) : (
        <FullfilmentMainArea tryAgain={getMainNews} />
      )}
    </Grid>
  );
};

export { MainPage };
