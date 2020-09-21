import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MainPage } from '../Components/Pages/MainPage';
import { NotFound } from '../Components/Pages/NotFound';
import { OneNewsItem } from '../Components/Pages/OneNewsItem';
import { NEWS_ROUTE, SINGLE_NEWS_ROUTE } from './const';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to={NEWS_ROUTE} />
      </Route>
      <Route exact path={NEWS_ROUTE}>
        <MainPage />
      </Route>
      <Route exact path={SINGLE_NEWS_ROUTE}>
        <OneNewsItem />
      </Route>
      <Route path='*'>
        <NotFound />
      </Route>
    </Switch>
  );
};

export { Routes };
