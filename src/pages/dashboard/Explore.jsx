import React from "react";
import FileCard from "../components/cards/FileCard";
import { Link } from "react-router-dom";

const Explore = () => {
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
        <Link to={"../../../dashboard/new-file"}>
          <button className="border-radius-3 button-blue">Search</button>
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
