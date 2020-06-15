import React from "react";
import StyledCard from "./StyledCard";
import PropTypes from "prop-types";

export default function Card({
  imgUrl,
  description,
  size,
  hoverable,
  location,
}) {
  return (
    <StyledCard imgUrl={imgUrl} size={size} hoverable={hoverable}>
      <span>{location && `📍 ${location}`}</span>
      <p>{description}</p>
    </StyledCard>
  );
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  size: PropTypes.string,
  hoverable: PropTypes.bool,
  location: PropTypes.string,
};

Card.defaultProps = {
  description: "No description available 🙁",
  size: "300",
  hoverable: true,
  location: undefined,
};
