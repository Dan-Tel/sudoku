module.exports = function solveSudoku(matrix) {
  function solve() {
    let currPos = searchEmpty();

    if (currPos === null) {
      return true;
    }

    let row = currPos[0];
    let col = currPos[1];
    
    for (let value = 1; value <= 9; value++) {
      let isValidValue = true;

      if (matrix[row].includes(value)) isValidValue = false;
      for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][col] === value) isValidValue = false;
      }
      let rowBox = Math.floor(row / 3) * 3;
      let colBox = Math.floor(col / 3) * 3;
      for (let i = rowBox; i < rowBox + 3; i++) {
        for (let j = colBox; j < colBox + 3; j++) {
          if (matrix[i][j] === value) isValidValue = false;
        }
      }

      if (isValidValue === true) {
        matrix[row][col] = value;
        if (solve()) {
          return true;
        }
        matrix[row][col] = 0;
      }
    }
    return false;
  }

  function searchEmpty() {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix.length; col++) {
        if (matrix[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  }
  solve();
  return matrix;
}
