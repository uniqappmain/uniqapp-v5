/*<-- ========== DetailsEditable ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { Link, useParams } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import QR from "../components/qr/QR";

const DetailsEditable = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userFiles } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/
  const [editMode, setEditMode] = useState(false);
  const [input, setInput] = useState({});
  const [detailsModal, setDetailsModal] = useState(false);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;
  const { id } = useParams();
  const file = userFiles.filter((file) => {
    return file.id === id;
  })[0];

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

  /*<-- Edit Mode / View Mode -->*/
  const toggleMode = () => {
    setEditMode(!editMode);
  };

  const toggleModal = () => {
    setDetailsModal(!detailsModal);
  };

  const copyLink = () =>
    // Copy the text inside the text field
    navigator.clipboard.writeText(
      `https://uniqapp-v5.netlify.app/shared/${id}`
    );
  /*<-- ========== RETURN ========== -->*/
  return (
    <div className="DetailsEditable">
      <div className="DetailsEditable_header">
        <Link className="flex-row" to="../collections">
          <img src={Icons.Back} alt="" />
          <p
            name="Back to My Collections"
            className="text-color-blue-1 margin-left-1 text-weight-bold"
          >
            Back to My Collections
          </p>
        </Link>
        <div className="DetailsEditable_header_buttons margin-top-2">
          <button className="button-dark flex-center-center">
            {/* Transfer */}
            <img src={Icons.Transfer} alt="" />
          </button>
          <button
            className="button-dark flex-center-center"
            onClick={toggleModal}
          >
            {/* QR */} <img src={Icons.QR} alt="" />
          </button>
          <button className="button-dark flex-center-center">
            {/* PDF */} <img src={Icons.PDF} alt="" />
          </button>
          <button
            className="button-blue flex-center-center"
            onClick={toggleMode}
          >
            {/* Edit */} <img src={Icons.Edit} alt="" />
          </button>
          <button className="button-red flex-center-center">
            {/* Delete */} <img src={Icons.Trash} alt="" />
          </button>
        </div>
        <h3 className="text-weight-bold margin-top-2">File ID: {id}</h3>
        {editMode && (
          <h2 className="margin-top-1 text-color-blue-1 text-weight-bold">
            Edit Mode
          </h2>
        )}
      </div>
      {/* ------------------------------------------------------------ */}
      {/* ------------------------------------------------------------ */}
      {/* VIEW MODE */}
      <div className="DetailsEditable_form margin-top-2">
        <div className="DetailsEditable_form_block">
          {/* ========== Photos ========== */}
          <label>Photos</label>
          <input
            type="file"
            className="border-radius-2 border-color-2"
            disabled={!editMode}
          />
          {/* ========== Photos Close ========== */}
          {/* ========== Category ========== */}
          <label>Category</label>
          <select
            name="category"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
            defaultValue={file.category}
            disabled={!editMode}
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
          {file.category !== "generic" && (
            <>
              <label>Sub-category</label>
              {/* Sub-Category Antique */}
              {file.category === "antique" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
                >
                  <option value="any">Any</option>
                  <option value="furniture">Furniture</option>
                  <option value="numismatic">Numismatic</option>
                  <option value="object">Object</option>
                </select>
              )}
              {/* Sub-Category Antique Close */}
              {/* Sub-Category Artwork */}
              {file.category === "artwork" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
                >
                  <option value="any">Any</option>
                </select>
              )}
              {/* Sub-Category Artwork Close */}
              {/* Sub-Category Gem */}
              {file.category === "gem" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
                >
                  <option value="any">Any</option>
                  <option value="amber">Amber / Copal</option>
                  <option value="esmerald">Esmerald</option>
                </select>
              )}
              {/* Sub-Category Gem Close */}
              {/* Sub-Category Home */}
              {file.category === "home" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
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
              {file.category === "jewerly" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
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
              {file.category === "print" && (
                <select
                  name="subcategory"
                  className="border-radius-2 border-color-2"
                  placeholder="Subcategory"
                  onChange={handleChange}
                  defaultValue={file.subcategory}
                  disabled={!editMode}
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
          <label>Visibility</label>
          <select
            name="visibility"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
            defaultValue={file.visibility}
            disabled={!editMode}
          >
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
          {/* ========== Visibility Close ========== */}
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
            defaultValue={file.name}
            onChange={handleChange}
            disabled={!editMode}
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
            defaultValue={file.description}
            disabled={!editMode}
          />
          {/* Description Close */}
          {/* ========== Data Close ========== */}
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Category Any Data ========== */}
          {/* Antique- Any Data Inputs */}
          {file.category === "antique" && (
            <div className="DetailsEditable_form_block">
              <input
                name="antique"
                type="text"
                placeholder="Antique Any"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.antique}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Antique - Any Data Inputs Close */}
          {/* Artwork   Any Data Inputs */}
          {file.category === "artwork" && (
            <div className="DetailsEditable_form_block">
              <label>Author</label>
              <input
                name="artwork_any_author"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.artwork_any_author}
                disabled={!editMode}
              />
              <label>Technique</label>
              <input
                name="artwork_any_technique"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.artwork_any_technique}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Artwork - Any Data Inputs Close */}
          {/* Gem - Any Data Inputs */}
          {file.category === "gem" && (
            <div className="DetailsEditable_form_block">
              <label>Gem Length [mm]</label>
              <input
                name="gem_any_length"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_any_length}
                disabled={!editMode}
              />
              <label>Gem Width [mm]</label>
              <input
                name="gem_any_width"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_any_width}
                disabled={!editMode}
              />
              <label>Gem Height [mm]</label>
              <input
                name="gem_any_height"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_any_height}
                disabled={!editMode}
              />
              <h5>Gem Weigth [g]</h5>
              <input
                name="gem_any_weight"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_any_weight}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Gem - Any Data Inputs Close */}
          {/* Jewerly - Any Data Inputs */}
          {input.category === "jewerly" && (
            <div className="DetailsEditable_form_block">
              <label>Gems</label>
              <input
                name="jewerly_any_gems"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.jewerly_any_gems}
                disabled={!editMode}
              />
              <label>Material</label>
              <input
                name="jewerly_any_material"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.jewerly_any_material}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Jewerly - Any Data Inputs Close */}
          {/* Print - Any Data Inputs */}
          {file.category === "print" && (
            <div className="DetailsEditable_form_block">
              <label>Title</label>
              <input
                name="print_any_title"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_any_title}
                disabled={!editMode}
              />
              <label>Author</label>
              <input
                name="print_any_author"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_any_author}
                disabled={!editMode}
              />
              <label>Publisher</label>
              <input
                name="print_any_publisher"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_any_publisher}
                disabled={!editMode}
              />
              <label>Year</label>
              <input
                name="print_any_year"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_any_year}
                disabled={!editMode}
              />
              <label>Valorization</label>
              <input
                name="print_any_valorization"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_any_valorization}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Print - Book Data Inputs Close */}
        </div>
        {/* ========== Category Data Any Closes ========== */}
        <>
          {/* ============================================================ */}
          {/* ============================================================ */}
          {/* ========== Sub-Category Data ========== */}
          {/* Gem - Esmerald Data Inputs */}
          {file.subcategory === "esmerald" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <label>Esmerald color graduation [1-6]</label>
              <select
                name="gem_esmerald_color_graduation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_color_graduation}
                disabled={!editMode}
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
                name="gem_esmerald_tone_graduation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_tone_graduation}
                disabled={!editMode}
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
                name="gem_esmerald_color_saturation"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_color_saturation}
                disabled={!editMode}
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
                name="gem_esmerald_percent_internalreflection"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_percent_internalreflection}
                disabled={!editMode}
              />
              <label>Percent of window surface</label>
              <input
                name="gem_esmerald_percent_window"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_percent_window}
                disabled={!editMode}
              />
              <label>Percent of extintion</label>
              <input
                name="gem_esmerald_percent_extintion"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_percent_extintion}
                disabled={!editMode}
              />
              <label>Percent of dispersion</label>
              <input
                name="gem_esmerald_percent_dispersion"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_percent_dispersion}
                disabled={!editMode}
              />
              <label>Presence of zones of color change [1-4]</label>
              <select
                name="gem_esmerald_zonesofcolorchange"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_zonesofcolorchange}
                disabled={!editMode}
              >
                <option value="">Select</option>
                <option value="1">1 - Absent</option>
                <option value="2">2 - Slight</option>
                <option value="3">3 - Present</option>
                <option value="4">4 - Abundant</option>
              </select>
              <label>Color concentration effect on the perimeter [1-4]</label>
              <select
                name="gem_esmerald_zonesofcolorchange"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_zonesofcolorchange}
                disabled={!editMode}
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
          {file.subcategory === "esmerald" && (
            <div className="DetailsEditable_form_block margin-bottom-1">
              <label>Esmerald cut shape</label>
              <select
                name="gem_esmerald_cut_shape"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_cut_shape}
                disabled={!editMode}
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
                name="gem_esmerald_cut_symmetry"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.gem_esmerald_cut_symmetry}
                disabled={!editMode}
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
          {file.subcategory === "book" && (
            <div className="DetailsEditable_form_block">
              <label>Book Identification Type</label>
              <select
                name="print_book_idtype"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_idtype}
                disabled={!editMode}
              >
                <option value="isbn10" defaultChecked={true}>
                  ISBN 10
                </option>
                <option value="isbn13">ISBN 13</option>
                <option value="issn">ISSN</option>
              </select>
              <label>Book Identification Number</label>
              <input
                name="print_book_id"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_id}
                disabled={!editMode}
              />
              <label>Language</label>
              <input
                name="print_book_language"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_language}
                disabled={!editMode}
              />
              <label>Edition</label>
              <input
                name="print_book_edition"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_edition}
                disabled={!editMode}
              />
              <label>Total number of pages</label>
              <input
                name="print_book_pages"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_pages}
                disabled={!editMode}
              />
              <label>Book height [cm]</label>
              <input
                name="print_book_height"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_height}
                disabled={!editMode}
              />
              <label>Book width [cm]</label>
              <input
                name="print_book_width"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_width}
                disabled={!editMode}
              />
              <label>Book tickness [cm]</label>
              <input
                name="print_book_tickness"
                type="number"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_book_tickness}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Print - Book Data Inputs Close */}
          {/* Print - Map Data Inputs */}
          {file.subcategory === "map" && (
            <div className="DetailsEditable_form_block">
              <label>Map Edition</label>
              <input
                name="print_map_edition"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_map_edition}
                disabled={!editMode}
              />
              <label>Map Scale</label>
              <input
                name="print_map_scale"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_map_scale}
                disabled={!editMode}
              />
              <label>Map width [cm]</label>
              <input
                name="print_map_width"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_map_width}
                disabled={!editMode}
              />
              <label>Map height [cm]</label>
              <input
                name="print_map_height"
                type="text"
                placeholder=""
                className="border-radius-2 border-color-2"
                onChange={handleChange}
                defaultValue={file.print_map_height}
                disabled={!editMode}
              />
            </div>
          )}
          {/* Print - Map Data Inputs Close */}
          {/* ============================================================ */}
          {/* ============================================================ */}
        </>
        {editMode && (
          <>
            <button className="button-blue width-100 padding-3 flex-justifyCenter margin-bottom-3">
              Update
            </button>
          </>
        )}
      </div>
      {/* ============================================================ */}
      {/* ============================================================ */}
      {/* Details Modal */}
      {detailsModal && (
        <>
          <div className="DetailsModal">
            <div className="DetailsModal_container box-shadow-2 background-color-grey-10 flex-center-center">
              <div className="text-align-center">
                <div className="flex-center-center">
                  <img
                    className="width-10  margin-right-1"
                    src={Icons.Vault}
                    alt=""
                  />
                  <h2 className="text-weight-bold margin-0">Uniqapp</h2>
                </div>
                <p className="text-weight-bold margin-top-2">File ID: {id}</p>
                <br />
                <QR qrValue={"https://uniqapp-v5.netlify.app/shared/" + id} />
                <button
                  className="button-dark border-radius-2 margin-0 width-100 text-color-grey-10 margin-top-2 padding-3 flex-center-center text-weight-bold"
                  onClick={copyLink}
                >
                  Copy Link
                </button>
                <button
                  className="button-blue border-radius-2 margin-0 width-100 text-color-grey-10 margin-top-1 padding-3 flex-center-center text-weight-bold"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailsEditable;
