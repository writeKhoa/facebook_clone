import { Route } from "@/models";
import { Friends, Home, NotDevelopment, Profile, Groups, Watch } from "@/pages";

const routes: Route[] = [
  {
    Page: Home,
    path: "/",
    isPrivate: true,
  },
  {
    Page: Friends,
    path: "/friends/*",
    isPrivate: true,
  },
  {
    Page: Groups,
    path: "/groups",
    isPrivate: true,
  },
  {
    Page: Watch,
    path: "/watch",
    isPrivate: true,
  },
  {
    Page: Profile,
    path: "/:id/*",
    isPrivate: false,
  },
  {
    Page: NotDevelopment,
    path: "/notdevelop",
    isPrivate: false,
  },
];

export default routes;
