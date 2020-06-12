import React from "react";
import styled from "styled-components";

export default function Card({
  imgUrl,
  description = "No description available",
}) {
  const StyledCard = styled.div`
    background-image: linear-gradient(
        to bottom,
        rgba(245, 246, 252, 0.52),
        rgba(117, 19, 93, 0.73)
      ),
      url(${imgUrl});
    background-size: cover;
    height: 300px;
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 20px;
    margin: 20px;
    box-shadow: 0px 0px 10px #333;
    color: white;
    align-items: flex-end;
  `;

  return (
    <StyledCard>
      <p>{description}</p>
    </StyledCard>
  );
}
