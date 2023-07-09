/*<-- ========== Explore ========== -->*/
/*<-- Imports -->*/
import React, { useContext } from "react";
import FileCard from "../components/cards/FileCard";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { Link } from "react-router-dom";

const Explore = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userProfile } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  const searchRequest = () => {};

  /*<-- ========== RETURN ========== -->*/
  return (
    <div>
      <div className="Collections_StickyMenu border-radius-3 border-width-0 border-color-1 box-shadow-2">
        <input
          name="name"
          type="text"
          className="border-radius-3 border-color-0"
          placeholder="Search..."
        />
        <select
          name="category"
          id=""
          className="border-radius-3 border-color-1 background-color-grey-9"
        >
          <option value="" defaultChecked>
            All
          </option>
          <option value="antique">Antique</option>
          <option value="artwork">Artwork</option>
          <option value="gem">Gem</option>
          <option value="home">Home</option>
          <option value="jewerly">Jewerly</option>
          <option value="print">Print</option>
        </select>
        <Link>
          <button
            className="border-radius-3 button-blue"
            onClick={searchRequest}
          >
            Search
          </button>
        </Link>
      </div>
      <div className="flex-wrap-list margin-bottom-2">
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
        <FileCard />
      </div>
    </div>
  );
};

export default Explore;
