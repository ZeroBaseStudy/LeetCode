var dailyTemperatures = function(temperatures) {
  let result = [];
    for(let i =0; i<temperatures.length; i++) {
      let count=0;
      result[i] = count;
      for(let j=i+1; j<temperatures.length; j++) {
        count += 1;
        if(temperatures[i] < temperatures[j]) {
          result[i] = count; 
          break;
        }
        
      }
      console.log(count);
    }
  return result;
};
