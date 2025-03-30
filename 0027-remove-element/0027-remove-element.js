/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let p = 0;
    let counter = 0;
    
    while(p < nums.length){
        if(nums[p] !== val){
            nums[counter] = nums[p];
            p++;
            counter++;
        }else{
            p++;
        }
    }

    return counter;
};

//test case
let nums = [3,2,2,3];
let val = 3;

let k = removeElement(nums, val);

console.log(k);

nums.forEach((num, index) => {
    if(index < k) console.log(num);
})