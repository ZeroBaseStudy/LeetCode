var multiply = function(s1, s2) {
    if (s1 === '0' || s2 === '0') return '0'
    
    let res = Array(s1.length + s2.length - 1).fill(0)
    
    for (let i = 0; i < s1.length; i++) {
        for (let j = 0; j < s2.length; j++) {
            res[i + j] += s1[s1.length - 1 - i] * s2[s2.length - 1 - j] // 역순으로 자리수 곱
        }
    }

    for (let i = 0; i < res.length - 1; i++) {
        res[i + 1] += parseInt(res[i] / 10)
        res[i] %= 10
    }
    return res.reverse().join('')
}
