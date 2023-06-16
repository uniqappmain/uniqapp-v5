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
    setInput({ ...input, subcategory: "any" });
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
          <h3>Category and Visibility</h3>
          {/* ========== Category ========== */}
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
          {/* ========== Visibility ========== */}
          <select
            name="visibility"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
          >
            <option value="private" defaultChecked={true}>
              Private visibility
            </option>
            <option value="public">Public visibility</option>
          </select>
          {/* ========== Visibility Close ========== */}
          {/* ========== Photos ========== */}
          <h3>Photos</h3>
          <input type="file" className="border-radius-2 border-color-2" />
          {/* ========== Photos Close ========== */}
        </div>
        <div className="DetailsEditable_form_block margin-bottom-1">
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Data ========== */}
          <h3>Data</h3>
          {/* Name */}
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          {/* Name Close */}
          {/* Description */}
          <textarea
            name="description"
            type="text"
            rows={6}
            placeholder="Description"
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          {/* Description Close */}
          {/* ========== Data Close ========== */}
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Category Data ========== */}
          {/* Antique Data Inputs */}
          {input.category === "antique" && (
            <div className="DetailsEditable_form_block">
              <input
                name="antique-"
                type="text"
                placeholder="antique-"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Antique Data Inputs Close */}
          {/* Artwork Data Inputs */}
          {input.category === "art" && (
            <div className="DetailsEditable_form_block">
              <input
                name="art-author"
                type="text"
                placeholder="Author"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="art-technique"
                type="text"
                placeholder="Technique"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Artwork Data Inputs Close */}
          {/* Gem Data Inputs */}
          {input.category === "gem" && (
            <div className="DetailsEditable_form_block">
              <h3>Gem Geometry [mm] [g]</h3>
              <input
                name="gem-length"
                type="number"
                placeholder="Length"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="gem-width"
                type="number"
                placeholder="Width"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="gem-height"
                type="number"
                placeholder="Height"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="gem-weight"
                type="number"
                placeholder="Weight"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Gem Data Inputs Close */}
          {/* Jewerly Data Inputs */}
          {input.category === "jewerly" && (
            <div className="DetailsEditable_form_block">
              <input
                name="gems"
                type="text"
                placeholder="Gems"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="material"
                type="text"
                placeholder="Material"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Jewerly Data Inputs Close */}
          {/* Print - Book Data Inputs */}
          {input.subcategory === "book" && (
            <div className="DetailsEditable_form_block">
              <input
                name="print-book-author"
                type="text"
                placeholder="Author"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="print-book-edition"
                type="text"
                placeholder="Edition"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Print - Book Data Inputs Close */}
          {/* ========== Category Data Closes ========== */}
        </div>
        <div>
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Sub-Category Data ========== */}
          {/* Gem - Esmerald Data Inputs */}
          {input.subcategory === "esmerald" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <h3>Esmerald Color graduation [1-6]</h3>
              <select
                name="esmerald-color-graduation"
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
            </div>
          )}
          {/* Gem - Esmerald Data Inputs Close */}
          {/* ============================================================ */}
          {/* ============================================================ */}
        </div>
          <button className="button-dark width-100 padding-3 flex-justifyCenter margin-bottom-3">Create</button>
      </div>
    </div>
  );
};

export default NewFile;
