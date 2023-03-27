var maxProfit = function(prices) {
    let buy = prices[0];
    let sell = prices[0];
    let buffer = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buffer) {
            buffer = prices[i];
        } else if (prices[i] - buffer > sell - buy) {
            buy = buffer;
            sell = prices[i];
        }
    }

    let profit = sell - buy;

    return profit > 0 ? profit : 0;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([2,1,2,1,0,1,2])); // 2
console.log(maxProfit([2,4,1])); // 2