/*<-- ========== NewFile ========== -->*/
/*<-- Imports -->*/
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import multiLanguage from "../../services/multi-language/multiLanguage-v1";

const NewFile = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userProfile } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/
  const [input, setInput] = useState({
    category: "generic",
    subcategory: "any",
    visibility: "",
    name: "",
  });

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Setting current page -->*/
  useEffect(() => {
    //setInput({ ...input, subcategory: "any" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.category]);

  /*<-- Input handle change -->*/
  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="DetailsEditable">
      <div className="DetailsEditable_header">
        <Link className="flex-row" to="../collections">
          <img src={Icons.Back} alt="" />
          <p
            name="Back to My Collections"
            className="text-color-blue-1 margin-left-1 text-weight-bold margin-right-auto"
          >
            Back to My Collections
          </p>
        </Link>
        <br />
        <h2 className="text-weight-bold">Add new file</h2>
      </div>
      <div className="DetailsEditable_form margin-top-2">
        <div className="DetailsEditable_form_block">
          {/* ========== Category ========== */}
          <label>Category</label>
          <select
            name="category"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
          >
            <option value="generic">Generic belonging</option>
            <option value="antique">Antique</option>
            <option value="artwork">Artwork</option>
            <option value="gem">Gem</option>
            <option value="home">Home</option>
            <option value="jewerly">Jewerly</option>
            <option value="print">Print</option>
          </select>
          {/* ========== Category Close ========== */}
          {/* ========== Sub-Category ========== */}
          {input.category !== "generic" && (
            <>
              <label>Sub-category</label>
              {/* Sub-Category Antique */}
              {input.category === "antique" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                  <option value="furniture">Furniture</option>
                  <option value="numismatic">Numismatic</option>
                  <option value="object">Object</option>
                </select>
              )}
              {/* Sub-Category Antique Close */}
              {/* Sub-Category Artwork */}
              {input.category === "artwork" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                </select>
              )}
              {/* Sub-Category Artwork Close */}
              {/* Sub-Category Gem */}
              {input.category === "gem" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                  <option value="amber">Amber / Copal</option>
                  <option value="esmerald">Esmerald</option>
                </select>
              )}
              {/* Sub-Category Gem Close */}
              {/* Sub-Category Home */}
              {input.category === "home" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                  <option value="bicycle">Bycicle</option>
                  <option value="camera">Camera</option>
                  <option value="computer">Computer</option>
                  <option value="phone">Phone</option>
                  <option value="electronics">TV / Electronics</option>
                </select>
              )}
              {/* Sub-Category Home Close */}
              {/* Sub-Category Jewerly */}
              {input.category === "jewerly" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                  <option value="bracelet">Bracelet</option>
                  <option value="diadem">Diadem</option>
                  <option value="earrings">Earrings</option>
                  <option value="necklace">Neacklace</option>
                  <option value="needle">Needle</option>
                  <option value="twins">Twins</option>
                </select>
              )}
              {/* Sub-Category Jewerly Close */}
              {/* Sub-Category Print */}
              {input.category === "print" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={"Any"}
                >
                  <option value="any">Any</option>
                  <option value="book">Book</option>
                  <option value="map">Map</option>
                  <option value="document">Document</option>
                </select>
              )}
              {/* Sub-Category Print Close */}
            </>
          )}
          {/* ========== Sub-Category Close ========== */}
          {/* Print - Book Smart */}
          {input.subcategory === "book" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <button className="button-blue padding-3 margin-0 border-radius-2">
                Uniqapp Smart Book Finder
              </button>
            </div>
          )}
          {/* ========== Visibility ========== */}
          <label>Visibility</label>
          <select
            name="visibility"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
          >
            <option value="private" defaultChecked={true}>
              Private
            </option>
            <option value="public">Public</option>
          </select>
          {/* ========== Visibility Close ========== */}

          {/* ========== Photos ========== */}
          <label>Photos</label>
          <input type="file" className="border-radius-2 border-color-2" />
          {/* ========== Photos Close ========== */}
        </div>
        <div className="DetailsEditable_form_block margin-bottom-1">
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Data ========== */}
          {/* Name */}
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder=""
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          {/* Name Close */}
          {/* Description */}
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            rows={6}
            placeholder=""
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          {/* Description Close */}
          {/* ========== Data Close ========== */}
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Category Any Data ========== */}
          {/* Antique- Any Data Inputs */}
          {input.category === "antique" && (
            <div className="DetailsEditable_form_block">
              <input
                name="antique"
                type="text"
                placeholder="Antique Any"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Antique - Any Data Inputs Close */}
          {/* Artwork   Any Data Inputs */}
          {input.category === "artwork" && (
            <div className="DetailsEditable_form_block">
              <label>Author</label>
              <input
                name="artwork-any-author"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Technique</label>
              <input
                name="artwork-any-technique"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Artwork - Any Data Inputs Close */}
          {/* Gem - Any Data Inputs */}
          {input.category === "gem" && (
            <div className="DetailsEditable_form_block">
              <label>Gem Length [mm]</label>
              <input
                name="gem-any-length"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Gem Width [mm]</label>
              <input
                name="gem-any-width"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Gem Height [mm]</label>
              <input
                name="gem-any-height"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <h5>Gem Weigth [g]</h5>
              <input
                name="gem-any-weight"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Gem - Any Data Inputs Close */}
          {/* Jewerly - Any Data Inputs */}
          {input.category === "jewerly" && (
            <div className="DetailsEditable_form_block">
              <label>Gems</label>
              <input
                name="jewerly-any-gems"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Material</label>
              <input
                name="jewerly-any-material"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Jewerly - Any Data Inputs Close */}
          {/* Print - Any Data Inputs */}
          {input.category === "print" && (
            <div className="DetailsEditable_form_block">
              <label>Title</label>
              <input
                name="print-any-title"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Author</label>
              <input
                name="print-any-author"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Publisher</label>
              <input
                name="print-any-publisher"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Year</label>
              <input
                name="print-any-year"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Valorization</label>
              <input
                name="print-any-valorization"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Print - Book Data Inputs Close */}
          {/* ========== Category Data Any Closes ========== */}
        </div>
        <>
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Sub-Category Data ========== */}
          {/* Gem - Esmerald Data Inputs */}
          {input.subcategory === "esmerald" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <label>Esmerald color graduation [1-6]</label>
              <select
                name="gem-esmerald-color-graduation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">1 - Yellowish green</option>
                <option value="2">2 - Slightly yellowish green</option>
                <option value="3">3 - Green</option>
                <option value="4">4 - Slightly teal</option>
                <option value="5">5 - Moderately bluish green</option>
                <option value="6">6 - Very teal green</option>
              </select>
              <label>Esmerald tone graduation [1-7]</label>
              <select
                name="gem-esmerald-tone-graduation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">1 - Exremely low</option>
                <option value="2">2 - Very Low</option>
                <option value="3">3 - Low</option>
                <option value="4">4 - Moderate</option>
                <option value="5">5 - High</option>
                <option value="6">6 - Very High</option>
                <option value="7">7 - Extremely High</option>
              </select>
              <label>Esmerald color saturation [1-6]</label>
              <select
                name="gem-esmerald-color-saturation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">1 - Exremely low</option>
                <option value="2">2 - Very Low</option>
                <option value="3">3 - Low</option>
                <option value="4">4 - High</option>
                <option value="5">5 - Very High</option>
                <option value="6">6 - Extremely High</option>
              </select>
              <label>Percent of surface gloss due to internal reflection</label>
              <input
                name="gem-esmerald-percent-internalreflection"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Percent of window surface</label>
              <input
                name="gem-esmerald-percent-window?"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Percent of extintion</label>
              <input
                name="gem-esmerald-percent-extintion?"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Percent of dispersion</label>
              <input
                name="gem-esmerald-percent-dispersion"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Presence of zones of color change [1-4]</label>
              <select
                name="gem-esmerald-zonesofcolorchange"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">1 - Absent</option>
                <option value="2">2 - Slight</option>
                <option value="3">3 - Present</option>
                <option value="4">4 - Abundant</option>
              </select>
              <label>Color concentration effect on the perimeter [1-4]</label>
              <select
                name="gem-esmerald-zonesofcolorchange"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">1 - Absent</option>
                <option value="2">2 - Slight</option>
                <option value="3">3 - Present</option>
                <option value="4">4 - Abundant</option>
              </select>
            </div>
          )}
          {/* Part 2 */}
          {input.subcategory === "esmerald" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <label>Esmerald cut shape</label>
              <select
                name="gem-esmerald-cut-shape"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">Drop</option>
                <option value="2">Esmerald</option>
                <option value="3">Round</option>
                <option value="4">Princess</option>
                <option value="5">Heart</option>
                <option value="6">Marquise</option>
                <option value="7">Elongated esmerald</option>
                <option value="8">Oval</option>
                <option value="9">Other</option>
              </select>
              <label>Esmerald cut symmetry</label>
              <select
                name="gem-esmerald-cut-symmetry"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={""}
              >
                <option value="">Select</option>
                <option value="1">Drop</option>
                <option value="2">Esmerald</option>
                <option value="3">Round</option>
                <option value="4">Princess</option>
                <option value="5">Heart</option>
                <option value="6">Marquise</option>
                <option value="7">Elongated esmerald</option>
                <option value="8">Oval</option>
                <option value="9">Other</option>
              </select>
            </div>
          )}
          {/* Gem - Esmerald Data Inputs Close */}
          {/* ============================================================ */}
          {/* Jewerly - ** Data Inputs */}
          {/* Jewerly - ** Data Inputs Close */}
          {/* ============================================================ */}
          {/* Print - Book Data Inputs */}
          {input.subcategory === "book" && (
            <div className="DetailsEditable_form_block">
              <label>Book Identification Type</label>
              <select
                name="print-book-idtype"
                className="border-radius-2 border-color-2"
                placeholder=""
                onChange={handleChange}
              >
                <option value="isbn10" defaultChecked={true}>
                  ISBN 10
                </option>
                <option value="isbn13">ISBN 13</option>
                <option value="issn">ISSN</option>
              </select>
              <label>Book Identification Number</label>
              <input
                name="print-book-id"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Language</label>
              <input
                name="print-book-language"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Edition</label>
              <input
                name="print-book-edition"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Total number of pages</label>
              <input
                name="print-book-pages"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Book height [cm]</label>
              <input
                name="print-book-height"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Book width [cm]</label>
              <input
                name="print-book-width"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Book tickness [cm]</label>
              <input
                name="print-book-tickness"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Print - Book Data Inputs Close */}
          {/* Print - Map Data Inputs */}
          {input.subcategory === "map" && (
            <div className="DetailsEditable_form_block">
              <label>Map Edition</label>
              <input
                name="print-map-edition"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Map Scale</label>
              <input
                name="print-map-scale"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Map width [cm]</label>
              <input
                name="print-map-width"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <label>Map height [cm]</label>
              <input
                name="print-map-height"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Print - Map Data Inputs Close */}
          {/* ============================================================ */}
          {/* ============================================================ */}
        </>
        <button className="button-dark width-100 padding-3 flex-justifyCenter margin-bottom-3">
          Create
        </button>
      </div>
    </div>
  );
};

export default NewFile;
