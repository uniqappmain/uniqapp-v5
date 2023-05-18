import multiLanguage from "../../../services/multi-language/multiLanguage-v1";
import { NavLink } from "react-router-dom";
import Icons from "../../../assets/icons/Icons";
import { useContext, useState } from "react";
import { AppContext } from "../../../context/AppContext";

const Nav = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);

  /*<-- ========== STATES ========== -->*/
  const [isShort, setIsShort] = useState(true);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Dashboard;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  const NavShort = () => {
  };

  NavShort();

  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="Nav background-color-grey-9 box-shadow- border-color-1">
      <NavLink to={"../../../../dashboard/home"} className="border-radius-2">
        <img src={Icons.Home} alt="" className="margin-left-1" />
        <h3 name="Support" className="Link-dark text-weight-bold">
          {languageDB[1][language]}
        </h3>
      </NavLink>
      <NavLink to={"../../../../dashboard/explore"} className="border-radius-2">
        <img src={Icons.Explore} alt="" className="margin-left-1" />
        <h3 name="Support" className="Link-dark text-weight-bold">
          {languageDB[2][language]}
        </h3>
      </NavLink>
      <NavLink
        to={"../../../../dashboard/collections"}
        className="border-radius-2"
      >
        <img src={Icons.Collections} alt="" className="margin-left-1" />
        <h3 name="Support" className="Link-dark text-weight-bold">
          {languageDB[3][language]}
        </h3>
      </NavLink>
    </div>
  );
};

export default Nav;
