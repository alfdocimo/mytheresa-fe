import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/new-photos">
        <button>See new photos</button>
      </Link>
    </div>
  );
};

export default Home;
