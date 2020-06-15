import Home from "../components/Home";
import NewPhotos from "../components/NewPhotos";
import PhotoDetail from "../components/PhotoDetail";

export default [
  {
    path: "/",
    component: Home,
    key: "HomeView",
  },
  {
    path: "/new-photos",
    component: NewPhotos,
    key: "NewPhotosView",
  },
  {
    path: "/new-photos/:id",
    component: PhotoDetail,
    key: "PhotoDetailView",
  },
];
