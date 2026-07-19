/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    return nums[Math.floor(n/2)];
};
