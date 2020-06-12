import { combineReducers } from "redux";

const initialState = {
  pictures: {
    isLoading: false,
    data: [],
  },
};

const root = (state = initialState, action) => {
  switch (action.type) {
    case "ON_PICTURES_REQUEST":
      return { ...state, pictures: { isLoading: true, data: [] } };

    case "ON_PICTURES_SUCCESS":
      const mapData = action.payload.data.map((img) => ({
        id: img.id,
        url: img.urls.thumb,
        description: img.description,
      }));

      return {
        ...state,
        pictures: {
          data: mapData,
          isLoading: false,
        },
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  root,
});

export default rootReducer;
