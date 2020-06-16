import React, { lazy } from "react";
import { hot } from "react-hot-loader";
import routes from "../routes";
import { Switch, Route } from "react-router-dom";
import BackButton from "./BackButton";
import styled from "styled-components";

const StyledContainer = styled.div`
  justify-content: center;
  align-content: center;
  align-items: center;
  display: flex;
  padding-top: 20px;
`;

const renderRoutes = (routes) =>
  routes.map((route) => {
    const { component, ...restRoute } = route;
    const Component = lazy(() => import(`${component}`));
    return <Route exact component={Component} {...restRoute} />;
  });

const App = () => {
  return (
    <>
      <Switch>{renderRoutes(routes)}</Switch>
      <StyledContainer>
        <BackButton />
      </StyledContainer>
    </>
  );
};

export default hot(module)(App);
