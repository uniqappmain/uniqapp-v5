/*<-- ========== Signup ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const Signup = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage, setCurrentPage } = useContext(AppContext);
  const { userRegister } = useContext(UserContext);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Signup;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Setting current page -->*/
  useEffect(() => {
    setCurrentPage("Signup");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*<-- Signup button -->*/
  const signupButton = () => {
    userRegister();
  };

  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="Auth_form padding-3 margin-auto margin-top-3 flex-col gap-1 border-radius-3 box-shadow-1">
      <h2
        name="Create an account"
        className="text-weight-bold text-align-center"
      >
        {languageDB[1][language]}
      </h2>
      <input
        name="First name"
        className="border-radius-2 border-color-1"
        type="text"
        placeholder={languageDB[2][language]}
      />
      <input
        name="Last name"
        className="border-radius-2 border-color-1"
        type="text"
        placeholder={languageDB[3][language]}
      />
      <select
        className="border-radius-2 border-color-1"
        name="Gender"
        id=""
        placeholder="Gender"
        defaultValue="gender"
      >
        <option value="gender" disabled>
          {languageDB[4][language]}
        </option>
        <option value="female">{languageDB[5][language]}</option>
        <option value="male">{languageDB[6][language]}</option>
        <option value="other">{languageDB[7][language]}</option>
      </select>
      <input
        name="Email"
        className="border-radius-2 border-color-1"
        type="text"
        placeholder={languageDB[8][language]}
      />
      <input
        name="Password"
        className="border-radius-2 border-color-1"
        type="password"
        placeholder={languageDB[9][language]}
      />
      <input
        name="Confirm password"
        className="border-radius-2 border-color-1"
        type="password"
        placeholder={languageDB[10][language]}
      />
      <button
        name="Sign up"
        className="button-green border-radius-3 margin-0"
        onClick={() => signupButton()}
      >
        {languageDB[11][language]}
      </button>
      <div className="separator-1 border-color-1"></div>
      <Link
        name="Already have an account?"
        to={"../signin"}
        className="text-align-center margin-auto"
        href=""
      >
        {languageDB[12][language]}
      </Link>
      <div className="separator-1 border-color-1"></div>
      <button name="Sign up with Google" className="">
        <img src={Icons.Google} alt="" /> {languageDB[13][language]}
      </button>
    </div>
  );
};

export default Signup;
