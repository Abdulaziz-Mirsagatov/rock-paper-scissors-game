import { useState } from "react";
import "./styles/css/index.css";
import Button from "./components/Button";
import Header from "./components/Header";
import Main from "./components/Main";
import Rules from "./components/Rules";
import Game from "./components/Game";

function App() {
  const [rulesPage, setRulesPage] = useState(false);
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [computerMadeChoice, setComputerMadeChoice] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [didPlayerWin, setDidPlayerWin] = useState(false);
  const [winnerDetermined, setWinnerDetermined] = useState(false);
  const [score, setScore] = useState(0);

  function play(choice, randNum) {
    setPlayerChoice(choice);

    const choices = {
      0: "rock",
      1: "paper",
      2: "scissors",
      3: "spock",
      4: "lizard",
    };
    setComputerChoice(choices[randNum]);
    setComputerMadeChoice(true);

    const winSet = {
      rock: ["lizard", "scissors"],
      paper: ["rock", "spock"],
      scissors: ["paper", "lizard"],
      spock: ["scissors", "rock"],
      lizard: ["spock", "paper"],
    };
    const draw = choice === choices[randNum];
    const win = winSet[choice].includes(choices[randNum]);
    if (win) setScore((score) => score + 1);
    else if (!draw && !win) setScore((score) => score - 1);
    setIsDraw(draw);
    setDidPlayerWin(() => {
      return win;
    });
    setWinnerDetermined(true);
  }

  return (
    <div className="wrapper grid-flow">
      <Header score={score} />
      {playerChoice ? (
        <Game
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          computerMadeChoice={computerMadeChoice}
          isDraw={isDraw}
          didPlayerWin={didPlayerWin}
          winnerDetermined={winnerDetermined}
          restartGame={() => setPlayerChoice("")}
        />
      ) : (
        <Main
          choose={(choice) => play(choice, Math.floor(Math.random() * 5))}
        />
      )}
      <Button openRules={() => setRulesPage(true)} />
      {rulesPage && (
        <>
          <div className="overlay"></div>
          <Rules closeRules={() => setRulesPage(false)} />
        </>
      )}
    </div>
  );
}

export default App;
