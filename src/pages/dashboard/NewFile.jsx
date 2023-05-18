/*<-- ========== NewFile ========== -->*/
/*<-- Imports -->*/
import { useContext, useState } from "react";
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
    visibility: "private",
    category: "generic",
    name: "",
  });

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Input handle change -->*/
  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

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
          <h3>Data</h3>
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
          <select
            name="category"
            className="border-radius-2 border-color-2"
            placeholder="Category"
            onChange={handleChange}
          >
            <option value="generic" defaultChecked={true}>
              Generic belonging
            </option>
            <option value="antique">Antique</option>
            <option value="art">Art</option>
            <option value="book">Book</option>
            <option value="jewerly">Jewerly</option>
            <option value="other">Other</option>
          </select>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          <textarea
            name="description"
            type="text"
            rows={6}
            placeholder="Description"
            className="border-radius-2 border-color-2"
            onChange={handleChange}
          />
          {/* Art inputs */}
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
          {/* Book inputs */}
          {input.category === "book" && (
            <div className="DetailsEditable_form_block">
              <input
                name="book-author"
                type="text"
                placeholder="Author"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
              <input
                name="book-edition"
                type="text"
                placeholder="Edition"
                className="border-radius-2 border-color-2"
                onChange={handleChange}
              />
            </div>
          )}
          {/* Jewerly inputs */}
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
        </div>
        <div className="DetailsEditable_form_block margin-bottom-3">
          <h3>Photos</h3>
          <input type="file" className="border-radius-2 border-color-2" />
        </div>
      </div>
    </div>
  );
};

export default NewFile;
