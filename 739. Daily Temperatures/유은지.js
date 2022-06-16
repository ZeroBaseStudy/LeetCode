var dailyTemperatures = function (temperatures) {
  let day = new Array(temperatures.length).fill(0); // 온도 길이만큼 0으로 채운 배열

  for (let i = 0; i < temperatures.length; i++) {
    let count = 0; // 카운트 할 변수
    
    for (let j = i + 1; j < temperatures.length; j++) {    
      count++; // count 1씩 올려주기 
      if (temperatures[i] < temperatures[j]) {  // 만약 현재 온도보다 다음에 따뜻한 온도가 오면 값 갱신해주고 break
        day[i] += count; 
        break;
      }
    }
  }
  return day;
};
