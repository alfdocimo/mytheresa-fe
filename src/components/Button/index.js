import React from "react";
import StyledButton from "./StyledButton";
import PropTypes from "prop-types";

export default function Button({ text, onClick }) {
  return <StyledButton onClick={onClick}>{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};
