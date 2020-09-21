import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import { Copyright } from './Components/Copyright';
import { teal } from '@material-ui/core/colors';
import { Legal } from './Components/Legal';
import { Language } from './Components/Language';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Works Sans',
    display: 'flex',
    backgroundColor: teal[800],
  },
  container: {
    marginTop: 25,
    marginBottom: 20,
    display: 'flex',
  },
  iconsWrapper: {
    marginLeft: 'auto',
    height: 100,
  },
  icon: {
    cursor: 'pointer',
    marginLeft: 5,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Container className={classes.container}>
        <Grid container justify='space-around'>
          <Grid item xs={6} sm={3} md={2}>
            <Legal />
          </Grid>
          <Grid item xs={6} sm={5} md={4}>
            <Language />
          </Grid>
          <Grid item xs={10} sm={4} md={3}>
            <Grid
              container
              direction='column'
              justify='flex-end'
              className={classes.iconsWrapper}
            >
              <Grid container item justify='flex-end'>
                <FacebookIcon className={classes.icon} fontSize='large' />
                <TwitterIcon className={classes.icon} fontSize='large' />
                <InstagramIcon className={classes.icon} fontSize='large' />
                <PinterestIcon className={classes.icon} fontSize='large' />
              </Grid>
              <Grid container item justify='flex-end'>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};
export { Footer };
