import React, { useState, useEffect } from "react";
import SvgColor from "src/components/svg-color";

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const NavConfig = () => {
  const [navConfig, setNavConfig] = useState([
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
  ]);

  useEffect(() => {
    if (sessionStorage.getItem("isAuthenticated")) {
      setNavConfig((prevNavConfig) => [
        ...prevNavConfig.slice(0, 2),
        {
          title: "favorites",
          path: "/favorites",
          icon: icon("ic_bookmark"),
        },
        ...prevNavConfig.slice(2),
      ]);
    } else {

      setNavConfig((prevNavConfig) => prevNavConfig.filter((item) => item.path !== "/favorites"));
    }
  }, []);

  return navConfig;
};

export default NavConfig;
