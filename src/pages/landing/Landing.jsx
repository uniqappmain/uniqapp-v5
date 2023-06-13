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
      {/*<-- ========== LANDING HERO   ========== -->*/}
      <div className="Landing_hero background-color-grey-9 background-pattern">
        <div className="Landing_hero_flex ">
          <div className="margin-bottom-3 max-width-40">
            <h1 name="Uniqapps" className="text-weight-bold">
              {languageDB[1][language]}
            </h1>
            <h2 name="Description" className="text-color-grey-5 margin-top-1">
              {languageDB[2][language]}
            </h2>
            <div
              className="flex-row gap-1 margin-auto dual-buttons"
            >
              <Link
                to={"../auth/signup"}
                className="margin-right-0 display-block width-fit"
              >
                <button
                  name="Get started"
                  className="button-blue border-radius-3 margin-0 margin-top-3"
                >
                  {languageDB[3][language]}
                </button>
              </Link>
              <Link
                to={"../dashboard/explore"}
                className="margin-right-0 display-block width-fit"
              >
                <button
                  name="Get started"
                  className="button-green border-radius-3 margin-0 margin-top-3"
                >
                  Try Demo
                </button>
              </Link>
            </div>
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
      {/*<-- ========== LANDING FOOTER ========== -->*/}
      <div className="Landing_footer">
        <div className="Landing_footer_block gap-2 border-top-width-0 border-rigth-width-0 border-bottom-width-0 border-color-1">
          <h5 className="text-weight-bold">Product</h5>
          <div className="Landing_footer_block_group gap-1 ">
            <h5>Features</h5>
            <h5>Pricing</h5>
            <h5>Support</h5>
          </div>
        </div>
        <div className="Landing_footer_block gap-2 border-top-width-0 border-rigth-width-0 border-bottom-width-0 border-color-1">
          <h5 className="text-weight-bold">Company</h5>
          <div className="Landing_footer_block_group gap-1 ">
            <h5>About</h5>
            <h5>Contact</h5>
            <h5>Privacy Terms</h5>
          </div>
        </div>
        <div className="Landing_footer_block gap-2 border-top-width-0 border-rigth-width-0 border-bottom-width-0 border-color-1">
          <h5 className="text-weight-bold">Community</h5>
          <div className="Landing_footer_block_group gap-1 ">
            <h5>Facebook</h5>
            <h5>Instagram</h5>
            <h5>Twitter</h5>
          </div>
        </div>
        <div className="Landing_footer_block gap-2 border-top-width-0 border-bottom-width-0 border-color-1">
          <h3 className="text-weight-bold">Uniqapp</h3>
          <div className="Landing_footer_block_group gap-1 ">
            <h5>The best place to ensure the identity of your belongings.</h5>
          </div>
        </div>
      </div>
      <div className="Landing_postfooter">
        <h6 className="text-weight-bold text-color-grey-4">2023 - Uniqapp</h6>
        <h6 className="text-weight-bold text-color-grey-4">
          Powered by React & Firebase
        </h6>
      </div>
    </div>
  );
};

export default Landing;
