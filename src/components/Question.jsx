import { useContext } from "react";

import { ScoreContext } from "../contexts/ScoreContext";

import Player from "./Player";
import ProgressBar from "./ProgressBar";
import Timer from "./Timer";

import Label from "./styled/Label";
import Button from "./styled/Button";
import Container from "./styled/Container";
import ButtonsContainer from "./styled/ButtonsContainer";
import { CheckboxFiled } from "./styled/Field";

import { useLoaderData, useNavigate } from "react-router-dom";

function Question() {
  const navigate = useNavigate();

  const { scores, updateScore } = useContext(ScoreContext);
  const { id, question, options, answer } = useLoaderData();
  const isLast = id === 10;

  const score = scores[id - 1];

  const handlePrevClicked = () => {
    navigate(`/question/${id - 1}`);
  };

  const handleNextClicked = () => {
    navigate(`/question/${id + 1}`);
  };

  return (
    <>
      <Player />
      <Timer />

      <ProgressBar questionNumber={id} isSkipped={!score.selectedOption} />
      <Container>
        <p>Question {id}</p>
        <p>
          <b style={{ fontSize: "1.5rem" }}>{question}</b>
        </p>
        <ol type="A">
          {options.map((option, index) => {
            return (
              <li key={index}>
                <Label>
                  <CheckboxFiled
                    checked={option === score.selectedOption}
                    onChange={() => {
                      if (option === score.selectedOption) {
                        updateScore("reset", option, id);
                      } else if (option === answer) {
                        updateScore("Incremented", option, id);
                      } else {
                        updateScore("decremented", option, id);
                      }
                    }}
                  />
                  {option}
                </Label>
              </li>
            );
          })}
        </ol>
      </Container>
      <ButtonsContainer>
        {id !== 1 && (
          <Button onClick={handlePrevClicked}>Previous Question</Button>
        )}

        {isLast ? (
          <Button onClick={() => navigate("/result")}>Submit</Button>
        ) : (
          <>
            <Button onClick={handleNextClicked}>
              {score.selectedOption ? "Next Question" : "Skip"}
            </Button>
          </>
        )}
      </ButtonsContainer>
    </>
  );
}

export default Question;
