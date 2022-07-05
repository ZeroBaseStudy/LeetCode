/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    let count = 0
    for (let j = (i + 1) % nums.length; ; j = (j + 1) % (nums.length)) {
      // console.log(`nums[i]:${nums[i]} nums[j]:${nums[j]} j: ${j}`);
      if (nums[i] < nums[j]) {
        res.push(nums[j]);
        break;
      } else if (count === (nums.length * 2)) {
        res.push(-1);
        break;
      }
      count++;
    }

  }

  return res;
};