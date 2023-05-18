/*<-- ========== DetailsEditable ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { Link, useParams } from "react-router-dom";
import Icons from "../../assets/icons/Icons";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";

const DetailsEditable = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userFiles } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/
  const [editMode, setEditMode] = useState(false);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;
  const { id } = useParams();
  const file = userFiles.filter((file) => {
    return file.id === id;
  })[0];

  /*<-- ========== FUNTIONS ========== -->*/
  /*<-- Change language -->*/

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
        <div className="DetailsEditable_header_buttons margin-top-1">
          <button className="button-blue"></button>
          <button className="button-dark"></button>
        </div>
        <h3 className="text-weight-bold margin-top-2">File ID: {id}</h3>
      </div>
      <div className="DetailsEditable_form margin-top-2">
        <div className="DetailsEditable_form_block">
          <h3 className="text-color-grey-5">Data</h3>
          {!editMode && <h2 className="text-weight-bold">{file?.name}</h2>}
          {editMode && (
            <input type="text" className="border-radius-2 border-color-2" />
          )}
          <div className="separator-1 border-color-1 margin-top-1"></div>
        </div>
        <div className="DetailsEditable_form_block">
        <h3 className="text-color-grey-5">Photos</h3>
          <input type="file" className="border-radius-2 border-color-2" />
        </div>
      </div>
    </div>
  );
};

export default DetailsEditable;
