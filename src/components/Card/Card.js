import React from "react";
import StyledCard from "./StyledCard";
import PropTypes from "prop-types";

export default function Card({ imgUrl, description }) {
  return (
    <StyledCard imgUrl={imgUrl}>
      <p>{description}</p>
    </StyledCard>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
};

Card.defaultProps = {
  description: "No description available 🙁",
};
