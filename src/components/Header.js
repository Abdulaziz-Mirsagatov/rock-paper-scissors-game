import React from "react";
import logo from "../images/logo-bonus.svg";

const Header = ({ score }) => {
  return (
    <header className="header flexbox">
      <img src={logo} alt="app logo" />
      <div className="scoreboard grid-flow">
        <p>score</p>
        <h1>{score}</h1>
      </div>
    </header>
  );
};

export default Header;
