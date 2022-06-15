var addBinary = function(a, b) {
    let result = []
    let carry = 0
    let len = Math.max(a.length, b.length)
    
    a = "0".repeat(len - a.length) + a
    b = "0".repeat(len - b.length) + b

    for (let i = len - 1; i >= 0; i--) {
        result[i] = carry + Number(a[i]) + Number(b[i])
        if (result[i] > 1) {
            carry = 1
            result[i] %= 2
        }
        else carry = 0
    }

    if (carry) result.unshift(carry)
    
    return result.join('')
};
