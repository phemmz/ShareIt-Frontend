import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage/HomePage';

const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;
