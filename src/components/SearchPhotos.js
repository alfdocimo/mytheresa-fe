import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { queryPictures } from "../actions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Input from "./Input";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: 0 auto;
  max-width: 500px;
  padding-top: 50px;
`;

export default function SearchPhotos() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.query);

  const [debouncedHandler] = useDebouncedCallback((value) => {
    dispatch(queryPictures({ query: value }));
  }, 1000);

  const handleOnChangeFetch = (e) => debouncedHandler(e.target.value);

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
      <StyledSearchContainer>
        <Input
          defaultValue={""}
          onChange={handleOnChangeFetch}
          data-testid="query-pictures-input"
        />
        <h1>Looking for pictures of {query.value}</h1>
      </StyledSearchContainer>
      {query.data && (
        <StyledContainer>{renderPictures(query.data)}</StyledContainer>
      )}
    </div>
  );
}
