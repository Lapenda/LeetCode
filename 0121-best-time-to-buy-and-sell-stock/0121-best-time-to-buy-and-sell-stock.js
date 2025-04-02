/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;
    
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice) minPrice = prices[i];

        if(prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
    }

    return maxProfit;
};

let prices = [7,6,4,7,1];
let profit = maxProfit(prices);

console.log("Case 1 profit: ", profit);

prices = [7,1,5,3,6,4];
profit = maxProfit(prices);

console.log("Case 2 profit: ", profit);
