import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  divider: {
    width: 28,
    border: '2px solid black',
    marginTop: 4,
  },
  listItem: {
    paddingTop: 10,
    paddingBottom: 5,
    '& > a': {
      textDecoration: 'none',
      color: 'black',
    },
  },
});

const Legal = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h6' component='h6' gutterBottom>
        LEGAL
      </Typography>
      <div className={classes.divider}></div>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a href='/'>Terms</a>
        </li>
        <li className={classes.listItem}>
          <a href='/'>Privacy</a>
        </li>
      </ul>
    </>
  );
};
export { Legal };
