import React from "react";
import rulesImg from "../images/image-rules-bonus.svg";
import closeIcon from "../images/icon-close.svg";

const Rules = ({ closeRules }) => {
  return (
    <div className="rules-page grid-flow">
      <h1>Rules</h1>
      <img src={rulesImg} alt="rules" className="rules-img" />
      <img
        src={closeIcon}
        alt="close button"
        className="btn close-btn"
        onClick={closeRules}
      />
    </div>
  );
};

export default Rules;
