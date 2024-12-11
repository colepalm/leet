/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (nums.length < 2) return nums;
    let breakIndex = -1;
    for (let i = nums.length - 2; i >= 0; --i) {
        if (nums[i] < nums[i + 1]) {
            breakIndex = i;
            break;
        }
    }
    for (let i = nums.length - 1; i >= 0; --i) {
        if (nums[i] > nums[breakIndex]) {
            swap(nums, breakIndex, i);
            break;
        }
    }
    reverse(nums, breakIndex + 1, nums.length - 1)
};

var swap = function (array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

var reverse = function(nums, lo, hi) {
    if (lo >= hi) return
    swap(nums, lo, hi)
    reverse(nums, lo + 1, hi - 1)
}

let nums = [1,2,3]
nextPermutation(nums);
console.log(nums)
