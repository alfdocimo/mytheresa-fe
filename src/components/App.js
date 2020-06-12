import React from "react";
import { hot } from "react-hot-loader";
import routes from "../routes";
import { Switch, Route } from "react-router-dom";

const renderRoutes = (routes) => {
  return routes.map((route) => <Route exact {...route} />);
};

const App = () => {
  return <Switch>{renderRoutes(routes)}</Switch>;
};

export default hot(module)(App);
