import React from 'react';
import { Routes } from './routes2';
import { makeStyles } from '@material-ui/core/styles';
//React Router
import { BrowserRouter as Router } from 'react-router-dom';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles({
  main: {
    minHeight: 'calc(100vh)',
    fontFamily: 'Calibri',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.main}>
        <Routes />
      </div>
    </Router>
  );
}

export default App;
