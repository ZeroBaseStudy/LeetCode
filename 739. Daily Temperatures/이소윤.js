/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // create the result array with same length as temperatures array
	// we will be adding num of days from right to left in this array
    const result = new Array(temperatures.length);
    const monoStack = [];
    
    for(let idx = temperatures.length - 1; idx >= 0; --idx) {
        const temp = temperatures[idx];
		
        while(monoStack.length && monoStack[monoStack.length - 1][0] <= temp) {
            monoStack.pop();
        }

        const numOfDays = monoStack.length ? (monoStack[monoStack.length - 1][1] - idx) : 0;
        result[idx] = numOfDays;

        monoStack.push([temp, idx]);
    }
    return result;  
};
