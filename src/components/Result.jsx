import { useContext } from "react";
import { ScoreContext } from "../contexts/ScoreContext";
import Player from "./Player";

function Result() {
  const { scores } = useContext(ScoreContext);

  const totalScore = scores.reduce((acc, cur) => acc + cur.score, 0);
  return (
    <>
      <Player />
      <h1>Your final score is : {totalScore}</h1>

      {scores.map((s) => {
        return (
          <>
            <h4>Question {s.id}</h4>

            <ul>
              <li>
                Selected Answer: <b>{s.selectedOption || "Not selected"}</b>
              </li>
              <li>
                score: <b>{s.score}</b>
              </li>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Result;
