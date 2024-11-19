/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let breakIndex = -1;
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i+1]) {
            breakIndex = i;
            break;
        }
    }
    if (breakIndex >= 0) {
        for (let i = nums.length - 1; i >= 0; i--) {


        }
    } else {
        nums.reverse();
    }
};

var swap = function (array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
