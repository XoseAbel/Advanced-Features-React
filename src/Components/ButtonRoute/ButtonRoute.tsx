import { Button, Grid, makeStyles } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface propsInterface {
  children: string;
  nextRoute: string;
}

const useStyles = makeStyles(() => ({
  buttonRoute: {
    backgroundColor: teal[700],
    color: 'white',
    fontSize: '0.95rem',
    padding: '5px 10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: teal[900],
    },
  },
  linkGrid: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 10px',
  },
}));

const ButtonRoute = ({ children, nextRoute }: propsInterface) => {
  const history = useHistory();
  const { buttonRoute, linkGrid } = useStyles();

  return (
    <Grid item className={linkGrid} xs={6} sm={4} md={3}>
      <Button className={buttonRoute} onClick={() => history.push(nextRoute)}>
        {children}
      </Button>
    </Grid>
  );
};
export { ButtonRoute };
