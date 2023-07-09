/*<-- ========== Home ========== -->*/
/*<-- Imports -->*/
import { useContext } from "react";
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import HomeCard from "../components/cards/HomeCard";

const Home = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userProfile } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/

  /*<-- ========== RETURN ========== -->*/
  return (
    <div>
      <h2 className="margin-0 text-weight-bold margin-left-1">
        Welcome back, {userProfile.first}
      </h2>
      <h3 className="margin-0 text-weight-bold margin-top-2 text-color-grey-5 margin-left-1">
        Quick Topics
      </h3>
      <div className="flex-wrap-list margin-top-2 margin-bottom-2">
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="Trends"
        />
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="My Collection"
        />
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="Most Liked"
        />
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="Antiques"
        />
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="Esmeralds"
        />
        <HomeCard
          className="flex-center border-width-0 padding-0 local-image-button"
          name="Books"
        />
      </div>
    </div>
  );
};

export default Home;
