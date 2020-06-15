import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Suspense } from "react";
import Loader from "../components/Loader";
import App from "../components/App";

export default function renderWithRouter(route) {
  const Wrapper = () => (
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Suspense>
    </Provider>
  );
  return {
    ...render(<Wrapper />),
  };
}
