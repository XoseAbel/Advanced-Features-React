import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../Components/Pages/NotFound';
import MainPage from '../Components/Pages/MainPage/MainPage';
import { CLOSURE_AVOID_MULTIPLE_CALLS, MAIN_PAGE } from './const';
import ClosureMultipleCalls from '../Components/Pages/ClosureAvoidMultipleCalls';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={CLOSURE_AVOID_MULTIPLE_CALLS}>
        <ClosureMultipleCalls />
      </Route>
      <Route exact path={MAIN_PAGE}>
        <MainPage />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routes };
