import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '../Components/PagesToRender/NotFound';
import MainPage from '../Components/PagesToRender/MainPage/MainPage';
import {
  CLOSURE_AVOID_MULTIPLE_CALLS,
  MAIN_PAGE,
  RENDER_WITH_KEY,
} from './const';
import ClosureMultipleCalls from '../Components/PagesToRender/ClosureAvoidMultipleCalls';
import RenderWithKey from '../Components/PagesToRender/RenderWithKey';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={CLOSURE_AVOID_MULTIPLE_CALLS}>
        <ClosureMultipleCalls />
      </Route>
      <Route exact path={RENDER_WITH_KEY}>
        <RenderWithKey />
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
