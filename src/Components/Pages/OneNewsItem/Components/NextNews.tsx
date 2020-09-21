import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    borderRadius: 5,
  },
  cardDetails: {
    flex: 1,
  },
  divider: {
    marginTop: 10,
  },
  cardMedia: {
    borderRadius: 5,
    width: 160,
  },
});

const NextNews = (props: any) => {
  const classes = useStyles();
  const { nextNews, addHistory } = props;

  return (
    <Grid item onClick={() => addHistory(nextNews._id)}>
      <Divider className={classes.divider} />
      <Typography variant='body1'>Noticias relacionadas</Typography>
      <CardActionArea className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component='h2' variant='h5'>
              {nextNews.title}
            </Typography>
            <Typography variant='subtitle1' color='primary'>
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            component='img'
            className={classes.cardMedia}
            image={nextNews.image}
          />
        </Hidden>
      </CardActionArea>
    </Grid>
  );
};

export { NextNews };
