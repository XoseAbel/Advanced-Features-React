import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import {
  selectSingleNewsError,
  selectSingleNewsData,
} from '../../../../Redux/OneNews/selectors';
import { NextNews } from './NextNews';
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
  img: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  date: {
    fontSize: 10,
    fontStyle: 'italic',
    marginBottom: 25,
  },
  marginBottom: {
    marginBottom: 25,
  },
});

const FullfilmentArea = (props: any) => {
  //selector de cargando noticias
  const errorData = useSelector(selectSingleNewsError);
  const newsData = useSelector(selectSingleNewsData);

  //obtenemos funcion para recargar pagina
  const { tryAgain, addHistory } = props;

  const classes = useStyles();
  return (
    <Grid container direction='row' justify='center' alignItems='center'>
      {errorData ? (
        <ErrorMessage tryAgain={tryAgain} errorData={errorData} />
      ) : (
        <Grid item md={8} xs={12} className={classes.card}>
          <Typography variant='h4' gutterBottom={true}>
            {newsData.title}
          </Typography>
          <img
            src={newsData.image}
            className={classes.img}
            alt={newsData.title}
          />
          <Typography variant='subtitle1' className={classes.date}>
            Publicado: {newsData.publicationDate}
          </Typography>
          <Typography className={classes.marginBottom} variant='body1'>
            {newsData.content}
          </Typography>
          {newsData.nextNews && (
            <NextNews nextNews={newsData.nextNews} addHistory={addHistory} />
          )}
          <a
            href={newsData.sourceUrl}
            target='_blank'
            rel='noopener noreferrer'
          >
            Source URL
          </a>
        </Grid>
      )}
    </Grid>
  );
};

export { FullfilmentArea };
