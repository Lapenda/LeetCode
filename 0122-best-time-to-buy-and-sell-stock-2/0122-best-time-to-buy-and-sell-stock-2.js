/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let profit = 0;
    let finalProfit = 0;
    let minPrice = prices[0];
    let flag = false;

    for(let i = 0; i < prices.length; i++){

        if(prices[i] < prices[i-1]){
            minPrice = prices[i];
            flag = true;
        } 
        if(prices[i] - minPrice > profit && flag === false){
            profit = prices[i] - minPrice;
        }
        if(flag){
            finalProfit += profit;
            profit = 0;
            flag = false;
        }
    }

    if(profit > 0){
        finalProfit += profit;
        profit = 0;
    }

    return finalProfit;
};

let prices = [7,1,5,3,6,4];

let profit = maxProfit(prices);

console.log(profit);