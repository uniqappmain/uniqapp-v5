import React from "react";

const DevTheme = () => {
  return (
    <div>
      <div className="page-margin-top page-margin-left padding-3">
        <div>
          <div>div</div>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
          <h5>Header 5</h5>
          <h6>Header 6</h6>
          <p>Parragraph</p>
          <a href=".">Anchor link</a>
        </div>
        <br />
        <div>
          <select name="Select" id="" placeholder="Select">
            <option value="" disabled selected hidden>
              Select
            </option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
          </select>
          <br /> <br />
          <input type="file" />
          <br />
          <br />
          <button>Modal</button>
        </div>
        <br />
        <div>
          <form action="">
            <label htmlFor="">Label</label>
            <input type="text" placeholder="Input" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Text area"
            ></textarea>
            <button>Button</button>
          </form>
        </div>
        <br />
      </div>
    </div>
  );
};

export default DevTheme;
