import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

export default function BackButton() {
  const history = useHistory();

  const StyledBackButton = styled.button`
    border: none;
    background: none;
    cursor: pointer;
  `;

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <StyledBackButton onClick={handleGoBack}>👈 Go back!</StyledBackButton>
  );
}
