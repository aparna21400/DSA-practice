
var RandomizedSet = function () {
    this.arr = [];
    this.map = new Map();
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {

    // If value already exists, don't insert it
    if (this.map.has(val)) {
        return false;
    }

    // Add value to array
    this.arr.push(val);

    // Store its index in map
    this.map.set(val, this.arr.length - 1);

    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {

    // If value doesn't exist, nothing to remove
    if (!this.map.has(val)) {
        return false;
    }

    // Get index of value we want to remove
    const index = this.map.get(val);

    // Get last value from array
    const lastValue = this.arr[this.arr.length - 1];

    // Put last value at the position of removed value
    this.arr[index] = lastValue;

    // Update last value's new index
    this.map.set(lastValue, index);

    // Remove last element
    this.arr.pop();

    // Remove value from map
    this.map.delete(val);

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {

    // Generate random index
    const randomIndex = Math.floor(
        Math.random() * this.arr.length
    );

    return this.arr[randomIndex];
};
