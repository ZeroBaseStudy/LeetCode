var addToArrayForm = function(num, k) {
    let sum = 0
    for (let i = num.length - 1; i >= 0; i--) {
        sum = k + num[i]
        k = parseInt(sum / 10)
        num[i] = sum % 10
    }

    while (k > 0) {
        num.unshift(k % 10)
        k = parseInt(k / 10)
    }
  
    return num
};
