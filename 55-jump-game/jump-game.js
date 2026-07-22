/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let f = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (i > f) {
            return false;
        }
        f = Math.max(f, i + nums[i]);
    }
    return true;
};