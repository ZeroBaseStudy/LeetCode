var dailyTemperatures = function(temperatures) {
    let res = Array(temperatures.length).fill(0)
    let stack = []
    
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while (stack.length > 0 && stack[stack.length - 1][0] <= temperatures[i]) {
            stack.pop()
        }
        if (stack.length > 0) {
            res[i] = stack[stack.length - 1][1] - i
        }
        
        stack.push([temperatures[i], i])
    }
    
    return res
};
