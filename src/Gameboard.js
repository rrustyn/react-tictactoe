function Gameboard({ grid, handleClick }) {
  return (
    <div style={{ display: 'inline-block' }}>
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
            <Cell key={`${columnIndex}-${rowIndex}`}
              cell={cell}
              handleClick={() => handleClick(columnIndex, rowIndex)} />
          )))}
      </div>
    </div>
  );
}

const cellStyle = {
  backgroundColor: '#fff',
  height: 75,
  width: 75,
};

function Cell({ cell, handleClick }) {
  return <div style={cellStyle}>
    <button type="button" onClick={handleClick}>
      {cell}
    </button>
  </div>;
}

export default Gameboard;