import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const Auth = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { isLoggedin } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/

  /*<-- ========== FUNTIONS ========== -->*/
  // Navigate - Protected Route.
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedin) {
      //console.log("Navigate to Signin");
      navigate("../../../dashboard/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedin]);

  /*<-- ========== RETURN ========== -->*/

  return (
    <>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default Auth;
