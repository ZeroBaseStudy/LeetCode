/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let map = new Map();
    let result = [];
    
    // 거리 구하기
    for(let i in points){
        let dist = Math.sqrt((points[i][0] ** 2) + (points[i][1] ** 2));
        map.set(points[i], dist);
    }
        
    // 오름차순 정렬
    let arr = Array.from(map).sort((a, b) => a[1] - b[1]);
        
    for(let i = 0 ; i < k ; i++){
        result.push(arr[i][0])
    }
    
    return result;
};
