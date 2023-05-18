/*<-- ========== Signin ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const Signin = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage, setCurrentPage } = useContext(AppContext);
  const { userLogin } = useContext(UserContext);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Signin;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Setting current page -->*/
  useEffect(() => {
    setCurrentPage("Signin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*<-- Loggin button -->*/
  const loginButton = () => {
    userLogin();
  };

  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="Auth_form padding-3 margin-auto margin-top-3 flex-col gap-1 border-radius-3 box-shadow-1">
      <h2 name="Sign in" className="text-weight-bold text-align-center">
        {languageDB[1][language]}
      </h2>
      <input
        name="Email"
        className="border-radius-2 border-color-1"
        type="text"
        placeholder={languageDB[2][language]}
      />
      <input
        name="Password"
        className="border-radius-2 border-color-1"
        type="password"
        placeholder={languageDB[3][language]}
      />
      <button
        name="Log in"
        className="button-blue border-radius-3 margin-0"
        onClick={() => loginButton()}
      >
        {languageDB[4][language]}
      </button>
      <div className="separator-1 border-color-1"></div>
      <Link
        name="Forgot password?"
        className="text-align-center margin-auto"
        href=""
      >
        {languageDB[5][language]}
      </Link>
      <div className="separator-1 border-color-1"></div>
      <Link
        name="Do not have an account?"
        to={"../signup"}
        className="text-align-center text-color-green-1 margin-auto"
        href=""
      >
        {languageDB[6][language]}
      </Link>
      <div className="separator-1 border-color-1"></div>
      <button name="Sign in with Google" className="">
        <img src={Icons.Google} alt="" /> {languageDB[7][language]}
      </button>
    </div>
  );
};

export default Signin;
