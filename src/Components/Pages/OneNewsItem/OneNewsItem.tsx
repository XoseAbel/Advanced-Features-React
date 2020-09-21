import { Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { connectWithApi } from '../../../api/connectWithApi';
import { GET, NEWS_URL } from '../../../api/const';
import {
  selectSingleNewsLoading,
  selectSingleNewsError,
  selectSingleNewsData,
} from '../../../Redux/OneNews/selectors';
import {
  errorFecth,
  startFecth,
  successfulFecth,
} from '../../../Redux/OneNews/OneNewsSlice';
import { SkeletonOneNews } from './Components/SkeletonOneNews';
import { FullfilmentArea } from './Components/FullfilmentArea';
import { NEWS_ROUTE } from '../../../Routes/const';

//Definimos estilo de nuestra SingleNews
const useStyles = makeStyles({
  main: {
    padding: 20,
  },
});

const OneNewsItem = () => {
  let { idNews } = useParams<any>();

  //obtenemos datos de REDUX
  const isLoading = useSelector(selectSingleNewsLoading);
  const errorData = useSelector(selectSingleNewsError);
  const newsData = useSelector(selectSingleNewsData);

  //generamos dispatch
  const dispatch = useDispatch();

  //usehistory para acceder a la proxima noticia, si existe
  let history = useHistory();
  const addHistory = (url: string) => {
    history.push(`${NEWS_ROUTE}/${url}`);
  };
  //useEffect para llamar a la API
  useEffect(() => {
    getSingleNews(idNews);
  }, [idNews]);
  const getSingleNews = async (idNews: string) => {
    dispatch(startFecth());
    try {
      // const result = await connectWithApi(`hola`, GET);
      const result = await connectWithApi(`${NEWS_URL}/${idNews}`, GET);
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
      {isLoading || (!newsData && !errorData) ? (
        <SkeletonOneNews />
      ) : (
        <FullfilmentArea
          tryAgain={() => getSingleNews(idNews)}
          addHistory={addHistory}
        />
      )}
    </Grid>
  );
};
export { OneNewsItem };
