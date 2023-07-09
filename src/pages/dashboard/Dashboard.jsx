import { useContext, useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { isLoggedin } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/

  /*<-- ========== FUNTIONS ========== -->*/
  // Navigate - Protected Route.
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin) {
      //console.log("Navigate to Signin");
      navigate("../../../auth/signin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedin]);

  /*<-- ========== RETURN ========== -->*/
  return (
    <>
      <Nav />
      <div className="Dashboard_page background-pattern-2">
        <Outlet/>
      </div>
    </>
  );
};

export default Dashboard;
