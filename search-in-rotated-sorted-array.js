/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return recursiveSearch(nums, target);
};

var recursiveSearch = function(nums, target) {
    if (nums.length === 1) {
        if (nums[0] === target) {
            return 0;
        } else {
            return -1;
        }
    }
    const n = nums.length;
    let split;
    if (n % 2 === 0) {
        split = nums.length / 2;
    } else {
        split = (nums.length - 1) / 2;
    }

    if (target >= nums[0]) {
        if (nums[split] > nums[0]) {
            if (target >= nums[split]) {
                return processResult(split, recursiveSearch(nums.slice(split), target));
            } else {
                return processResult(0, recursiveSearch(nums.slice(0, split + 1), target));
            }
        } else {
            return processResult(0, recursiveSearch(nums.slice(0, split + 1), target));
        }
    } else {
        if (nums[nums.length - 1] > nums[split]) {
            if (target <= nums[split]) {
                return processResult(0, recursiveSearch(nums.slice(0, split + 1), target));
            } else {
                return processResult(split, recursiveSearch(nums.slice(split), target));
            }
        } else {
            return processResult(split, recursiveSearch(nums.slice(split), target));
        }
    }
}

var processResult = function (split, returnedValue) {
    if (returnedValue < 0) {
        return -1;
    } else {
        return split + returnedValue;
    }
}

// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([1], 0));
console.log(search([5,1,3], 1));
