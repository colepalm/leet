/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        // Check if the left half [left..mid] is sorted
        if (nums[left] <= nums[mid]) {
            // Does the target lie within the sorted left half?
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Otherwise, the right half [mid..right] is sorted
        else {
            // Does the target lie within the sorted right half?
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
};


// console.log(search([4,5,6,7,0,1,2], 0));
// console.log(search([4,5,6,7,0,1,2], 3));
// console.log(search([1], 0));
// console.log(search([5,1,3], 1));
console.log(search([1,3,5], 5));
