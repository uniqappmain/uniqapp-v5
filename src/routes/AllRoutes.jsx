import Layout from "../pages/components/layout/Layout";
import Landing from "../pages/landing/Landing";
import Auth from "../pages/auth/Auth";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";

import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/dashboard/Home";
import Explore from "../pages/dashboard/Explore";
import Collections from "../pages/dashboard/Collections";
import NewFile from "../pages/dashboard/NewFile";
import Details from "../pages/dashboard/Details";
import DetailsEditable from "../pages/dashboard/DetailsEditable";
import Admin from "../pages/dashboard/Admin";
import Settings from "../pages/dashboard/Settings";

import Support from "../pages/support/Support";
import Shared from "../pages/shared/Shared";
import SharedDetails from "../pages/shared/SharedDetails";
import DevTheme from "../pages/components/development/DevTheme";
import NotFound from "../pages/not-found/NotFound";

const AllRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/landing",
      element: <Landing />,
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "",
          element: <Signin />,
        },
        {
          path: "signin",
          element: <Signin />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
      ],
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "explore",
          element: <Explore />,
        },
        {
          path: "explore/:id",
          element: <Details />,
        },
        {
          path: "collections",
          element: <Collections />,
        },
        {
          path: "collections/:id",
          element: <DetailsEditable />,
        },
        {
          path: "new-file",
          element: <NewFile />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "support",
      element: <Support />,
    },
    {
      path: "shared",
      element: <Shared />,
    },
    {
      path: "shared/:id",
      element: <SharedDetails />,
    },
    {
      path: "dev-theme",
      element: <DevTheme />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ],
};

export default AllRoutes;
