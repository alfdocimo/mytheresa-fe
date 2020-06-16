import React, { Suspense } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import Loader from "./components/Loader";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {

    background-image: linear-gradient(
      to bottom,
      #70e1f5,
      #fff
    );

    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    padding: 0px;
    margin: 0px;
  }
`;

import store from "./store";

render(
  <Provider store={store}>
    <GlobalStyle />
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
