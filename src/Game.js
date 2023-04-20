import { generateGrid } from "./utilities";
import Gameboard from "./Gameboard";

const newTicTacToeGrid = () => generateGrid(3,3,null);

function Game() {
  const game = newTicTacToeGrid();
  
  return <Gameboard grid={game} />;
}

export default Game;