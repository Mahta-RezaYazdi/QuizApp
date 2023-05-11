import styled from "styled-components";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Bar = styled.div`
  display: inline-block;
  width: 10%;
  cursor: pointer;
  text-align: center;
  font-size: 0.7rem;
  background-color: ${(props) => props.bgColor};
`;

// const numberOfBars = 10;
const initialBars = new Array(10).fill("notVisited");

function ProgressBar({ questionNumber, isSkipped }) {
  const [bars, setBars] = useState(initialBars);
  const navigate = useNavigate();

  useEffect(() => {
    setBars(
      bars.map((b, i) => {
        if (i + 1 === questionNumber) {
          return isSkipped ? "skipped" : "visited";
        } else {
          return b;
        }
      })
    );
  }, [questionNumber, isSkipped]);

  return (
    <div>
      {bars.map((b, i) => {
        return (
          <Bar
            onClick={() => {
              console.log("clicked");
              navigate(`/question/${i + 1}`);
            }}
            key={i}
            bgColor={
              b === "notVisited"
                ? "lightgray"
                : b === "skipped"
                ? "hsl(30, 100%, 80%);"
                : "lightblue"
            }
          >
            {i + 1}
          </Bar>
        );
      })}
    </div>
  );
}

ProgressBar.propTypes = {
  questionNumber: PropTypes.number,
  isSkipped: PropTypes.boolean,
};

export default ProgressBar;
