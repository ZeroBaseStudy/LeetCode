var addBinary = function(a, b) {
let i = a.length - 1, j = b.length - 1, k = 0;
    let result = [];
    while (i >= 0 && j >= 0) {
        addSum(+a[i] + +b[j] + k);
        i--;
        j--;
    }
    if (i >= 0) {
        do {
            addSum(+a[i] + k);
            i--;
        } while (i >= 0);
    } else if (j >= 0) {
        do {
            addSum(+b[j] + k);
            j--;
        } while (j >= 0);
    }
    if (k !== 0) {
        result.push(1);
    }
    return result.reverse().join('');
    
    function addSum(res) {
        if (res > 1) {
            result.push(res > 2 ? 1: 0);
            k = 1;
        } else {
            result.push(res);
            k = 0;
        }
    }
};
