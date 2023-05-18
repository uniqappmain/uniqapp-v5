import Headbar from "../headbar/Headbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Headbar />
      <Outlet />
    </>
  );
};

export default Layout;
