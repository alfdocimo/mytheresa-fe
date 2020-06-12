import Home from "../components/Home";
import NewPhotos from "../components/NewPhotos";

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
];
