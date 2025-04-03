/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  
    let maxIndex = 0;

    for(let i = 0; i < nums.length; i++){

        if(i > maxIndex) return false;

        if(nums[i] + i > maxIndex){
            maxIndex = nums[i] + i;
        }

        if(maxIndex > nums.length - 1) return true;
    }

    return true;
};

let nums = [2, 0];

let answer = canJump(nums);

console.log(answer);