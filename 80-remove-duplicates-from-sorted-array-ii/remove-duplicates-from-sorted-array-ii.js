/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
        let k = 2;
       
    for (let i = 2; i < n; i++) {
        if (nums[i]!== nums[k - 2]) {
            nums[k] = nums[i];
            k++
        }
    }
    return k;
};