import React, { useEffect } from "react";
import Card from "../components/Card";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import { loadPictures } from "../actions";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const renderPictures = (pictures) => {
  return pictures.map((picture) => (
    <Card imgUrl={picture.url} description={picture.description} />
  ));
};

export default function NewPhotos() {
  const dispatch = useDispatch();
  const pictures = useSelector((state) => state.root.pictures.data);

  useEffect(() => {
    if (!pictures.length) dispatch(loadPictures());
  }, []);

  return <StyledContainer>{renderPictures(pictures)}</StyledContainer>;
}
