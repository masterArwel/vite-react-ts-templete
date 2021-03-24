import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routers';

const travelRoutes = (originRoutes: any[]) => {
  return originRoutes.map(originRoute => {
    const newRoute = { ...originRoute };
    if (Array.isArray(originRoute.routes)) newRoute.routes = travelRoutes(originRoute.routes);
    return newRoute;
  });
};

const finialRoute = travelRoutes(routes);

const App: React.FC = () => (
  <Router>
    <Switch>
      {finialRoute.map((route, i) => (
        <Route exact key={i} {...route} />
      ))}
    </Switch>
  </Router>
  );

export default App;
