import React from "react";
import StyledButton from "./StyledButton";
import PropTypes from "prop-types";

export default function Button({ text, onClick, color, bg }) {
  return (
    <StyledButton onClick={onClick} color={color} bg={bg}>
      {text}
    </StyledButton>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bg: PropTypes.string,
};

Button.defaultProps = {
  color: "#ffffff",
  bg: "#b993d6",
};
