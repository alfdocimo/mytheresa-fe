import React, { Suspense } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import Loader from "./components/Loader";
import { BrowserRouter as Router } from "react-router-dom";

import store from "./store";

render(
  <Provider store={store}>
    <Suspense fallback={<Loader />}>
      <Router>
        <App />
      </Router>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);
