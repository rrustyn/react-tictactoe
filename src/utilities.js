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

export {generateGrid};