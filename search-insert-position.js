/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    let set = 0;
    if (target > nums[nums.length-1]) {
        index = nums.length
    } else if (target < nums[0]) {
        index = 0;
    } else {
        nums.forEach((num, i) => {
            if (num === target) {
                index = i;
                set = 1;
            } else if (num > target && !set) {
                index = i;
                set = 1;
            }
        })
    }
    return index;
};

// console.log(searchInsert([1,3,5,6], 5))
// console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 2))
// console.log(searchInsert([1], 0))
