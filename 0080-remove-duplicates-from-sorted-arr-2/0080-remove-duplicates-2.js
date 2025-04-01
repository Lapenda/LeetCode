/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let elements = 0;

    let counter = [];

    for(let i = 0; i < nums.length; i++){
        counter[nums[i]] = 0;        
    }

    for(let i = 0; i < nums.length; i++){
        if(counter[nums[i]] < 2){
            counter[nums[i]]++;
            nums[elements] = nums[i];
            elements++;
        }
    }

    return elements;
};

let nums = [1,1,1,2,2,2,4];

let k = removeDuplicates(nums);

let i = 0;

while(i < k){
    console.log(nums[i]);
    i++;
}