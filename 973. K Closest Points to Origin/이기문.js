/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {

    //원점에서 거리 구하는 함수
    let goras = (numarr) => {
        let sqrt = (numarr[0] * numarr[0]) + (numarr[1] * numarr[1]);
        return sqrt;
    }

    //각 점마다 거리 구하기
    for (let i = 0; i < points.length; i++) {
        // console.log(goras(points[i]));  
        points[i].push(goras(points[i]));
    }
    //거리로 오름 차순 하기
    points.sort((x, y) => x[2] - y[2])

    let result = [];
    //구해야는 점의 개수만큼 푸쉬하기
    for (let j = 0; j < k; j++) {
        //거리 제거 후 푸쉬하기
        points[j].pop();
        result.push(points[j])
    }
    // console.log(points) 
    return result
};
