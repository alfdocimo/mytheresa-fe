import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { loadPictures } from "../actions";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const renderPictures = (pictures) => {
  return pictures.map((picture) => (
    <Link to={`/new-photos/${picture.id}`} key={picture.id}>
      <Card
        imgUrl={picture.url}
        description={picture.description || undefined}
      />
    </Link>
  ));
};

export default function NewPhotos() {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.pictures.data);

  useEffect(() => {
    if (!pictures.length) dispatch(loadPictures());
  }, []);

  return <StyledContainer>{renderPictures(pictures)}</StyledContainer>;
}
