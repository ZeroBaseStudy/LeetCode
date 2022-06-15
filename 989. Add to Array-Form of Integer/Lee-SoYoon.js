/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {      
  if(214748364 > parseInt(num.join("")) + k){
    return (parseInt(num.join("")) + k).toString().split('')
  }
    
if (num[0] === 0) return k.toString().split('');
    
  let len = num.length > k.toString().length ? num.length : k.toString().length;

  let result = new Array(len + 1).fill(0);

  while (num.length) {
    let n1 = num.pop();
    let n2 = k % 10;
    let res = n1 + n2;

    k = parseInt(k / 10);

    if (res > 9) {
      result[len - 1]++;
      res %= 10;
    }
      
    let temp = result[len] + res;
    if (temp > 9) {
      result[len--] = 0;
      result[len]++;
    } else {
      result[len--] += res;
    }
    
  }
    
    if (k > 0) {
    let i = result.lastIndexOf(0);
    while (k > 0) {
      if (k % 10 !== 0) {
        result[i--] = k % 10;
      }

      k = parseInt(k / 10);
    }
  }

  if (result[0] === 0) result.shift();
  return result;
};
