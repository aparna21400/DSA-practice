/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = nums.length;
    let i = 1;
    while (i < k) {
        if (nums[i] === nums[i - 1]) {
            for (let j = i; j <= k - 1; j++) {
                nums[j] = nums[j + 1];
            }
            k--;

        } else {
            i++
        }
    }
    return k
};