/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    let a;
    let b;
    const set = new Set();
    for (let row of grid) {
        for (let r of row) {
            if (set.has(r)) {

                a = r;
            } else {
                set.add(r)
            }
        }
    }

    let total = grid.length * grid.length;
    for (let i = 1; i <= total; i++) {
        if (!set.has(i)) {
            b = i;
            break;
        }
    }
    return [a,b];
};