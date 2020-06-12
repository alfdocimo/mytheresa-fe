import React from "react";
import { hot } from "react-hot-loader";
import { useDispatch, useSelector } from "react-redux";
import { loadPictures } from "../actions";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.root.pictures.isLoading);

  return (
    <div>
      {isLoading && <div>nepe</div>}
      <button onClick={() => dispatch(loadPictures())}>
        Increment counter
      </button>
    </div>
  );
};

export default hot(module)(App);
