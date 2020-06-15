import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { loadPicture } from "../actions";
import styled from "styled-components";

const StyledContainer = styled.div`
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export default function PhotoDetail(props) {
  const picture = useSelector((state) => state.picture.data);
  const dispatch = useDispatch();

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    dispatch(loadPicture({ id }));
  }, [id]);

  return (
    <StyledContainer>
      {picture.urls && (
        <Card
          imgUrl={picture.urls.regular}
          description={picture.description || undefined}
          size="600"
          hoverable={false}
          location={picture.location.title}
        />
      )}
    </StyledContainer>
  );
}
