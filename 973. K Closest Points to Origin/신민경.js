/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((x, y) => {
        const distX = Math.pow(x[0], 2) + Math.pow(x[1], 2)
        const distY = Math.pow(y[0], 2) + Math.pow(y[1], 2)
        
        return distX - distY
    })
    
    return points.slice(0, k)
};
