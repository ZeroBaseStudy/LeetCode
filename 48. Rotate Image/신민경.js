/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  const len = matrix.length - 1

  for (let i = 0; i <= len / 2 ; i++) {
    for (let j = 0; j < len / 2; j++) {
      rotateMatrix(i, j)
    }
  }

  function rotateMatrix(i, j) {
    const first = matrix[i][j]
    const second = matrix[j][len - i]
    const third = matrix[len - i][len - j]
    const forth = matrix[len - j][i]
    
    matrix[i][j] = forth
    matrix[j][len - i] = first
    matrix[len - i][len - j] = second
    matrix[len - j][i] = third
  }
};
