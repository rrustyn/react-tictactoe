import { useReducer } from "react";
import { generateGrid } from "./utilities";
import Gameboard from "./Gameboard";

//Call to generate a 3 x 3 grid with all cells set to null
const newTicTacToeGrid = () => generateGrid(3, 3, null);

//Call to create a clone of an array
const clone = x => JSON.parse(JSON.stringify(x));

const NEXT_TURN = {
  O: 'X',
  X: 'O',
};

const initialState = {
  grid: newTicTacToeGrid(),
  turn: 'X',
};

const reducer = (state, action) => {
  console.log(`the action is ${JSON.stringify(action)}`);
  console.log(`the action payload is ${action.payload}`);
  switch (action.type) {
    case 'CLICK': {
      const { x, y } = action.payload;
      const nextState = clone(state);
      const { grid, turn } = nextState;
      
      console.log(`grid[y][x] is ${grid[y][x]}`)
      //If grid has a value, do nothing
      if (grid[y][x]) {
        return state;
      }

      //Assign cell current turn value
      grid[y][x] = turn;

      nextState.turn = NEXT_TURN[turn];

      return nextState;
    }

    default:
      return state;
  }
};

function Game() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { grid } = state;
  const handleClick = (x, y) => {
    dispatch({ type: 'CLICK', payload: { x, y } });
  };

  return <Gameboard grid={grid} handleClick={handleClick} />;
}

export default Game;