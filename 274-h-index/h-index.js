/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let n = citations.length;

    citations.sort((a, b) => a - b);
    let i = 0;

    while (i <= n - 1) {
        let v = citations[i];

        if (n - i <= v) {
            return n - i
        }
        i++;

    }
    return 0;
};