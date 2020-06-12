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
      return {
        ...state,
        pictures: {
          data: action.payload.data,
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
