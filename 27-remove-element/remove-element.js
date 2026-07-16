/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = nums.length;
    let i = 0;
    while (i < k) {
        if (nums[i] == val) {
            // to remove the element
            for (let j = i; j < k - 1; j++) {
                nums[j] = nums[j + 1];
            }
            // to count non-val element
            k--;
        } else {
            i++;
        }
    }
    return k;
};