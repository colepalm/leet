/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let perimeter = 0;
    nums.sort((a, b) => b - a)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i+2] + nums[i+1] > nums[i]) {
            let newPerimeter = nums[i] + nums[i+1] + nums[i+2];
            if (newPerimeter > perimeter) {
                perimeter = newPerimeter;
            }
        }
    }
    return perimeter;
};

console.log(largestPerimeter([2,1,2]));
console.log(largestPerimeter([1,2,1,10]));
