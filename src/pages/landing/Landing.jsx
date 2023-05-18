/*<-- ========== Landing ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import Images from "../../assets/images/Images";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "../../context/AppContext";

const Landing = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage, setCurrentPage } = useContext(AppContext);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Landing;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Setting current page -->*/
  useEffect(() => {
    setCurrentPage("Landing");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="Info_page">
      <div className="Landing_hero background-color-grey-9 background-pattern">
        <div className="Landing_hero_flex ">
          <div className="margin-bottom-3 max-width-40">
            <h1 name="Uniqapps" className="text-weight-bold">
              {languageDB[1][language]}
            </h1>
            <h2 name="Description" className="text-color-grey-5 margin-top-1">
              {languageDB[2][language]}
            </h2>
            <Link
              to={"../auth/signup"}
              className="margin-right-0 display-block width-fit"
            >
              <button
                name="Get started"
                className="button-dark border-radius-3 margin-0 margin-top-3"
              >
                {languageDB[3][language]}
              </button>
            </Link>
          </div>
          <div className="max-width-60 margin-top-3">
            <img
              className="background-color-grey-8 background-gradinet-1 border-radius-4"
              src={Images.Ring}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Landing_block background-color-grey-10"></div>
    </div>
  );
};

export default Landing;
