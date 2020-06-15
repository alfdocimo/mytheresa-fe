export default [
  {
    path: "/",
    component: "./Home",
    name: "Home",
    key: "HomeView",
  },
  {
    path: "/new-photos",
    component: "./NewPhotos",
    name: "NewPhotos",
    key: "NewPhotosView",
  },
  {
    path: "/new-photos/:id",
    component: "./PhotoDetail",
    name: "PhotoDetail",
    key: "PhotoDetailView",
  },
  {
    path: "/search-photos",
    component: "./SearchPhotos",
    name: "SearchPhotos",
    key: "SearchPhotosView",
  },
];
