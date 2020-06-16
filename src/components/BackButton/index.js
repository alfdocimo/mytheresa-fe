import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Button";

export default function BackButton() {
  const history = useHistory();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Button
      onClick={handleGoBack}
      bg="#333333"
      color="#ffffff"
      text="👈 Go back!"
    />
  );
}
