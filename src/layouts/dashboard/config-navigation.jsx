import SvgColor from "src/components/svg-color";

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  // {
  //   title: "dashboard",
  //   path: "/",
  //   icon: icon("ic_analytics"),
  // },
  // {
  //   title: "user",
  //   path: "/user",
  //   icon: icon("ic_user"),
  // },
  // {
  //   title: "blog",
  //   path: "/blog",
  //   icon: icon("ic_blog"),
  // },
  {
    title: "menu",
    path: "/home",
    icon: icon("ic_home"),
  },
  {
    title: "cart",
    path: "/cart",
    icon: icon("ic_cart"),
  },
  {
    title: "favorites",
    path: "/favorites",
    icon: icon("ic_bookmark"),
  },
  // {
  //   title: "rate us",
  //   path: "/review",
  //   icon: icon("ic_review"),
  // },
  {
    title: "logout",
    path: "/",
    icon: icon("ic_lock"),
  },
  // {
  //   title: "Not found",
  //   path: "/404",
  //   icon: icon("ic_disabled"),
  // },
];

export default navConfig;
