import { createContext } from "react";
import PropTypes from "prop-types";
import { useReducer } from "react";

export const ScoreContext = createContext();

const scoreReducer = (scores, action) => {
  switch (action.type) {
    case "Incremented": {
      return scores.map((s) => {
        if (s.id === action.id) {
          return {
            ...s,
            selectedOption: action.selectedOption,
            score: 1,
          };
        } else {
          return s;
        }
      });
    }
    case "decremented": {
      return scores.map((s) => {
        if (s.id === action.id) {
          return {
            ...s,
            selectedOption: action.selectedOption,
            score: -1,
          };
        } else {
          return s;
        }
      });
    }
    case "reset": {
      return scores.map((s) => {
        if (s.id === action.id) {
          return {
            ...s,
            selectedOption: null,
            score: 0,
          };
        } else {
          return s;
        }
      });
    }
    default: {
      throw new Error(`Unkown action: ${action.type}`);
    }
  }
};

const initialScore = [
  {
    id: 1,
    selectedOption: null,
    score: 0,
  },
  {
    id: 2,
    selectedOption: null,
    score: 0,
  },
  {
    id: 3,
    selectedOption: null,
    score: 0,
  },
  {
    id: 4,
    selectedOption: null,
    score: 0,
  },
  {
    id: 5,
    selectedOption: null,
    score: 0,
  },
  {
    id: 6,
    selectedOption: null,
    score: 0,
  },
  {
    id: 7,
    selectedOption: null,
    score: 0,
  },
  {
    id: 8,
    selectedOption: null,
    score: 0,
  },
  {
    id: 9,
    selectedOption: null,
    score: 0,
  },
  {
    id: 10,
    selectedOption: null,
    score: 0,
  },
];
function ScoreProvider({ children }) {
  const [scores, dispatchScore] = useReducer(scoreReducer, initialScore);
  const updateScore = (type, selectedOption, id) => {
    dispatchScore({
      type,
      selectedOption,
      id,
    });
  };
  return (
    <ScoreContext.Provider value={{ scores, updateScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

ScoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.elementType,
  ]).isRequired,
};

export default ScoreProvider;
