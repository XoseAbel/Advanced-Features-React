import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import {
  selectNewsError,
  selectNewsData,
} from '../../../../Redux/mainNews/selectors';
import { NewsCard } from './NewsCard';
import { useHistory } from 'react-router-dom';
import { NEWS_ROUTE } from '../../../../Routes/const';
import { ErrorMessage } from '../../../Utils/ErrorMessage';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles({
  error: {
    margin: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
  },
});

const FullfilmentMainArea = (props: any) => {
  //selector de cargando noticias
  const errorData = useSelector(selectNewsError);
  const newsData = useSelector(selectNewsData);

  //obtenemos funcion para recargar pagina
  const { tryAgain } = props;

  //usehistory para acceder a la noticia individual
  let history = useHistory();
  const addHistory = (url: string) => {
    history.push(`${NEWS_ROUTE}/${url}`);
  };

  const classes = useStyles();
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {errorData ? (
        <ErrorMessage tryAgain={tryAgain} errorData={errorData} />
      ) : (
        newsData.map((card: any) => (
          <Grid
            item
            md={6}
            key={`post-${card._id}`}
            className={classes.card}
            onClick={() => addHistory(card._id)}
          >
            <NewsCard post={card} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export { FullfilmentMainArea };
