import Nav from "../components/nav/Nav";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="Dashboard_page">
        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
