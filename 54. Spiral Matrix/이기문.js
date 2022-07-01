/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let arr = [];
    let direction = 1;
    let x, y, num;
    x = y = num = 0;

    let xleng = matrix[0].length;
    let yleng = matrix.length - 1;
    let tmp = xleng * (yleng + 1);
    while (arr.length !== tmp) {
        for (let i = 0; i < xleng; i++) {
            if (num === 0) {
                arr.push(matrix[y][x]);
                num++;
                continue;
            }
            x += direction;
            arr.push(matrix[y][x]);
        }
        xleng--;
        // if(xleng <= 0 || yleng<= 0) break;

        for (let j = 0; j < yleng; j++) {
            y += direction;
            arr.push(matrix[y][x]);
        }
        yleng--;

        direction *= -1;

    }
    return arr
};
