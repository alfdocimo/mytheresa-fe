import React, { lazy } from "react";
import { hot } from "react-hot-loader";
import routes from "../routes";
import { Switch, Route } from "react-router-dom";

const renderRoutes = (routes) =>
  routes.map((route) => {
    const { component, ...restRoute } = route;
    const Component = lazy(() => import(`${component}`));
    return <Route exact component={Component} {...restRoute} />;
  });

const App = () => {
  return <Switch>{renderRoutes(routes)}</Switch>;
};

export default hot(module)(App);
