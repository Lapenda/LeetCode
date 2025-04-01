/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    let majEl;
    let counter = [];
    let max = 0;

    for(let i = 0; i < nums.length; i++){
        counter[nums[i]] = 0;
    }

    for(let i = 0; i < nums.length; i++){
        counter[nums[i]]++;
        if(counter[nums[i]] > max){
            max = counter[nums[i]];
            majEl = nums[i];
        }
    }

    return majEl;
};

let nums = [2,2,1,1,1,2,2];

let element = majorityElement(nums);

console.log(element);