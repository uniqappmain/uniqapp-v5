import React from "react";

const Shared = () => {
  return (
    <div className="Shared padding-3 margin-auto margin-top-3 flex-col gap-1 border-radius-3 box-shadow-1">
      <h2 name="Sign in" className="text-weight-bold text-align-center">
        Shared Files
      </h2>
      <input
        name="text"
        className="border-radius-2 border-color-1"
        type="text"
        placeholder="File ID"
      />
      <button
        name="Search"
        className="button-blue border-radius-3 margin-0"
      >
        Search
      </button>
    </div>
  );
};

export default Shared;
