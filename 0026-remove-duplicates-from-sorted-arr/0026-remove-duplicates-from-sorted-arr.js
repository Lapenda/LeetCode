/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let counter = 0;

    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== nums[i+1]){
            nums[counter] = nums[i];
            counter++;
        }
    }

    return counter;
};

let nums = [0,0,1,1,1,2,2,3,3,4];
let k = removeDuplicates(nums);

console.log(k);
nums.forEach((num, index) => {
    if(index < k) console.log(num);
})