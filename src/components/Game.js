import React from "react";

const Game = ({
  playerChoice,
  computerChoice,
  computerMadeChoice,
  winnerDetermined,
  isDraw,
  didPlayerWin,
  restartGame,
}) => {
  const playerImg = require("../images/icon-" + playerChoice + ".svg");
  const computerImg = require("../images/icon-" + computerChoice + ".svg");

  return (
    <section className="game-section grid-flow">
      <div className="player grid-flow">
        <div className={"img-container flexbox player-choice " + playerChoice}>
          <img src={playerImg} alt="player choice" />
        </div>
        <h1>You Picked</h1>
      </div>

      {winnerDetermined && (
        <div className="result grid-flow">
          <h1>{isDraw ? "Draw" : didPlayerWin ? "You Win" : "You Loose"}</h1>
          <button className="btn restart-btn" onClick={restartGame}>
            Play again
          </button>
        </div>
      )}

      <div className="computer grid-flow">
        {computerMadeChoice ? (
          <div
            className={
              "img-container flexbox computer-choice " + computerChoice
            }
          >
            <img src={computerImg} alt="computer choice" />
          </div>
        ) : (
          <div className="blank"></div>
        )}
        <h1>The House Picked</h1>
      </div>
    </section>
  );
};

export default Game;
