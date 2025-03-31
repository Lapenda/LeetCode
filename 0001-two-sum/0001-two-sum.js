/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let outputArray = [];
    let foundIndexes = false;
    
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if((nums[i] + nums[j]) == target){
                outputArray.push(i);
                outputArray.push(j);
                foundIndexes = true;
            }
            if(foundIndexes) break;
        }
        if(foundIndexes) break;
    }

    return outputArray;
};


let nums = [2,7,11,15];
let target = 13;

console.log(twoSum(nums, target)); // Output: [0, 2]