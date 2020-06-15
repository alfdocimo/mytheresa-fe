import React, { useEffect } from "react";
import Card from "./Card";
import { useSelector, useDispatch } from "react-redux";
import { loadPicture } from "../actions";

export default function PhotoDetail(props) {
  const picture = useSelector((state) => state.picture.data);
  const dispatch = useDispatch();

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    dispatch(loadPicture(id));
  }, [id]);

  return (
    <div>
      {picture.urls && (
        <Card
          imgUrl={picture.urls.regular}
          description={picture.description || undefined}
        />
      )}
    </div>
  );
}
