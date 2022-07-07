//manages the whole form

import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";

function Form() {
  //displaying form titles based on states

  const [page, setPage] = useState(0);

  const FormTitles = ["SignUp", "Personal Info", "Other"];

  const PageDisplay = () => {
    if (page === 0) {
      return <SignUpInfo />;
    } else if (page === 1) {
      return <PersonalInfo />;
    } else {
      return <OtherInfo />;
    }
  };

  return (
    <div className="form">
      <div className="progressbar">
        <div
          style={{
            width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="bady">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((prevPage) => prevPage - 1);
            }}
          >
            Prev
          </button>
          <button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
