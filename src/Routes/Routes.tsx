import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../Components/pages/NotFound';
import MainPage from '../Components/pages/MainPage/MainPage'
import {MAIN_PAGE} from './const'

const Routes = () => {
  return (
    <Switch>
      <Route exact path={MAIN_PAGE}>
        <MainPage/>
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routes };
