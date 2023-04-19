import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
    </div>
  );
}

function Game() {
  const grid = newTicTacToeGrid();
  
  return null;
}

function Grid({grid}) {
  return (
    <div style = {{ display: 'inline-block'}}>
      <div
        style={{
          backgroundColor: '#000',
          display: 'grid',
          gridTemplateRows: `repeat(${grid.length}, 1fr)`,
          gridTemplateColumns: `repeat(${grid[0].length}, 1fr)`,
          gridGap: 2,
        }}
      >
        {grid.map((row, rowIndex) => 
        row.map((cell, columnIndex) => (
          null
        )))}
      </div>
    </div>
  )
}

const newTicTacToeGrid = () => generateGrid(3,3,null);

/**
 * Generate a grid rows tall by columns wide 
 * with all cell values set to fillValue
 * 
 * @param {Int} rows 
 * @param {Int} columns 
 * @param {*} fillValue 
 */
function generateGrid(rows, columns, fillValue) {
  return Array.from(
    { length: rows },
    row => Array.from(
      { length: columns },
      cell => fillValue));
}

export default App;

export {generateGrid};