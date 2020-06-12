export function loadPictures() {
  return {
    types: ["ON_PICTURES_REQUEST", "ON_PICTURES_SUCCESS", "ON_PICTURES_FAIL"],
    payload: {
      request: {
        url: `/photos?page=1&client_id=${process.env.UNSPLASH_API_KEY}`,
      },
    },
  };
}
