/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const spiral = []
    let totalElemCount = matrix.length * matrix[0].length
    
    let row = 0
    let col = -1
    let count = 0
    let elemCount = 0
    
    while (totalElemCount > elemCount) {
        for (let i = col + 1; i < matrix[0].length - count; i++) { // left -> right
          spiral.push(matrix[row][i])
            elemCount++
        }
        col = matrix[0].length - 1 - count
        
        if (totalElemCount <= elemCount) break;

        for (let i = row + 1; i < matrix.length - count; i++) { // top -> bottom
            spiral.push(matrix[i][col])
            elemCount++
        }
        row = matrix.length - 1 - count
        
        if (totalElemCount <= elemCount) break;

        for (let i = col - 1; i >= count; i--) { // right -> left
            spiral.push(matrix[row][i])
            elemCount++
        }
        col = count
        
        if (totalElemCount <= elemCount) break;

        count++

        for (let i = row - 1; i >= count; i--) { // bottom -> top
            spiral.push(matrix[i][col])
            elemCount++
        }
        row = count
        
        if (totalElemCount <= elemCount) break;
    }
    return spiral
};
