import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const StyledBackButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export default function BackButton() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <StyledBackButton onClick={handleGoBack}>👈 Go back!</StyledBackButton>
  );
}
