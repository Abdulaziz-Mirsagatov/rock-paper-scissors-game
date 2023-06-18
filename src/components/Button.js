import React from "react";

const Button = ({ openRules }) => {
  return (
    <button className="btn rules-btn" onClick={openRules}>
      Rules
    </button>
  );
};

export default Button;
