import React from "react";
import lizardIcon from "../images/icon-lizard.svg";
import paperIcon from "../images/icon-paper.svg";
import rockIcon from "../images/icon-rock.svg";
import spockIcon from "../images/icon-spock.svg";
import scissorsIcon from "../images/icon-scissors.svg";

const Main = ({ choose }) => {
  return (
    <main className="main">
      <div
        className="img-container flexbox lizard"
        id="lizard"
        onClick={() => choose("lizard")}
      >
        <img src={lizardIcon} alt="game icon" />
      </div>
      <div
        className="img-container flexbox paper"
        id="paper"
        onClick={() => choose("paper")}
      >
        <img src={paperIcon} alt="game icon" />
      </div>
      <div
        className="img-container flexbox rock"
        id="rock"
        onClick={() => choose("rock")}
      >
        <img src={rockIcon} alt="game icon" />
      </div>
      <div
        className="img-container flexbox spock"
        id="spock"
        onClick={() => choose("spock")}
      >
        <img src={spockIcon} alt="game icon" />
      </div>
      <div
        className="img-container flexbox scissors"
        id="scissors"
        onClick={() => choose("scissors")}
      >
        <img src={scissorsIcon} alt="game icon" />
      </div>
    </main>
  );
};

export default Main;
