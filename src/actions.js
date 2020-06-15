export const Types = {
  ON_PICTURES_REQUEST: "ON_PICTURES_REQUEST",
  ON_PICTURES_SUCCESS: "ON_PICTURES_SUCCESS",
  ON_PICTURES_FAIL: "ON_PICTURES_FAIL",
  ON_PICTURE_REQUEST: "ON_PICTURE_REQUEST",
  ON_PICTURE_SUCCESS: "ON_PICTURE_SUCCESS",
  ON_PICTURE_FAIL: "ON_PICTURE_FAIL",
};

export function loadPictures() {
  return {
    types: [
      Types.ON_PICTURES_REQUEST,
      Types.ON_PICTURES_SUCCESS,
      Types.ON_PICTURES_FAIL,
    ],
    payload: {
      request: {
        url: `/photos`,
        params: {
          client_id: process.env.UNSPLASH_API_KEY,
          // TODO send as param to implement pagination
          page: 1,
        },
      },
    },
  };
}

export function loadPicture(id) {
  return {
    types: [
      Types.ON_PICTURE_REQUEST,
      Types.ON_PICTURE_SUCCESS,
      Types.ON_PICTURE_FAIL,
    ],
    payload: {
      request: {
        url: `/photos/${id}`,
        params: {
          client_id: process.env.UNSPLASH_API_KEY,
        },
      },
    },
  };
}
