/*<-- ========== Collections ========== -->*/
/*<-- Imports -->*/
import multiLanguage from "../../services/multi-language/multiLanguage-v1";
import { useContext, useEffect, useState } from "react";
import FileCard from "../components/cards/FileCard";
import { AppContext } from "../../context/AppContext";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import Icons from "../../assets/icons/Icons";

const Collections = () => {
  /*<-- ========== PROVIDERS ========== -->*/
  const { appLanguage } = useContext(AppContext);
  const { userFiles } = useContext(UserContext);

  /*<-- ========== STATES ========== -->*/
  const [input, setInput] = useState({
    name: "",
    category: "",
  });
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [previewFile, setPreviewFile] = useState(null);
  const [previewModal, setPreviewModal] = useState(false);

  /*<-- ========== VARIABLES ========== -->*/
  const languageDB = multiLanguage.components.Headbar;
  const language = appLanguage;

  /*<-- ========== FUNTIONS ========== -->*/
  const previewOpen = (file) => {
    setPreviewFile(file);
    setPreviewModal(true);
  };
  const previewClose = () => {
    setPreviewFile(null);
    setPreviewModal(false);
  };

  /*<-- Input handle change -->*/
  const handleChange = ({ target: { name, value } }) => {
    setInput({ ...input, [name]: value });
  };

  /*<-- Input effect -->*/
  useEffect(() => {
    // Filter File
    if (input.category !== "" && input.name !== "") {
      const catFiltered = userFiles.filter((file) => {
        return file.category.toLowerCase() === input.category.toLowerCase();
      });
      setFilteredFiles(
        catFiltered.filter((file) => {
          return file.name.toLowerCase().includes(input.name.toLowerCase());
        })
      );
      //console.log(file)
    }
    if (input.category !== "" && input.name === "") {
      setFilteredFiles(
        userFiles.filter((file) => {
          return file.category.toLowerCase() === input.category.toLowerCase();
        })
      );
      //console.log(file)
    }
    if (input.category === "" && input.name !== "") {
      setFilteredFiles(
        userFiles.filter((file) => {
          return file.name.toLowerCase().includes(input.name.toLowerCase());
        })
      );
      //console.log(file)
    }
    if (input.category === "" && input.name === "") {
      setFilteredFiles(userFiles);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  /*<-- ========== RETURN ========== -->*/
  return (
    <div>
      <div className="Collections_StickyMenu border-radius-3 border-width-0 border-color-1 box-shadow-2">
        <input
          name="name"
          type="text"
          className="border-radius-3 border-color-0"
          placeholder="Search..."
          onChange={handleChange}
        />
        <select
          name="category"
          id=""
          className="border-radius-3 border-color-1 background-color-grey-9"
          onChange={handleChange}
        >
          <option value="" defaultChecked>
            All
          </option>
          <option value="art">Art</option>
          <option value="books">Books</option>
          <option value="jewerly">Jewerly</option>
          <option value="antiques">Antiques</option>
          <option value="others">Others</option>
        </select>
        <Link to={"../../../dashboard/new-file"}>
          <button className="border-radius-3 button-green">New File</button>
        </Link>
      </div>
      <div className="flex-wrap-list margin-bottom-2">
        {filteredFiles.map((file) => (
          <div
            key={file.id}
            onClick={() => {
              previewOpen(file);
            }}
          >
            <FileCard className="flex-center border-width-0 padding-0 local-image-button"></FileCard>
          </div>
        ))}
      </div>
      {previewModal && (
        <div className="PreviewModal">
          <div className="PreviewModal_container box-shadow-2 background-color-grey-10">
            <div className="Preview_header">
              <h2 className="text-weight-bold margin-left-2">
                {previewFile?.name}
              </h2>
              <div className="Preview_header_buttons">
                <Link to={`../../../dashboard/collections/${previewFile.id}`}>
                  <button
                    className="button-green border-radius-2"
                    onClick={previewClose}
                  >
                    Details
                  </button>
                </Link>
                <button
                  className="button-blue border-radius-2"
                  onClick={previewClose}
                >
                  <img src={Icons.Close} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collections;
