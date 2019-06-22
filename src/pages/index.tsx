import React from 'react';
import { lazy } from 'react';
import { Route, Switch } from 'react-router';

export const pages = (
  <Switch>
    <Route exact path='/' component={lazy(() => import('./Home'))} />
    <Route exact path='/Description' component={lazy(() => import('./Description'))} />
  </Switch>
);
