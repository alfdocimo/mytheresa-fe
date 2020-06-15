import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import styled from "styled-components";

const Home = () => {
  const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      &:not(:first-child) {
        padding-top: 20px;
      }
    }
  `;

  return (
    <StyledHome>
      <h1>👚 Mytheresa FE Challenge 👒</h1>
      <Link to="/new-photos">
        <Button text="See new photos" />
      </Link>
      <Link to="/search-photos">
        <Button text="Search photos" />
      </Link>
    </StyledHome>
  );
};

export default Home;
