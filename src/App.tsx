import React from 'react';
import { Routes } from './Routes';
import { Header } from './Components/NavBar';
import { Footer } from './Components/Footer';
import { makeStyles } from '@material-ui/core/styles';
//React Router
import { BrowserRouter as Router } from 'react-router-dom';
import store from './Redux/store';
import { Provider } from 'react-redux';

//Definimos estilo de nuestra APP principal
const useStyles = makeStyles({
  main: {
    minHeight: 'calc(100vh - 311px)',
    fontFamily: 'Works Sans',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <div className={classes.main}>
          <Routes />
        </div>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
