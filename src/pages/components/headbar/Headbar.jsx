/*<-- ========== Headbar ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../../services/multi-language/multiLanguage-v1";
import { Link } from "react-router-dom";
import Icons from "../../../assets/icons/Icons";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";
import { UserContext } from "../../../context/UserContext";

const Headbar = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage, setAppLanguage, currentPage } = useContext(AppContext);
  const { isLoggedin, userProfile, userLogout } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/
  const [isAsideOpen, setAsideOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Change language -->*/
  const changeLanguage = ({ target: { value } }) => {
    setAppLanguage(value);
  };
  /*<-- Aside Open/Close -->*/
  const asideOpen = () => {
    setAsideOpen(true);
    setProfileOpen(false);
  };
  const asideClosed = () => {
    setAsideOpen(false);
  };
  /*<-- Profile Open/Close -->*/
  const profileToggle = () => {
    setProfileOpen(!isProfileOpen);
  };
  /*<-- Logout button -->*/
  const logoutButton = () => {
    profileToggle();
    userLogout();
  };

  /*<-- ========== RETURN ========== -->*/
  return (
    <>
      <div className="Headbar background-color-grey-9 border-color-1">
        <Link to={"../../../"} className="Headbar_block gap-1">
          <img className="Headbar_logo" src={Icons.Vault} alt="" />
          <h2 name="Uniqapp" className="text-weight-bold">
            {languageDB[1][language]}
          </h2>
        </Link>
        <div className="Headbar_block gap-1">
          {currentPage === "Landing" && !isLoggedin && (
            <Link to={"../auth/signin"}>
              <button
                name="Sign in"
                className="button-blue text-weight-bold border-radius-3"
              >
                {languageDB[2][language]}
              </button>
            </Link>
          )}
          {currentPage === "Signin" && !isLoggedin && (
            <Link to={"../auth/signup"}>
              <button
                name="Sign up"
                className="button-green text-weight-bold border-radius-3"
              >
                {languageDB[3][language]}
              </button>
            </Link>
          )}
          {currentPage === "Signup" && !isLoggedin && (
            <Link to={"../auth/signin"}>
              <button
                name="Sign in"
                className="button-blue text-weight-bold border-radius-3"
              >
                {languageDB[2][language]}
              </button>
            </Link>
          )}
          {isLoggedin && (
            <button
              name="Profile Name"
              className="button-light text-weight-bold border-radius-3"
              onClick={() => profileToggle()}
            >
              {userProfile?.first}
              {""} {userProfile?.last}
            </button>
          )}
          <button
            className="border-radius-3"
            onClick={() => {
              asideOpen();
            }}
          >
            <img src={Icons.Menu} alt="" />
          </button>
        </div>
      </div>
      {/* ASIDE */}
      {isAsideOpen && (
        <div className="AsideMenu_background">
          <div className="AsideMenu background-color-grey-9 box-shadow-1">
            <button
              className="border-radius-3 margin-right-0"
              onClick={() => {
                asideClosed();
              }}
            >
              <img src={Icons.Close} alt="" />
            </button>
            <div className="margin-top-3">
              <Link to={"../../../../"} className="Headbar_block gap-1">
                <img className="Headbar_logo" src={Icons.Vault} alt="" />
                <h2 name="Uniqapp" className="text-weight-bold">
                  {languageDB[1][language]}
                </h2>
              </Link>
              <div className="margin-top-3 gap-2 flex-col-start">
                <div className="width-100 flex-center-center justify-between gap-2">
                  <h3
                    name="Language"
                    className="text-color-blue-1 text-weight-bold"
                  >
                    {languageDB[4][language]}
                  </h3>
                  <select
                    name="languageSelect"
                    id=""
                    className=" border-color-1"
                    onChange={changeLanguage}
                    defaultValue={language}
                  >
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                  </select>
                </div>
                <Link to={"../../../../"} className="width-100">
                  <h3 name="Feaures" className="Link-dark text-weight-bold">
                    {languageDB[5][language]}
                  </h3>
                </Link>
                <Link to={"../../../../shared"} className="width-100">
                  <h3
                    name="Search by ID"
                    className="Link-dark text-weight-bold"
                  >
                    {languageDB[6][language]}
                  </h3>
                </Link>
                <Link to={"../../../../support"} className="width-100">
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    {languageDB[7][language]}
                  </h3>
                </Link>
                <div className="separator-1 border-color-1 width-100"></div>
                {/* ONLY DEV */}
                <h3
                  name="Support"
                  className="text-color-blue-1 text-weight-bold"
                >
                  / Dev /
                </h3>
                <Link to={"../../../../dashboard"} className="width-100">
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Dashboard
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/home"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Home
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/explore"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Explore
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/explore/1"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Details
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/collections"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Collections
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/new-file"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    New File
                  </h3>
                </Link>
                <Link to={"../../../../dashboard/collections/1"}>
                  <h3 name="Support" className="Link-dark text-weight-bold">
                    Details Editable
                  </h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* PROFILE */}
      {isProfileOpen && (
        <div className="ProfileMenu background-color-grey-10 border-radius-2 box-shadow-1 padding-3 gap-1">
          <img src={Icons.Profile} alt="" className="width-20" />
          <h2>
            {userProfile?.first}
            {""} {userProfile?.last}
          </h2>
          <Link to={"../../../dashboard/home"} className="width-100">
            <button
              name="Dashboard"
              className="width-100 flex-center-center border-radius-2 margin-top-1 button-blue"
              onClick={() => profileToggle()}
            >
              {languageDB[8][language]}
            </button>
          </Link>
          {/* <Link to={"../../../dashboard/settings"} className="width-100">
            <button
              name="Settings"
              className="width-100 flex-center-center border-radius-2"
              onClick={() => profileToggle()}
            >
              {languageDB[9][language]}
            </button>
          </Link> */}
          <button
            name="Log out"
            className="width-100 flex-center-center border-radius-2 button-dark"
            onClick={() => logoutButton()}
          >
            {languageDB[10][language]}
          </button>
        </div>
      )}
    </>
  );
};

export default Headbar;
