/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let buy = prices[0];
    let n = prices.length;
    let maxProfit = 0;
    for (let i = 1; i <= n - 1; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        }
        let profit = prices[i] - buy;

        if (maxProfit < profit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};