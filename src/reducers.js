import { Types } from "./actions";
import { combineReducers } from "redux";

const initialState = {
  pictures: {
    isLoading: false,
    hasError: false,
    data: [],
  },
  picture: {
    isLoading: false,
    hasError: false,
    data: {},
  },
  query: {
    isLoading: false,
    hasError: false,
    data: [],
    value: "",
  },
};

const picturesReducer = (state = initialState.pictures, action) => {
  switch (action.type) {
    case Types.ON_PICTURES_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: [],
        hasError: false,
      };

    case Types.ON_PICTURES_FAIL:
      return {
        ...state,
        isLoading: false,
        data: [],
        hasError: true,
      };

    case Types.ON_PICTURES_SUCCESS:
      const mapData = action.payload.data.map((img) => ({
        id: img.id,
        url: img.urls.thumb,
        description: img.description,
      }));

      return {
        ...state,
        data: mapData,
        isLoading: false,
        hasError: false,
      };

    default:
      return state;
  }
};

const queryPicturesReducer = (state = initialState.query, action) => {
  switch (action.type) {
    case Types.ON_QUERY_PICTURES_REQUEST:
      const {
        payload: {
          request: {
            params: { query },
          },
        },
      } = action;
      return {
        ...state,
        isLoading: true,
        data: [],
        hasError: false,
        value: query,
      };

    case Types.ON_QUERY_PICTURES_FAIL:
      return {
        ...state,
        isLoading: false,
        data: [],
        hasError: true,
      };

    case Types.ON_QUERY_PICTURES_SUCCESS:
      const mapData = action.payload.data.results.map((img) => ({
        id: img.id,
        url: img.urls.thumb,
        description: img.description,
      }));

      return {
        ...state,
        data: mapData,
        isLoading: false,
        hasError: false,
      };

    default:
      return state;
  }
};

const pictureReducer = (state = initialState.picture, action) => {
  switch (action.type) {
    case Types.ON_PICTURE_REQUEST:
      return {
        ...state,
        isLoading: true,
        data: {},
        hasError: false,
      };

    case Types.ON_PICTURE_FAIL:
      return {
        ...state,
        isLoading: false,
        data: {},
        hasError: true,
      };

    case Types.ON_PICTURE_SUCCESS:
      return {
        ...state,

        data: action.payload.data,
        isLoading: false,
        hasError: false,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  query: queryPicturesReducer,
  pictures: picturesReducer,
  picture: pictureReducer,
});

export default rootReducer;
