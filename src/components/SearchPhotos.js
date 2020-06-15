import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { queryPictures } from "../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styled from "styled-components";

export default function SearchPhotos() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

  const [debouncedHandler] = useDebouncedCallback((value) => {
    dispatch(queryPictures({ query: value }));
  }, 1000);

  const handleOnChangeFetch = (e) => debouncedHandler(e.target.value);

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

  return (
    <div>
      <input defaultValue={""} onChange={handleOnChangeFetch} />
      <h1>Looking for pictures of {query.value}</h1>
      {query.data && (
        <StyledContainer>{renderPictures(query.data)}</StyledContainer>
      )}
    </div>
  );
}
