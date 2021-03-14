/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let len = 0;
    for(let index = 0; index < nums.length; index++) {
        const value = nums[index];
        if (typeof nums[index + 1] !== 'undefined' && value === nums[index+1]) {
            while(value === nums[index+1]) {
                nums = nums.slice(0, index + 1).concat(nums.slice(index + 2, nums.length))
            }
        }
    }
    nums = [...nums]
    return nums.length;
};

// console.log(removeDuplicates([1,1,2]))
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
